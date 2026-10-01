#!/usr/bin/env python3
"""Generate the DFC model reference under docs/reference/model/.

One page per class, per property, and per controlled vocabulary, emitted from
the LinkML schema so the reference cannot drift from what the connectors
actually build. Wired into generate_all.py, so `make check-generated` fails
when the schema changes and the reference is not regenerated.

Design notes:

- The class and property names here are the **LinkML/OWL** names
  (`SuppliedProduct`, `has_unit`). Each connector renames these for its own
  idioms (`suppliedBy`, `hasUnit`/`unit`), and the mapping is not regular
  enough to derive. The reference therefore links to the migration guide for
  the per-language name rather than guessing.

- The schema carries no `required` or `multivalued` flags, so the reference
  does not claim any. Cardinality is decided at generation time by the
  connector generators (heuristically, from the property name), which is
  recorded on each property page as a caveat rather than presented as
  modelled fact.

- Enum values are not in the schema: the five controlled vocabularies are
  external SKOS taxonomies reached via `reachable_from`. The pages list the
  concepts from the bundled copies, and say where the data came from.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parent.parent
DEFAULT_SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'
DEFAULT_OUT = REPO / 'docs' / 'reference' / 'model'
VOCAB_DIR = REPO / 'ruby-gem' / 'vocabularies'

# Enum name -> bundled compacted-SKOS file. The schema's reachable_from names
# the upstream URL; the bundled copy is what the connectors ship offline.
VOCAB_FILES = {
    'Facet': 'facet.jsonld',
    'Measure': 'measure.jsonld',
    'ProductType': 'product_type.jsonld',
    'Scope': 'scope.jsonld',
    'VocabularyTerm': 'vocabulary_term.jsonld',
}

# Slot names that are not real DFC properties: LinkML bookkeeping.
INTERNAL_SLOT_PREFIXES = ('name_parts',)


def load_schema(path: Path) -> dict:
    with open(path, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


def slug(name: str) -> str:
    """Filesystem/markdown-safe name. DFC names are already CamelCase/snake."""
    return re.sub(r'[^A-Za-z0-9_.-]', '_', name)


def esc(text: str) -> str:
    """Escape text for a markdown table cell."""
    return (text or '').replace('|', r'\|').replace('\n', ' ').strip()


def predicate_for(slot_name: str, slot: dict) -> str:
    """The original short-form DFC predicate, e.g. `dfc-b:VATnumber`."""
    aliases = slot.get('aliases') or [slot_name]
    return f'dfc-b:{aliases[0]}'


def parents_of(class_name: str, classes: dict) -> list[str]:
    chain = [class_name]
    seen = {class_name}
    while True:
        parent = (classes.get(chain[-1]) or {}).get('is_a')
        if not parent or parent in seen:
            return list(reversed(chain))
        seen.add(parent)
        chain.append(parent)


def direct_children_of(class_name: str, classes: dict) -> list[str]:
    return sorted(
        n for n, c in classes.items() if (c or {}).get('is_a') == class_name
    )


def own_slots_of(class_name: str, classes: dict, slots: dict) -> list[str]:
    """Slots listed on the class itself (not inherited)."""
    listed = (classes.get(class_name) or {}).get('slots') or []
    return [s for s in listed if s in slots]


def all_slots_of(class_name: str, classes: dict, slots: dict) -> list[str]:
    """Own slots plus every slot inherited up the is_a chain."""
    out: list[str] = []
    for anc in parents_of(class_name, classes):
        for s in own_slots_of(anc, classes, slots):
            if s not in out:
                out.append(s)
    return out


def slot_domains(slot: dict) -> list[str]:
    d = slot.get('domain')
    if isinstance(d, str):
        return [d]
    return list(d or [])


def is_object_range(slot: dict, classes: dict) -> bool:
    return slot.get('range') in classes


def read_vocab(file_name: str) -> list[dict]:
    """Concept labels from a bundled compacted-SKOS vocabulary."""
    path = VOCAB_DIR / file_name
    if not path.exists():
        return []
    with open(path, encoding='utf-8') as fh:
        doc = json.load(fh)
    out = []
    for entry in doc.get('@graph', []):
        if not isinstance(entry, dict):
            continue
        types = entry.get('@type') or []
        if not isinstance(types, list):
            types = [types]
        if 'skos:Concept' not in types:
            continue
        labels = entry.get('skos:prefLabel') or []
        if isinstance(labels, dict):
            labels = [labels]
        en = next(
            (l['@value'] for l in labels
             if isinstance(l, dict) and l.get('@language') == 'en'),
            labels[0]['@value'] if labels and isinstance(labels[0], dict) else None,
        )
        out.append({
            'id': entry.get('@id', ''),
            'label': en or '',
        })
    out.sort(key=lambda c: (c['label'] or c['id']).lower())
    return out


# ---------------------------------------------------------------------------
# Pages
# ---------------------------------------------------------------------------

def class_index_page(schema: dict, classes: dict) -> str:
    roots = sorted(n for n, c in classes.items() if not (c or {}).get('is_a'))
    rows = ['| Class | Parents | Properties |',
            '|---|---|---|']
    for name in sorted(classes):
        parents = parents_of(name, classes)
        n_props = len(all_slots_of(name, classes, schema['slots']))
        rows.append(
            f'| [`{name}`]({slug(name)}.md) '
            f'| {" → ".join(f"`{p}`" for p in parents)} '
            f'| {n_props} |'
        )
    body = f"""# DFC classes

