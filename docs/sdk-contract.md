# SDK contract

What application developers may depend on, per language. Everything not
listed here is internal and may change without notice. Generated files must
never be hand-edited — change the generator and regenerate (see
`docs/generation.md`).

Source of truth: DFC ontology `2.0.0` + taxonomies `2.0.0`
(`config/dfc-release.yaml`).

## Common contract (all languages)

- **Construct**: `Organization`-family and product/flow classes take an id
  plus properties; child constructors forward all params to parents.
- **Connect**: relationship properties accept a model instance **or** a plain
  IRI string (unresolved reference).
- **Export**: objects → JSON-LD string; `@context` is always a URL string,
  never inlined.
- **Import**: JSON-LD string or object → **always an array**, even for a
  single `@graph` entry. Legacy `dfc-b:Enterprise` imports as
  `dfc-b:Organization`. Unknown types are skipped.
- **Shape preservation**: a single reference stays a scalar (never wrapped
  in a 1-element array) through import/export.
- **No network required** for construct/export/import with bundled data;
  taxonomy/context fetch methods are opt-in.

## TypeScript — `@fooddatacollaboration/linkml-connector`

```ts
import { Connector, Organization, SuppliedProduct } from "@fooddatacollaboration/linkml-connector";
```

- `new Connector({ ontologyVersion?, taxonomyVersion? })`
- Factories accept both forms: `createX(semanticId, params?)` and the
  original-style `createX({ semanticId, ...params })`.
- Models expose **public fields** (`org.vatNumber = …`), plus `*Params` types.
- `await connector.export(...objects): Promise<string>`,
  `connector.import(data): SemanticObject[]`.
- `SemanticObject`, `JsonLdSerializer`, `VocabularyLoader` are public but
  advanced use; prefer `Connector`.
- Internal: anything under `dist/` not re-exported from the package index.

## Ruby — `dfc-linkml-connector`

```ruby
require "dfc_linkml_connector"
```

- `DfcLinkmlConnector::Core::Connector.new(ontology_version:, taxonomy_version:)`
  (all kwargs optional, default `2.0.0`); `Connector.instance` default-instance
  shim exists for original-style call sites.
- Models at `DfcLinkmlConnector::Models::*`, constructed as
  `X.new(semanticId, **kwargs)` (camelCase kwargs, all optional).
- `attr_accessor` snake_case accessors **plus** original-v2 `alias_method`
  names (`number=`→`order_number=`, …) generated from
  `config/dfc-original-api.yaml`.
- `connector.export(*objects): String`, `connector.import(json): Array`
  (always an array).
- Internal: `Core::SemanticObject` registry, serializer/loader internals.

## PHP — `fooddatacollaboration/linkml-connector`

```php
use DataFoodConsortium\Connector\Connector;
```

- `new Connector(ontologyVersion: '2.0.0', taxonomyVersion: '2.0.0')`
  (bundled taxonomies load in the constructor).
- Factories `createX(string $semanticId, array $params = [])`.
- Models expose uniform `getX()` / `setX()` (singular) and
  `getX()` / `setX()` / `addX()` / `removeX()` (collections); singulars also
  accept arrays, collections also accept scalars (shape preservation).
- `export(SemanticObject ...$objects): string`,
  `import(array|string $data): array` (always an array).
- Taxonomy getters (`getFacet()`, …) and `load*()` overrides; bundled
  `vocabularies/*.jsonld` + `contexts/*.json` ship offline data.
- Internal: trait/entity interfaces other than the implemented API,
  `SemanticObject` registry mechanics.

## Deliberate differences from the original connectors

See `docs/migration-guide.md`. In short: array import, URL-string context,
89-class superset, no TypeScript domain methods, `Enterprise` kept as a
deprecated subclass.
