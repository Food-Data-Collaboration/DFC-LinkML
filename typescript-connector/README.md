# @siol-data/linkml-connector

TypeScript connector for the [Data Food Consortium (DFC)](https://datafoodconsortium.org/) standard, generated from the DFC LinkML schema (v2.0.0).

## Install

Published to [jsr.io](https://jsr.io/@siol-data/linkml-connector) (canonical registry).

```bash
npx jsr add @siol-data/linkml-connector
```

That writes an `@jsr:registry` entry to `.npmrc` (commit it) and adds the
package to your `dependencies`, so plain `npm install` works from then on.

<details>
<summary>Manual setup (equivalent)</summary>

```bash
# .npmrc
@jsr:registry=https://npm.jsr.io
```

```bash
npm install @jsr/siol-data__linkml-connector@2
```

Note the import name differs: `@jsr/siol-data__linkml-connector` here,
vs `@siol-data/linkml-connector` after `jsr add` (which aliases it in
`package.json`). You can keep the short name either way:

```json
{ "dependencies": { "@siol-data/linkml-connector": "npm:@jsr/siol-data__linkml-connector@^2.0.1" } }
```

</details>

pnpm (10.9+) and Yarn (4.9+) support `jsr:` specifiers natively:
`pnpm add jsr:@siol-data/linkml-connector`.

## Quick start

```typescript
import { Connector } from "@siol-data/linkml-connector";

const c = new Connector();

// Create an organization
const org = c.createOrganization("https://example.com/org/1", {
  name: "Acme Farms",
});

// Serialize to JSON-LD
const jsonld = c.export(org);
console.log(JSON.stringify(jsonld, null, 2));
```

## Usage

### Creating objects
The connector provides factory methods for all 88 DFC model types:

```typescript
const product = c.createSuppliedProduct("https://example.com/product/1", {
  name: "Organic Apples",
  description: "Fresh organic apples from local farm",
});
```

### Loading vocabularies
Load SKOS taxonomies (facets, measures, product types) from local data or remote URLs:

```typescript
c.loadFacets(facetData);
c.loadMeasures(measureData);
c.loadProductTypes(productTypeData);
```

### Import / Export

```typescript
// Export to JSON-LD
const jsonld = c.export([org, product]);

// Import from JSON-LD
const imported = c.import(jsonld);
```

## Build

```bash
npm run build    # compiles src/ to dist/
npm test         # runs tests with vitest
```

## License

MIT