Every class in the DFC Business Ontology, generated from the LinkML schema
(`{schema.get('version', '')}` DFC version, ontology
`v{schema.get('ontology_version', '')}`).

{len(classes)} classes, {len(roots)} of them roots of a hierarchy. Property
counts include everything inherited, so a leaf class still shows the
properties it gets from its ancestors.

## Roots

{', '.join(f'[`{r}`]({slug(r)}.md)' for r in roots)}

## All classes

{chr(10).join(rows)}

## Naming

These are the ontology's names. The connectors expose different names for the
same properties — `has_unit` is `hasUnit` in TypeScript but `unit` in Ruby and
PHP — so the mapping is not mechanical. See the
[migration guide](../../../migration-guide.md) and
[SDK contract](../../../sdk-contract.md) for per-language names.
"""
    return body


def defining_class(class_name: str, slot_name: str, classes: dict,
                    slots: dict) -> str:
    """The nearest ancestor that declares this slot itself.

    Walking the chain root-first and returning the first hit would report the
    root for everything, which is wrong whenever an intermediate class adds
    slots of its own (DefinedProduct declares most of what SuppliedProduct
    exposes, not What_Subject).
    """
    for anc in reversed(parents_of(class_name, classes)):
        if slot_name in own_slots_of(anc, classes, slots):
            return anc
    return class_name


def class_page(name: str, schema: dict, classes: dict, slots: dict) -> str:
    cls = classes[name]
    chain = parents_of(name, classes)
    children = direct_children_of(name, classes)
    props = all_slots_of(name, classes, slots)
    own = set(own_slots_of(name, classes, slots))
    desc = (cls.get('description') or '').strip()

    rows = ['| Property | Predicate | Range | Kind | Defined on |',
            '|---|---|---|---|---|']
    for s in props:
        slot = slots.get(s) or {}
        rng = slot.get('range', '')
        kind = 'object' if is_object_range(slot, classes) else 'literal'
        owner = defining_class(name, s, classes, slots)
        defined = 'this class' if owner == name else f'[`{owner}`]({slug(owner)}.md)'
        rows.append(
            f'| [`{s}`](../properties/{slug(s)}.md) '
            f'| `{predicate_for(s, slot)}` '
            f'| `{rng}` | {kind} | {defined} |'
        )

    sections = []
    if desc:
        sections.append(f'## Description\n\n{desc}\n')
    sections.append(
        '## Identity\n\n'
        f'- **JSON-LD type**: `{f"dfc-b:{name}"}`\n'
        f'- **Hierarchy**: {" → ".join(f"`{p}`" for p in chain)}\n'
    )
    if children:
        sections.append(
            '## Subclasses\n\n'
            + ', '.join(f'[`{c}`](../classes/{slug(c)}.md)' for c in children)
            + '\n'
        )
    sections.append(
        f'## Properties ({len(props)})\n\n'
        + chr(10).join(rows)
        + '\n'
    )
    sections.append(
        '## Notes\n\n'
        '- The schema carries no `required` or `multivalued` flags, so this '
        'page does not state either. Cardinality is decided by the connector '
        'generators from the property name, which is a heuristic — do not rely '
        'on it for validation.\n'
        '- `dfc-b:Class:property` local names are never emitted. Predicates '
        'are always the original short form.\n'
    )

    return (
        f'# {name}\n\n'
        f'[← all classes](index.md)\n\n'
        + '\n'.join(sections)
    )


def property_page(name: str, schema: dict, classes: dict, slots: dict) -> str:
    slot = slots[name]
    desc = (slot.get('description') or '').strip()
    domains = slot_domains(slot)
    rng = slot.get('range', '')
    obj = is_object_range(slot, classes)
    inverse = slot.get('inverse')

    by_domain = defaultdict(list)
    for d in domains:
        by_domain[d].append(name)

    # Classes that expose this property, directly or by inheritance.
    exposed: list[str] = []
    for cname in classes:
        if name in all_slots_of(cname, classes, slots):
            exposed.append(cname)
    exposed.sort()

    sections = []
    if desc:
        sections.append(f'## Description\n\n{desc}\n')

    # Built as a list, not a conditional expression: appending
    # `+ ('...' if cond else '')` after a concatenation would bind the ternary
    # to the whole expression and silently drop the section.
    definition = [
        '## Definition\n\n',
        f'- **Predicate**: `{predicate_for(name, slot)}`\n',
        f'- **Range**: `{rng}`'
        + (' (a DFC class)' if obj else ' (literal)')
        + '\n',
    ]
    if obj and rng in classes:
        definition.append(
            f'- **Target type**: [`{rng}`](../classes/{slug(rng)}.md)\n'
        )
    if inverse:
        definition.append(f'- **Inverse**: `{inverse}`\n')
    sections.append(''.join(definition))
    if domains:
        sections.append(
            '## Declared domain\n\n'
            + ', '.join(
                f'[`{d}`](../classes/{slug(d)}.md)' if d in classes else f'`{d}`'
                for d in sorted(domains)
            )
            + '\n'
        )
    if exposed:
        sections.append(
            f'## Available on ({len(exposed)})\n\n'
            + ', '.join(f'[`{e}`](../classes/{slug(e)}.md)' for e in exposed)
            + '\n'
        )
    sections.append(
        '## Notes\n\n'
        f'- Declared on {len(domains)} class(es) in the ontology, but '
        f'inherited by {len(exposed)}. The connectors place a slot on every '
        'root class when its domain names no schema class, so it is available '
        'everywhere.\n'
        '- The schema records no `required` or `multivalued` flag for this '
        'slot.\n'
    )

    return (
        f'# {name}\n\n'
        f'[← all properties](index.md)\n\n'
        + '\n'.join(sections)
    )


def property_index_page(schema: dict, slots: dict, classes: dict) -> str:
    rows = ['| Property | Predicate | Range | Kind |',
            '|---|---|---|---|']
    for name in sorted(slots):
        slot = slots[name]
        kind = 'object' if is_object_range(slot, classes) else 'literal'
        rows.append(
            f'| [`{name}`]({slug(name)}.md) '
            f'| `{predicate_for(name, slot)}` '
            f'| `{slot.get("range", "")}` | {kind} |'
        )
    return f"""# DFC properties

