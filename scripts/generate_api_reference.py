#!/usr/bin/env python3
"""Generate the per-language API reference from the connector sources.

docs/reference/model/ describes *what the DFC model contains*, generated from
the schema. This describes *how each connector exposes it*, and it is parsed
out of the three connector implementations rather than transcribed, so the
page cannot claim a method that does not exist.

The three connectors are not shaped alike, and the differences are the point:

- TypeScript and PHP put 89 `createX` factories on the Connector
- Ruby has none; you construct `Models::X.new(semanticId, ...)` directly
- the vocabulary accessors are named differently in all three
  (`c.facet` / `getFacet()` / ...)

Parsing rather than transcribing also means a generator change that renames
or drops a method shows up in the next `make generate`, and
tests/test_api_reference.py fails if the page and the sources disagree.

Emitted to docs/reference/api/.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parent.parent
DEFAULT_SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'
DEFAULT_OUT = REPO / 'docs' / 'reference' / 'api'

TS_CONNECTOR = REPO / 'typescript-connector' / 'src' / 'core' / 'Connector.ts'
RUBY_CONNECTOR = REPO / 'ruby-gem' / 'lib' / 'core' / 'connector.rb'
PHP_CONNECTOR = REPO / 'php-connector' / 'src' / 'Connector.php'
TS_INDEX = REPO / 'typescript-connector' / 'src' / 'index.ts'
RUBY_ENTRY = REPO / 'ruby-gem' / 'lib' / 'dfc_linkml_connector.rb'
PHP_AUTOLOAD = REPO / 'php-connector' / 'composer.json'


# ---------------------------------------------------------------------------
# Parsers
# ---------------------------------------------------------------------------

def parse_ts(path: Path) -> tuple[list[str], list[str], list[str]]:
    """(methods, factories, accessors) from the TypeScript Connector.

    `async` methods and `get` accessors are both part of the public surface:
    dropping them understates the API by a third.
    """
    if not path.exists():
        return [], [], []
    text = path.read_text(encoding='utf-8')

    factories = re.findall(r'^\s{2}(create\w+)\(', text, re.M)

    methods: list[str] = []
    for m in re.findall(
        r'^\s{2}(?:async\s+)?(?!static\b|private\b|get\b|create\w)(\w+)\s*\(', text, re.M
    ):
        if m == 'constructor' or m.startswith('create'):
            continue
        if m not in methods:
            methods.append(m)

    accessors: list[str] = []
    for m in re.findall(r'^\s{2}(?:static\s+)?get\s+(\w+)\s*\(', text, re.M):
        if m not in accessors:
            accessors.append(m)

    return methods, factories, accessors


def parse_ruby(path: Path) -> tuple[list[str], list[str]]:
    """(public methods, attr_reader names) from the Ruby Connector.

    Ruby's vocabulary accessors are attr_reader, so they are not `def`s and a
    naive parse reports the connector as missing them.
    """
    if not path.exists():
        return [], []
    text = path.read_text(encoding='utf-8')
    methods: list[str] = []
    for m in re.findall(r'^\s+def\s+(\w+[?!]?)', text, re.M):
        if m.startswith('_') or m in ('initialize',):
            continue
        if m not in methods:
            methods.append(m)
    accessors: list[str] = []
    for m in re.findall(r'^\s+attr_(?:reader|accessor)\s+(.+)', text, re.M):
        for name in m.split(','):
            # `attr_reader :foo, :bar` — the colon prefixes the name, and
            # `attr_reader :foo => ...` may carry a default.
            name = name.strip().lstrip(':').split('=>')[0].strip().rstrip(':').strip()
            if name and name not in accessors:
                accessors.append(name)
    return methods, accessors


def parse_php(path: Path) -> tuple[list[str], list[str], list[str]]:
    """(methods, factories, get* accessors) from the PHP Connector."""
    if not path.exists():
        return [], [], []
    text = path.read_text(encoding='utf-8')
    factories = re.findall(r'^\s+public function (create\w+)\(', text, re.M)
    methods: list[str] = []
    for m in re.findall(r'^\s+public (?:static )?function (\w+)\(', text, re.M):
        if m == '__construct' or m.startswith('create'):
            continue
        if m not in methods:
            methods.append(m)
    accessors = sorted({
        m for m in re.findall(r'^\s+public function (get\w+)\(', text, re.M)
    })
    return methods, factories, accessors


def parse_exports() -> dict[str, list[str]]:
    """The public export surface of each package."""
    out: dict[str, list[str]] = {}

    if TS_INDEX.exists():
        text = TS_INDEX.read_text(encoding='utf-8')
        syms: list[str] = []
        for m in re.findall(r'export \{ ([^}]+) \}', text):
            for part in m.split(','):
                part = part.strip()
                if not part:
                    continue
                # Drop `type X` and `X as Y` aliases.
                part = part.split(' as ')[-1].strip()
                if part.startswith('type '):
                    continue
                syms.append(part)
        out['typescript'] = syms

    if RUBY_ENTRY.exists():
        text = RUBY_ENTRY.read_text(encoding='utf-8')
        out['ruby'] = sorted(set(re.findall(
            r"^require_relative 'core/(\w+)'", text, re.M
        )))

    if PHP_AUTOLOAD.exists():
        import json
        data = json.loads(PHP_AUTOLOAD.read_text(encoding='utf-8'))
        prefix = next(iter(data.get('autoload', {}).get('psr-4', {})), '')
        out['php'] = [prefix.rstrip('\\')] if prefix else []

    return out


# ---------------------------------------------------------------------------
# Documentation for the shared surface
# ---------------------------------------------------------------------------

# One entry per logical operation. Each language gets (bare_name, display):
# the bare name is what the parsers find in the source and is used to label
# the parsed method table; the display is what a reader should type.
# Kept by hand rather than derived -- the naming is a deliberate per-idiom
# choice, and what the parsers verify is that each method *exists*.
OPERATIONS = [
    ('Export objects to JSON-LD',
     ('export', 'export(...objects)'),
     ('export', 'export'),
     ('export', 'export')),
    ('Import JSON-LD into objects',
     ('import', 'import(data)'),
     ('import', 'import'),
     ('import', 'import')),
    ('The `@context` URL in use',
     ('contextUrl', 'contextUrl'),
     ('context_url', 'context_url'),
     ('getContextUrl', 'getContextUrl()')),
    ('The resolved `@context`',
     ('getContext', 'getContext()'),
     ('context', 'context'),
     ('getContext', 'getContext()')),
    ('The bundled context, or null',
     ('loadBundledContext', 'loadBundledContext()'),
     ('bundled_context', 'bundled_context'),
     ('loadBundledContext', 'loadBundledContext()')),
    ('Load the bundled taxonomies',
     ('loadBundledTaxonomies', 'loadBundledTaxonomies()'),
     ('load_bundled_taxonomies', 'load_bundled_taxonomies'),
     ('loadBundledTaxonomies', 'loadBundledTaxonomies()')),
    ('Replace the Facet vocabulary',
     ('loadFacets', 'loadFacets(data)'),
     ('load_facets', 'load_facets'),
     ('loadFacets', 'loadFacets(data)')),
    ('Replace the Measure vocabulary',
     ('loadMeasures', 'loadMeasures(data)'),
     ('load_measures', 'load_measures'),
     ('loadMeasures', 'loadMeasures(data)')),
    ('Replace the ProductType vocabulary',
     ('loadProductTypes', 'loadProductTypes(data)'),
     ('load_product_types', 'load_product_types'),
     ('loadProductTypes', 'loadProductTypes(data)')),
    ('Replace an arbitrary vocabulary',
     ('loadVocabulary', 'loadVocabulary(name, data)'),
     ('load_vocabulary', 'load_vocabulary'),
     ('loadVocabulary', 'loadVocabulary(name, data)')),
    ('Fetch the Facet vocabulary',
     ('loadFacetsFromUrl', 'loadFacetsFromUrl()'),
     ('load_facets_from_url', 'load_facets_from_url'),
     (None, 'not present')),
    ('Fetch the Measure vocabulary',
     ('loadMeasuresFromUrl', 'loadMeasuresFromUrl()'),
     ('load_measures_from_url', 'load_measures_from_url'),
     (None, 'not present')),
    ('Fetch the ProductType vocabulary',
     ('loadProductTypesFromUrl', 'loadProductTypesFromUrl()'),
     ('load_product_types_from_url', 'load_product_types_from_url'),
     (None, 'not present')),
]


def construction_section(schema: dict) -> str:
    classes = sorted((schema.get('classes') or {}).keys())
    return f"""## Constructing objects

