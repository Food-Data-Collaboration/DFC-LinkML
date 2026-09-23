# DFC-LinkML — Agent Instructions

LinkML schemas (`src/`, current v2.0.0) converted from the DFC OWL ontology, plus generated connectors: TypeScript (`typescript-connector/`), Ruby (`ruby-gem/`), and PHP (`php-connector/`).

## Test

| Component | Command | Notes |
|-----------|---------|-------|
| Python converter | `python3 -m pytest tests/test_owl2linkml.py -v` (repo root) | Add `-m "not integration"` for fast offline run; `integration`-marked tests hit w3id.org, slow |
| Cross-connector matrix | `python3 tests/cross_connector/run_matrix.py --verify-drop-in` (repo root) | Needs node + ruby + php, original-connector deps, network |
| TypeScript | `npm test`, `npm run build` (in `typescript-connector/`) | `vitest run` (not `test:watch`), offline, fast |
| Ruby | `bundle exec rake spec` (in `ruby-gem/`) | RSpec, offline, fast |
| PHP | `composer install && vendor/bin/phpunit` (in `php-connector/`) | PHPUnit, offline, fast (needs php-xml ext) |

Matrix original deps: TypeScript `@datafoodconsortium/connector@2.0.0-beta.2` (pinned in `tests/package.json`, installed to gitignored `tests/node_modules/`); Ruby `datafoodconsortium-connector = 2.0.0.pre.beta8` system gem (exact pin via `gem` call in `adapters/official-ruby.rb`); PHP has no original v2 (packagist beta3 is v1-only) so there is no `official-php` adapter — LinkML is tested against the original Ruby/TS v2 connectors.

## Generation pipeline

```
scripts/owl2linkml.py --config config/dfc-default.yaml --ontology-version 2.0.0 --taxonomy-version 2.0.0 --output src/dfc_business_linkml_v2_0.yaml
python3 scripts/generate_typescript_connector.py [--schema …] [--output …]  # defaults: src/dfc_business_linkml_v2_0.yaml → typescript-connector/
python3 scripts/generate_ruby_gem.py  # no flags; fixed schema lookup → ruby-gem/
python3 scripts/generate_php_connector.py [--schema …] [--output …]  # defaults: src/dfc_business_linkml_v2_0.yaml → php-connector/
```

- **Never hand-edit generated code** (`typescript-connector/src/models|core/`, `ruby-gem/lib/models|core/`, `php-connector/src/`) or `src/*.yaml` — always change the generator and regenerate.
- Regeneration only wipes what it regenerates: TS preserves `src/context/` + `src/taxonomies/`, Ruby preserves `vocabularies/` + `contexts/` + `spec/`; PHP wipes only `src/` and preserves `tests/`, copies `vocabularies/` + `contexts/` from `ruby-gem/` when absent. `package.json`, `composer.json`, `phpunit.xml`, `tsconfig.json`, `Rakefile`, `*.gemspec` are static. New bundled/static files must be added to the generators' preservation lists (and Ruby `spec.files`).

## Generator invariants (TS ↔ Ruby ↔ PHP must stay in sync)

- **Predicates are original short-form** from slot `aliases` (e.g. `dfc-b:VATnumber`), never `dfc-b:Class:snake_case`. All generators emit a `PREDICATE_MAP` (predicate → propName) consulted before the local-name fallback on import.
- **`Enterprise` → `Organization` alias**: DFC v2.0 renamed the class; legacy/v1 docs still emit `dfc-b:Enterprise`. The alias table exists in 4 places — keep aligned: TS `Connector.ts` `TYPE_ALIASES`, Ruby `connector.rb` `TYPE_ALIASES`, PHP `Connector.php` `TYPE_ALIASES`, `tests/cross_connector/normalize.py` `canonical_type()`.
- **Import always returns an array** (`SemanticObject[]` / Ruby Array / PHP array); single `@graph` entry → 1-element array. Array `@type` → first non-`@` entry.
- **Export `@context` as a URL string**, not an inline object.
- Child constructors **must forward all params** via `super(...)` so ancestor properties are set; slots whose `domain` names no schema class go on **all root classes** (no `is_a`) so they inherit down.
- **Shape preservation**: single references stay scalars (never wrapped in 1-element arrays) through import/export. PHP is type-enforced, so collection properties use shape-preserving unions (`array|Elem|null`) and singulars accept `array` too — mirroring the unchecked TS/Ruby models.

## Gotchas

- Ontology URLs use `.rdf` (RDF/XML), not `.owl` — rdflib cannot parse OWL/XML `IRI` elements. Pattern: `https://w3id.org/dfc/ontology/v{version}/src/DFC_BusinessOntology.rdf`. Root `agents.md` still shows `.owl` URLs — stale, follow `config/dfc-default.yaml`.
- Enum values come from external SKOS taxonomies via `reachable_from`, not embedded; ontology and taxonomy versions are independent flags (`--ontology-version` vs `--taxonomy-version`).
- `jsonld` is a `devDependency` but imported at runtime by `src/core/Connector.ts`; shipped `files: ["dist"]` relies on it — don't remove or break that import.
- Ruby `vocabularies/*.jsonld` (compacted SKOS) are the canonical taxon data also bundled as TS modules in `src/taxonomies/` — keep both sides shipping the same concepts.
- `.agents/` is gitignored local scratch — do not cite it or depend on it; the invariants above are the durable record. Skills in `.opencode/` (`skills.linkml.md`, `skills.ruby.md`, `skills.ts.md`, `skills.php.md`) have per-component details.
- `scripts/generate_php_connector.py` generates `php-connector/` (models + trait/entity interfaces + `Connector.php` + `SemanticObject.php`). PHP has no `ml/json-ld` runtime dep — predicates are already original CURIEs so no compaction step is needed. `scripts/add_enum_shacl.py` maintains enum constraints in `shacl/`.

## Reference

- `scripts/owl2linkml.py` — OWL→LinkML converter; `config/dfc-default.yaml` — skip lists, prefixes, taxonomy enums
- `config/dfc-original-api.yaml` — curated original-v2 API map (single source for code-plane parity)
- `tests/cross_connector/{run_matrix.py,normalize.py,adapters/,scenarios/,codeplane_inventory.py}` — drop-in parity harness vs original connectors
- `docs/{migration-guide,api-gaps-typescript,api-gaps-ruby}.md` — code-plane migration docs (generated gap tables + guide)
- CI (`.github/workflows/publish.yml`) only publishes the TS package on `@fooddatacollaboration/linkml-connector@*` tags
