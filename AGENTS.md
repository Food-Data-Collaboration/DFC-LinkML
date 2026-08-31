# DFC-LinkML — Agent Instructions

## Project

LinkML schemas and generated connector code for the Data Food Consortium (DFC) ontology. A Python OWL→LinkML converter feeds generator scripts that produce a Ruby gem (`ruby-gem/`) and a TypeScript connector (`typescript-connector/`).

## Setup

```bash
# Python deps (already installed: pytest, rdflib, linkml, etc.)
python3 -m pytest tests/ -v

# TypeScript connector
cd typescript-connector && npm ci && npm test && npm run build

# Ruby gem
cd ruby-gem && bundle install
```

## Test

| Component | Command | Notes |
|-----------|---------|-------|
| Python converter | `python3 -m pytest tests/test_owl2linkml.py -v` | Hits w3id.org — slow and requires network |
| TypeScript connector | `cd typescript-connector && npm test` | Vitest, 42 tests, fast (no network) |
| TypeScript build | `cd typescript-connector && npm run build` | Compiles `src/` → `dist/` |
| Ruby gem | `cd ruby-gem && bundle exec rake spec` | RSpec (15 tests), fast, no network |

Run from the repo root for Python; `cd` into sub-packages for TS/Ruby.

## Generation pipeline

```
scripts/owl2linkml.py  →  src/*.yaml  (LinkML schemas)
         ↓
scripts/generate_typescript_connector.py  →  typescript-connector/src/models/
scripts/generate_ruby_gem.py              →  ruby-gem/lib/models/
```

**Generator scripts are the source of truth.** Never edit generated model code by hand — always regenerate. Both `generate_typescript_connector.py` and `generate_ruby_gem.py` share logic and must be kept in sync (slot matching, orphan-domain handling, constructor param forwarding).

- `src/` contains the authoritative LinkML YAML schemas. Version `v2.0.0` is current.
- `typescript-connector/src/` and `ruby-gem/lib/` are fully generated; `package.json`, `tsconfig.json`, `*.gemspec` are static.
- **Regeneration preserves bundled files** (safe to run any time): TS keeps `src/context/` + `src/taxonomies/`, Ruby keeps `contexts/` + `vocabularies/` + `spec/`. These are hand-maintained SKOS/JSON-LD exports, not schema-derived, but the generated core imports them at build/runtime. If you add new bundled files, ensure the generators' preservation lists (and the Ruby `gemspec` `spec.files`) include them.

## Conventions

- Ontology URLs use RDF/XML format (`.rdf`), not OWL/XML (`.owl`) — rdflib cannot parse OWL/XML `IRI` elements.
- Versioned URLs follow pattern: `https://w3id.org/dfc/ontology/v{version}/src/DFC_BusinessOntology.rdf`
- Enum values come from external SKOS taxonomies via `reachable_from` in config (`config/dfc-default.yaml`), not embedded in schemas.
- The DFC config file (`config/dfc-default.yaml`) controls skip lists, prefixes, and taxonomy enum mappings.

## Common pitfalls

### Cross-connector incompatibility (`.agents/cross-import-gaps.md`)
- TS connector uses `dfc-b:Organization`; Ruby connector expects `dfc-b:Enterprise` — TS→Ruby import crashes.
- TS exports inline `@context` objects; Ruby's json-ld v3 expects a context URL string — TS→Ruby import rejected.
- Predicate format mismatch: TS uses `dfc-b:ClassName:snake_case`; Ruby uses compacted short-form `dfc-b:propertyName`.

### Ruby gem bugs (`.agents/ruby-connector-issues.md`)
- `require_relative 'semantic_object'` in model files resolves to wrong directory — should be `../core/semantic_object`.
- Model classes use `Core::ParentClass` prefix for same-namespace parents — bare constant name works.
- `inherited` hook in `semantic_object.rb` uses class instance variable incorrectly — causes `NoMethodError` on `[]=`.

### Generator logic
- **Constructor param forwarding**: child class constructors **must** forward `params` to parent: `super(semanticId, params)`, not just `super(semanticId)`. Without this, ancestor properties are never set.
- **Orphaned-domain slots**: slots whose `domain` references classes not in the schema must be assigned to all root classes (classes with no `is_a`) so they propagate through inheritance.
- **JSON-LD predicate keys**: each slot registers the **official OWL predicate** (`dfc-b:{alias}` from `slot.aliases`, e.g. `dfc-b:VATnumber`), NOT `dfc-b:{Class}:{snake_case}`. Edge namespaces use `dfc-t:`/`skos:` or full URIs via `predicate_for_slot()`.
- **Import reverse map**: `predicateToPropName`/`_predicate_to_prop_name` consult a generated `PREDICATE_MAP` (predicate → propName) before the local-name fallback. Both TS and Ruby generate this map from slot aliases and must stay in sync.
- **Import returns**: always `SemanticObject[]` (Ruby: Array; TS: `SemanticObject[]`, sync). Single `@graph` entry → 1-element array; use `result[0]`. `Array.isArray(result)` is always true.
- **Legacy type alias**: DFC v2.0 renamed `Enterprise`→`Organization`, but official v1.16 connectors emit `@type: dfc-b:Enterprise`. Both connectors map it to `dfc-b:Organization` on import via `TYPE_ALIASES` (TS `Connector.ts`, Ruby `connector.rb`); both generators emit this table and must stay in sync. Keep `normalize.canonical_type()` in `tests/cross_connector/normalize.py` aligned so the matrix doesn't flag the normalization.
- **Array `@type` on import**: official-ts emits `@type` as an array (`["dfc-b:Price","dfc-b:Price"]`); both connectors pick the first non-`@` entry. The generator import templates encode this — keep them in sync.

## Reference

- `agents.md` (lowercase, root) — DFC ontology and taxonomy version URLs
- `.opencode/skills/` — skills docs: `skills.linkml.md`, `skills.ruby.md`, `skills.ts.md`, `dfc-orders.md`, `dfc-orders-common-patterns.md`
- `.agents/` — `cross-import-gaps.md`, `ruby-connector-issues.md`
- `scripts/owl2linkml.py` — main converter (687 lines)
- `config/dfc-default.yaml` — DFC converter configuration