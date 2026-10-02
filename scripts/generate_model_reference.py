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

- Cardinality is modelled, but only as far as the ontology states it. The
  converter reads 42 class-scoped `rdfs:subClassOf` restrictions into
  `slot_usage` and 34 `owl:FunctionalProperty` declarations into a slot-level
  `maximum_cardinality: 1`. DFC declares no `owl:maxCardinality` anywhere, so
  the collection side is not derivable: it comes from the curated list in
  `config/dfc-default.yaml` plus, for the remainder, the plural-name
  heuristic. The pages label which is which rather than presenting all three
  as ontology fact.

- Enum values are not in the schema: the five controlled vocabularies are
  external SKOS taxonomies reached via `reachable_from`. The pages list the
  concepts from the bundled copies, and say where the data came from.

- Deprecated classes and slots are excluded from the class and property
  tables, the indexes, and the "available on" lists, because browsing a
  reference is a search for what to use. `owl:deprecated` in the ontology
  becomes `deprecated: true` in the schema and this generator filters on it.
  Each deprecated entity still gets one stub page saying what replaced it, so
  an incoming link or a legacy predicate explains itself rather than 404ing.

- `owl:equivalentClass` becomes `equivalent_to`, holding a full CURIE. The
  local name would not identify the target: `vcard:Agent` and `dfc-b:Agent`
  both local-name to "Agent".
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


def cardinality_notes(schema: dict, usage: dict) -> str:
    """The cardinality this class actually declares, as a note.

    Two different sources, and conflating them is what the old caveat was for:
    a class-scoped `slot_usage` entry comes from an OWL restriction in the
    ontology and is a real constraint; anything else is the curated n side or
    the plural-name heuristic and is not.
    """
    capped = sorted(
        slot for slot, bounds in (usage or {}).items()
        if bounds.get('maximum_cardinality') == 1
    )
    lines = []
    if capped:
        lines.append(
            '- **`maximum_cardinality: 1`** on '
            + ', '.join(f'`{s}`' for s in capped)
            + '. The ontology restricts this class to exactly one value, so the '
            'generated property is a scalar. Subclasses that do not repeat the '
            'restriction inherit the cap.\n'
        )
    inherited = sorted(
        slot for slot, bounds in (usage or {}).items()
        if bounds.get('minimum_cardinality', 0) >= 1
        and bounds.get('maximum_cardinality') != 1
    )
    if inherited:
        lines.append(
            '- **`minimum_cardinality: 1`** on '
            + ', '.join(f'`{s}`' for s in inherited)
            + '. `validate()` reports the property when it is absent; the '
            'connector constructors stay permissive.\n'
        )
    if not lines:
        lines.append(
            '- The ontology states no cardinality for this class, so none is '
            'claimed here. Where a property is a collection, that comes from '
            'the curated list in `config/dfc-default.yaml` or from the '
            'plural-name heuristic — neither is an ontology fact.\n'
        )
    return ''.join(lines)


def slot_cardinality(slot_name: str, slot: dict, schema: dict) -> str:
    """One line describing a property's cardinality, for its own page."""
    slot = slot or {}
    slot_level = slot.get('maximum_cardinality') == 1
    multivalued = bool(slot.get('multivalued'))

    restricted_on = sorted(
        name for name, definition in (schema.get('classes') or {}).items()
        if slot_name in ((definition.get('slot_usage') or {}))
    )
    parts = []
    if slot_level:
        parts.append(
            '**Single-valued** — the ontology declares this property '
            '`owl:FunctionalProperty`, so it takes at most one value in every '
            'class.'
        )
    elif restricted_on:
        parts.append(
            '**Single-valued on ' + ', '.join(f'`{c}`' for c in restricted_on)
            + '** — the ontology restricts those classes to exactly one value. '
            + 'On '
            + ('that class' if len(restricted_on) == 1 else 'those classes')
            + ' the property is a scalar; elsewhere it may be a collection, '
            'because the ontology is silent.'
        )
    elif multivalued:
        parts.append(
            '**Collection** — the ontology states no upper bound for this '
            'property, so it takes several values. This comes from the curated '
            'list in `config/dfc-default.yaml`, verified against the original '
            'DFC v2 connectors; it is not derived from the ontology.'
        )
    else:
        parts.append(
            '**Scalar** — the ontology states no upper bound and the property '
            'is not in the curated collection list.'
        )
    return ' '.join(parts)


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


def is_deprecated(entry: dict) -> bool:
    """True when the schema marked the entity owl:deprecated.

    The connectors keep generating these (dropping them would change their
    public surface); this only affects the reference.
    """
    return bool(entry.get('deprecated'))