All {len(slots)} slots in the schema, generated. "Object" properties point at
another DFC class; "literal" ones carry a scalar.

{chr(10).join(rows)}
"""


def enum_page(name: str, schema: dict, concepts: list[dict]) -> str:
    enum = (schema.get('enums') or {}).get(name) or {}
    reach = enum.get('reachable_from') or {}
    desc = (enum.get('description') or '').strip()
    source = reach.get('source_ontology', '')

    sections = []
    if desc:
        sections.append(f'## Description\n\n{desc}\n')
    sections.append(
        '## Source\n\n'
        f'- **Upstream**: <{source}>\n'
        f'- **Root concept class**: `{reach.get("source_class", "")}`\n'
        '- **Values are not embedded in the schema.** The vocabulary is '
        'fetched or bundled separately; the concept list below comes from the '
        'copy bundled with the connectors, so it works offline.\n'
    )
    if concepts:
        rows = ['| Label | CURIE |', '|---|---|']
        for c in concepts:
            rows.append(f'| {esc(c["label"])} | `{esc(c["id"])}` |')
        sections.append(
            f'## Concepts ({len(concepts)})\n\n{chr(10).join(rows)}\n'
        )
    else:
        sections.append(
            '## Concepts\n\n_Bundled copy not found; run `make generate`._\n'
        )

    return (
        f'# {name}\n\n'
        f'[← all vocabularies](index.md)\n\n'
        + '\n'.join(sections)
    )


def enum_index_page(schema: dict) -> str:
    rows = ['| Vocabulary | Upstream source | Bundled concepts |', '|---|---|---|']
    for name, enum in sorted((schema.get('enums') or {}).items()):
        reach = (enum or {}).get('reachable_from') or {}
        count = len(read_vocab(VOCAB_FILES.get(name, '')))
        rows.append(
            f'| [`{name}`]({slug(name)}.md) '
            f'| <{reach.get("source_ontology", "")}> | {count} |'
        )
    return f"""# Controlled vocabularies

