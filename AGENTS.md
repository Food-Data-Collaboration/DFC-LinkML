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
| Conformance | `python -m pytest tests/conformance -q` (repo root) | Shared fixtures × LinkML connectors; needs node + ruby + php runtimes |

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
- **Cardinality comes from the ontology, not from the property name.** `scripts/cardinality.py` is the single resolver all three generators share — never re-implement it. Order: class-scoped `slot_usage` → slot-level `maximum_cardinality: 1` → `multivalued` → the plural-name heuristic as a last resort. DFC declares 42 class restrictions and 34 `owl:FunctionalProperty`, all singletons, and **no `owl:maxCardinality` anywhere**, so the collection side is *not* derivable: it comes from `cardinality.multi_valued` in `config/dfc-default.yaml`, curated and verified against the original connectors' accessor shapes. Never infer collections from a missing restriction — silence is not permission. Class scoping is load-bearing: `PhysicalPlace ⊑ =1 hasAddress` while `Agent` is silent, so `hasAddress` is a scalar on one and a collection on the other.
- **Constructors stay permissive.** `minimum_cardinality` is exposed via `validate()` in all three connectors, never enforced on construction — enforcing it would reject 6 of the 7 matrix scenarios.
- **PHP trait interfaces span classes.** They group slots by interface name across the whole schema, so they derive their signature from the declaring classes' shapes (`shapes_across_classes`), never from the unscoped heuristic. Where a slot is a collection on one class and a scalar on another, the trait declares the union and each model narrows it (PHP permits narrowing a union return type) and omits `add*`/`remove*`, which only the collection side has.

## Gotchas

- Ontology URLs use `.rdf` (RDF/XML), not `.owl` — rdflib cannot parse OWL/XML `IRI` elements. Pattern: `https://w3id.org/dfc/ontology/v{version}/src/DFC_BusinessOntology.rdf`. Root `agents.md` still shows `.owl` URLs — stale, follow `config/dfc-default.yaml`.
- Enum values come from external SKOS taxonomies via `reachable_from`, not embedded; ontology and taxonomy versions are independent flags (`--ontology-version` vs `--taxonomy-version`).
- `jsonld` is a `devDependency` but imported at runtime by `src/core/Connector.ts`; shipped `files: ["dist"]` relies on it — don't remove or break that import.
- Ruby `vocabularies/*.jsonld` (compacted SKOS) are the canonical taxon data also bundled as TS modules in `src/taxonomies/` — keep both sides shipping the same concepts.
- `.agents/` is gitignored local scratch — do not cite it or depend on it; the invariants above are the durable record. Skills in `.opencode/` (`skills.linkml.md`, `skills.ruby.md`, `skills.ts.md`, `skills.php.md`) have per-component details.
- `scripts/generate_php_connector.py` generates `php-connector/` (models + trait/entity interfaces + `Connector.php` + `SemanticObject.php`). PHP has no `ml/json-ld` runtime dep — predicates are already original CURIEs so no compaction step is needed. `scripts/add_enum_shacl.py` maintains enum constraints in `shacl/`.
- **Licence split**: the LinkML codebase (generators, schema, config, tests, shacl) is AGPLv3 — root `LICENSE`. The three generated connectors are MIT, each with its own `LICENSE` beside its code. Never "fix" one side to match the other.
- **Two composer.json files, both generated** by the PHP generator: `php-connector/composer.json` (dev manifest, carries `require-dev`) and root `composer.json` (packagist manifest). packagist.org only reads the repository root, and has no documented subdirectory support, so the root copy is unavoidable in this polyglot repo — generate it, don't hand-edit it. The root manifest must keep `archive.exclude` in sync with the repo's top-level entries; `tests/test_packagist_manifest.py` enforces that.

## Reference

- `scripts/owl2linkml.py` — OWL→LinkML converter; `config/dfc-default.yaml` — skip lists, prefixes, taxonomy enums
- `tests/test_jsr_score.py` — guards the jsr.io documentation factor (JSDoc on ≥80% of exported symbols, no malformed JSDoc). JSDoc is emitted by `scripts/generate_typescript_connector.py` from the schema descriptions, so never hand-edit `typescript-connector/src/**` to add docs. Remaining jsr points (package description, runtime compatibility) live in the jsr.io dashboard — `jsr.json` has no field for them.
- `config/dfc-original-api.yaml` — curated original-v2 API map (single source for code-plane parity)
- `tests/cross_connector/{run_matrix.py,normalize.py,adapters/,scenarios/,codeplane_inventory.py}` — drop-in parity harness vs original connectors
- `tests/test_cardinality.py` pins the ontology's cardinality numbers (42 restrictions, 34 functional properties, 25 classes) and that the curated `multi_valued` list matches the schema and never contradicts an ontology singleton. `scripts/cardinality.py` owns the resolution order and the `required_slots` ancestor walk — the three generators must import it, not re-derive it. `tests/test_cross_connector_adapters.py` checks every scenario param survives into each LinkML export (needs all three runtimes, so it runs in the `conformance` CI job)
- `docs/{migration-guide,api-gaps-typescript,api-gaps-ruby}.md` — code-plane migration docs (generated gap tables + guide)
- `scripts/generate_model_reference.py` → `docs/reference/model/` (89 class pages, 255 property pages, 5 vocabulary pages) and `scripts/generate_api_reference.py` → `docs/reference/api/` (per-language surfaces **parsed from the connector sources**, not transcribed) are **generated**, wired into `generate_all.py` as the `reference` step and covered by `make check-generated`. Never hand-edit anything under `docs/reference/` — change the schema or the generator. Both document ontology names, not per-language names; the per-language mapping is not derivable (see `docs/concepts/` and `docs/reference/api/`).
- `docs/concepts/` is hand-written explanation (identifiers, relationships, cardinality, context/versioning, vocabularies, validation). `docs/getting-started/` is tutorials whose snippets are executed as tests. `docs/guides/` is task recipes (not executed). `docs/index.md` is the entry point. `tests/{test_concepts_docs,test_docs_surface}.py` guard all of it, including that each "why" has exactly one home and that guide/API claims match the connectors.
- Docs pages that assert connector behaviour are verified by **running** the connector, not by recall. Two real errors came from that: `SuppliedProduct` has no `price` slot (`has_price` lives on `Offer`/`OrderLine`/`PaymentMethod`/`Transaction`, bridged by `CatalogItem`), and Ruby has no `createX` factories.
- CI (`.github/workflows/ci.yml`: unit suites, generation check, conformance + LinkML-only matrix; `publish-jsr.yml` publishes the TS package to jsr.io on `@siol-data/linkml-connector@*` tags via OIDC — npmjs publishing is retired)
- PHP publish path: `siol-data/dfc-connector` on packagist.org. packagist needs no token and no 2FA — it reads the git tag for the version, so publishing is a tag push, not a credentialed upload. `tests/{test_packagist_manifest,test_php_readme}.py` guard it. **Not yet claimed on packagist** — the vendor name is permanent once used.