def deprecated_classes(classes: dict) -> set[str]:
    return {n for n, c in classes.items() if is_deprecated(c or {})}


def deprecated_slots(slots: dict) -> set[str]:
    return {n for n, s in slots.items() if is_deprecated(s or {})}


def live_classes(classes: dict) -> dict[str, dict]:
    return {n: c for n, c in classes.items() if not is_deprecated(c or {})}


def live_slots(slots: dict) -> dict[str, dict]:
    return {n: s for n, s in slots.items() if not is_deprecated(s or {})}


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
    live = live_classes(classes)
    dep = deprecated_classes(classes)
    roots = sorted(n for n, c in live.items() if not (c or {}).get('is_a'))
    rows = ['| Class | Parents | Properties |',
            '|---|---|---|']
    for name in sorted(live):
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

    if is_deprecated(cls or {}):
        return deprecated_class_page(name, cls, classes)

    usage = (cls or {}).get('slot_usage') or {}

    chain = parents_of(name, classes)
    children = [c for c in direct_children_of(name, classes)
                if not is_deprecated((classes.get(c) or {}))]
    # Deprecated slots are omitted from the table: this page answers "what
    # can I set on this class", and a deprecated property is not an answer.
    props = [s for s in all_slots_of(name, classes, slots)
             if not is_deprecated(slots.get(s) or {})]
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
    equivalent = (cls or {}).get('equivalent_to')
    if equivalent:
        local = equivalent.split(':')[-1]
        prefix = equivalent.split(':')[0] if ':' in equivalent else ''
        if prefix == 'dfc-b' and local in classes and not is_deprecated(
            classes.get(local) or {}
        ):
            target = f'[`{local}`]({slug(local)}.md)'
        else:
            # Cross-vocabulary alignment (vCard, etc.) or a deprecated target.
            target = f'`{equivalent}`'
        sections.append(
            '## Equivalence\n\n'
            f'- **`owl:equivalentClass`**: {target}\n'
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
        + cardinality_notes(schema, usage)
        + '- `dfc-b:Class:property` local names are never emitted. Predicates '
        'are always the original short form.\n'
    )

    return (
        f'# {name}\n\n'
        f'[← all classes](index.md)\n\n'
        + '\n'.join(sections)
    )


def property_page(name: str, schema: dict, classes: dict, slots: dict) -> str:
    slot = slots[name]

    if is_deprecated(slot or {}):
        return deprecated_property_page(name, slot, classes, schema, slots)

    desc = (slot.get('description') or '').strip()
    domains = slot_domains(slot)
    rng = slot.get('range', '')
    obj = is_object_range(slot, classes)
    inverse = slot.get('inverse')

    # Classes that expose this property, directly or by inheritance.
    exposed: list[str] = []
    for cname in classes:
        if is_deprecated((classes.get(cname) or {})):
            continue
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
    definition.append(
        f'- **Cardinality**: {slot_cardinality(name, slot, schema)}\n'
    )
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


def deprecated_class_page(name: str, cls: dict, classes: dict) -> str:
    """A stub for a deprecated class.

    Exists so a legacy `dfc-b:Enterprise` in someone's data, or an inbound
    link, lands on something that explains itself. Deliberately short: this
    is a tombstone, not documentation of something you should use.
    """
    equivalent = (cls or {}).get('equivalent_to')
    lines = [
        f'# {name} (deprecated)',
        '',
        '!!! warning',
        '',
        f'    **`{name}` is deprecated and should not be used in new data.**',
        '',
    ]
    if equivalent:
        local = equivalent.split(':')[-1]
        if local in classes:
            lines += [
                f'    It is equivalent to '
                f'[`{local}`]({slug(local)}.md) under `owl:equivalentClass`, '
                'which is what the DFC v2.0.0 ontology asserts.',
            ]
        else:
            lines += [
                f'    It is equivalent to `{equivalent}` under '
                '`owl:equivalentClass`, which is what the DFC v2.0.0 '
                'ontology asserts.',
            ]
    else:
        lines += [
            '    The DFC ontology does not record a replacement for it.',
        ]
    lines += [
        '',
        '## Reading legacy data',
        '',
    ]
    if equivalent:
        local = equivalent.split(':')[-1]
        if local in classes:
            lines += [
                f'Importing a document that uses `{name}` still works. The '
                'connectors map the legacy type onto '
                f'`{local}` automatically, so a document written against an '
                'older DFC version loads without rewriting:',
                '',
                '```typescript',
                f'const [org] = c.import({{ "@id": "https://example.org/o/1", "@type": "dfc-b:{name}" }});',
                f'org.semanticType;  // "dfc-b:{local}"',
                '```',
                '',
                'This is one-way. You cannot export a `' + name + '`.',
            ]
        else:
            lines.append(
                f'Importing a document that uses `{name}` maps it to '
                f'`{equivalent}` on the way in.'
            )
    else:
        lines.append(
            f'The connectors still accept `{name}` on import. There is no '
            'automatic mapping, so check what you get back.'
        )
    lines += [
        '',
        '## Reference',
        '',
        f'- Predicate: `dfc-b:{name}`',
    ]
    if (cls or {}).get('is_a'):
        lines.append(f'- Subclass of: `{cls["is_a"]}`')
    lines += [
        f'- Source: [`owl:deprecated` in the DFC '
        f'{schema_version_note()}]',
        '',
    ]
    return '\n'.join(lines)