The five SKOS controlled vocabularies the DFC models refer to. None of their
values live in the LinkML schema: each is an external taxonomy reached through
`reachable_from`, so the connectors ship a bundled copy to work offline.

{chr(10).join(rows)}

## Loading

A different taxonomy version is opt-in. See
[concepts: vocabularies](../../concepts/vocabularies.md) for the code.
"""

def concepts_index_page() -> str:
    return """# DFC concepts

The five SKOS controlled vocabularies referenced by the DFC models.

| Vocabulary | Used for |
|---|---|
| [`Facet`](Facet.md) | What a product is characterised by (organic, local, ...) |
| [`Measure`](Measure.md) | Units of quantity |
| [`ProductType`](ProductType.md) | What kind of product something is |
| [`Scope`](Scope.md) | Geographic or thematic scope |
| [`VocabularyTerm`](VocabularyTerm.md) | Generic controlled terms |
"""


# ---------------------------------------------------------------------------
# Driver
# ---------------------------------------------------------------------------

def generate(schema_path: Path, out_dir: Path) -> None:
    schema = load_schema(schema_path)
    classes = schema.get('classes') or {}
    slots = schema.get('slots') or {}
    enums = schema.get('enums') or {}

    class_dir = out_dir / 'classes'
    prop_dir = out_dir / 'properties'
    for d in (class_dir, prop_dir):
        if d.exists():
            import shutil
            shutil.rmtree(d)
        d.mkdir(parents=True)
    out_dir.mkdir(parents=True, exist_ok=True)

    for name in sorted(classes):
        (class_dir / f'{slug(name)}.md').write_text(
            class_page(name, schema, classes, slots), encoding='utf-8'
        )
    for name in sorted(slots):
        (prop_dir / f'{slug(name)}.md').write_text(
            property_page(name, schema, classes, slots), encoding='utf-8'
        )

    (class_dir / 'index.md').write_text(
        class_index_page(schema, classes), encoding='utf-8'
    )
    (prop_dir / 'index.md').write_text(
        property_index_page(schema, slots, classes), encoding='utf-8'
    )

    for name in sorted(enums):
        concepts = read_vocab(VOCAB_FILES.get(name, ''))
        (out_dir / f'{slug(name)}.md').write_text(
            enum_page(name, schema, concepts), encoding='utf-8'
        )
    (out_dir / 'index.md').write_text(
        enum_index_page(schema) + '\n' + concepts_index_page(), encoding='utf-8'
    )

    print(f"  - {len(classes)} class pages, {len(slots)} property pages, "
          f"{len(enums)} vocabulary pages", file=sys.stderr)


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--schema', default=str(DEFAULT_SCHEMA))
    p.add_argument('--output', default=str(DEFAULT_OUT))
    args = p.parse_args(argv)
    generate(Path(args.schema), Path(args.output))


if __name__ == '__main__':
    main()
