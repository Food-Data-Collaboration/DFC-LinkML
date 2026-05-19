# @fooddatacollaboration/linkml-connector

TypeScript connector for the [Data Food Consortium (DFC)](https://datafoodconsortium.org/) standard, generated from the DFC LinkML schema (v2.0.0).

## Install

```bash
npm install @fooddatacollaboration/linkml-connector
```

## Quick start

```typescript
import { Connector } from "@fooddatacollaboration/linkml-connector";

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