def schema_version_note() -> str:
    return 'v2.0.0 ontology'


def deprecated_property_page(name: str, slot: dict, classes: dict,
                             schema: dict, slots: dict) -> str:
    """A stub for a deprecated slot.

    Two of the seven are not obvious: `quantity` and `country` collide with
    `has_quantity` and `has_country`, so a reader who reaches this page
    needs to know the non-deprecated spelling.
    """
    desc = (slot.get('description') or '').strip()
    domains = slot_domains(slot)
    rng = slot.get('range', '')
    inverse = slot.get('inverse')
    lines = [
        f'# {name} (deprecated)',
        '',
        '!!! warning',
        '',
        f'    **`{name}` is deprecated and should not be used in new data.**',
        '',
        '    The DFC ontology does not assert a replacement for it.',
    ]
    lines += [
        '',
        '## Definition',
        '',
        f'- **Predicate**: `{predicate_for(name, slot)}`',
        f'- **Range**: `{rng}`',
    ]
    if inverse:
        lines.append(f'- **Inverse**: `{inverse}`')
    if domains:
        lines += [
            '- **Declared domain**: '
            + ', '.join(f'`{d}`' for d in sorted(domains)),
        ]
    if desc and not desc.lower().endswith(':' + name.lower()):
        # The ontology's own rdfs:comment is sometimes just "DEPRECATE",
        # which says nothing the warning above does not.
        if desc.lower() not in ('deprecate', 'deprecated'):
            # The ontology sometimes names a replacement in prose rather
            # than in an axiom. `uses` says "Use `refersTo` instead" -- but
            # `refersTo` is itself deprecated, so the chain dead-ends and
            # saying only the first hop would be misleading.
            m = re.search(r'[Uu]se\s+`?(\w+)`?\s+instead', desc)
            if m:
                named = m.group(1)
                # The prose names the OWL local name; the schema keys on
                # snake_case, so resolve through the alias.
                target = named
                for sname, sdata in slots.items():
                    if named in (sdata.get('aliases') or []):
                        target = sname
                        break
                named_dep = is_deprecated(slots.get(target) or {})
                target_link = (f'[`{target}`]({slug(target)}.md)'
                               if target in slots else f'`{named}`')
                lines += ['', '## Replacement', '',
                          f'The DFC ontology says to use {target_link} instead.']
                if named_dep:
                    lines += [
                        '',
                        f'**`{target}` is also deprecated.** The ontology '
                        'offers no live replacement for either, so this slot '
                        'has no current equivalent in DFC v2.0.0.',
                    ]
            else:
                lines += ['', '## Description', '', desc]
    lines += [
        '',
        '## Note',
        '',
        'The connectors still accept this predicate on import and will '
        'round-trip it. Excluding it from the reference is about not '
        'pointing new work at a deprecated property, not about it being '
        'unreadable.',
        '',
    ]
    return '\n'.join(lines)


def property_index_page(schema: dict, slots: dict, classes: dict) -> str:
    live = live_slots(slots)
    dep = sorted(deprecated_slots(slots))
    rows = ['| Property | Predicate | Range | Kind |',
            '|---|---|---|---|']
    for name in sorted(live):
        slot = live[name]
        kind = 'object' if is_object_range(slot, classes) else 'literal'
        rows.append(
            f'| [`{name}`]({slug(name)}.md) '
            f'| `{predicate_for(name, slot)}` '
            f'| `{slot.get("range", "")}` | {kind} |'
        )
    dep_note = ''
    if dep:
        dep_links = ', '.join(f'[`{n}`]({slug(n)}.md)' for n in dep)
        dep_note = (
            f'\n## Deprecated ({len(dep)})\n\n'
            'Not listed above, and removed from every class page. Each still '
            'has a page saying so:\n\n'
            f'{dep_links}\n'
        )
    return f"""# DFC properties

{len(live)} slots in the schema, generated. "Object" properties point at
another DFC class; "literal" ones carry a scalar.

{chr(10).join(rows)}
{dep_note}"""


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