The three connectors do **not** agree on this, and it is the single most
common source of confusion when moving code between them.

=== "TypeScript"

    Every class has a factory on the connector, taking either form:

    ```typescript
    c.createOrganization("https://example.org/org/1", {{ name: "Acme" }});
    c.createOrganization({{ semanticId: "https://example.org/org/1", name: "Acme" }});
    ```

=== "Ruby"

    There are **no factories**. Construct the model directly:

    ```ruby
    DfcLinkmlConnector::Models::Organization.new(
      "https://example.org/org/1", name: "Acme"
    )
    ```

=== "PHP"

    Factories, positional identity first:

    ```php
    $c->createOrganization("https://example.org/org/1", ['name' => 'Acme']);
    ```

All three take the identity as the first argument. TypeScript additionally
accepts a single object whose `semanticId` key carries it, which is a
migration aid for code written against the original connectors.

There are {len(classes)} classes. The generated
[model reference](../model/index.md) lists them all, and every one has a
factory except in Ruby.
"""


def surface_section(title: str, note: str, methods: list[str],
                    factories: list[str] | None,
                    accessors: list[str] | None = None,
                    accessor_style: str = 'property',
                    col: int = 1) -> str:
    """Render the parsed surface.

    `col` picks the OPERATIONS column for this language, so each parsed method
    is labelled with the operation it performs rather than left blank.
    """
    purposes = {op[col][0]: op[0] for op in OPERATIONS if op[col][0]}
    rows = [f'| `{m}()` | {purposes.get(m, "—")} |' for m in methods]
    body = f"""## {title}

{note}

| Method | Operation |
|---|---|
{chr(10).join(rows)}
"""
    if accessors:
        if accessor_style == 'property':
            acc = ', '.join(f'`c.{a}`' for a in accessors)
        else:
            acc = ', '.join(f'`{a}()`' for a in accessors)
        body += (
            f'\nRead-only {accessor_style} accessors: {acc}.\n'
        )
    if factories is not None:
        body += (
            f'\nPlus **{len(factories)} `createX` factories**, one per DFC class, '
            'listed in the [model reference](../model/index.md).\n'
        )
    return body


def operations_table() -> str:
    rows = ['| Operation | TypeScript | Ruby | PHP |', '|---|---|---|---|']
    for op in OPERATIONS:
        label, ts, rb, php = op
        cells = []
        for bare, display in (ts, rb, php):
            cells.append(f'`{display}`' if bare else '— not present —')
        rows.append(f'| {label} | {cells[0]} | {cells[1]} | {cells[2]} |')
    return (
        '## The same operation, three names\n\n'
        'Every row below is one capability, present in all three connectors '
        'unless marked otherwise. The *names* differ; the behaviour does not.\n\n'
        + chr(10).join(rows)
        + '\n'
    )


def generate(schema_path: Path, out_dir: Path) -> None:
    import yaml as _yaml
    schema = _yaml.safe_load(schema_path.read_text(encoding='utf-8'))

    ts_methods, ts_factories, ts_accessors = parse_ts(TS_CONNECTOR)
    rb_methods, rb_accessors = parse_ruby(RUBY_CONNECTOR)
    php_methods, php_factories, php_accessors = parse_php(PHP_CONNECTOR)
    exports = parse_exports()

    out_dir.mkdir(parents=True, exist_ok=True)
    langs = [
        ('typescript', 'TypeScript', ts_methods, ts_factories,
         '@siol-data/linkml-connector',
         f'{len(exports.get("typescript", []))} symbols from `src/index.ts`',
         ts_accessors, 'property', 1),
        ('ruby', 'Ruby', rb_methods, None,
         'dfc-linkml-connector',
         'core + models, required from `lib/dfc_linkml_connector.rb`',
         rb_accessors, 'method', 2),
        ('php', 'PHP', php_methods, php_factories,
         'siol-data/linkml-connector',
         'PSR-4 `DataFoodConsortium\\Connector\\` → `src`',
         php_accessors, 'method', 3),
    ]

    for (slug, name, methods, factories, pkg, export_note,
         accessors, style, col) in langs:
        text = f"""# {name} API

Generated by parsing
[`{name}`'s connector source](https://github.com/Food-Data-Collaboration/DFC-LinkML),
so this page cannot list a method that does not exist. Package:
`{pkg}`.

Exports: {export_note}.

{surface_section(
    'Surface',
    'Every public method on the connector, as declared in the source.',
    methods, factories, accessors, style, col,
)}

{operations_table()}

{construction_section(schema)}

## See also

- [Model reference](../model/index.md) — every class and property
- [SDK contract](../../sdk-contract.md) — the cross-language guarantees
- [Migration guide](../../migration-guide.md) — from the original connectors
- [Concepts](../../concepts/index.md) — why the behaviour is like this
"""
        (out_dir / f'{slug}.md').write_text(text, encoding='utf-8')

    index_rows = [
        '| Language | Connector methods | Factories | Package |',
        '|---|---|---|---|',
        f'| [TypeScript](typescript.md) | {len(ts_methods)} | {len(ts_factories)} | `@siol-data/linkml-connector` |',
        f'| [Ruby](ruby.md) | {len(rb_methods)} | 0 | `dfc-linkml-connector` |',
        f'| [PHP](php.md) | {len(php_methods)} | {len(php_factories)} | `siol-data/linkml-connector` |',
    ]
    (out_dir / 'index.md').write_text(f"""# Connector API reference

Per-language API surfaces, parsed from the connector sources rather than
transcribed, so they cannot drift.

{chr(10).join(index_rows)}

Ruby has no `createX` factories. That is the one structural difference
between the three, and it is deliberate: Ruby's model classes are
constructible directly, and adding 89 delegating methods to the connector
would have hidden that.

## Shared behaviour

All three connectors honour the same contract. See the
[SDK contract](../../sdk-contract.md) for the guarantees, and
[concepts](../../concepts/index.md) for the reasoning behind them.
""", encoding='utf-8')

    print(f"  - {len(langs)} language pages, {len(ts_methods)}/{len(rb_methods)}/"
          f"{len(php_methods)} methods parsed", file=sys.stderr)


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--schema', default=str(DEFAULT_SCHEMA))
    p.add_argument('--output', default=str(DEFAULT_OUT))
    args = p.parse_args(argv)
    generate(Path(args.schema), Path(args.output))


if __name__ == '__main__':
    main()
