# dfc-linkml-connector

Ruby semantic object connector for the Data Food Consortium (DFC) standard.
Generated from LinkML schema v2.0.0.

Mimics the interface of [datafoodconsortium/connector-ruby](https://github.com/datafoodconsortium/connector-ruby)
but with full class and property coverage from the LinkML schema.

## Schema Overview

- **Classes**: 89
- **Slots/Properties**: 255
- **Enumerations**: 5

## Installation

```ruby
gem 'dfc-linkml-connector'
```

```bash
bundle install
```

## Usage

```ruby
require 'dfc_linkml_connector'

# Create a connector with specific versions
connector = DfcLinkmlConnector::Core::Connector.new(
  ontology_version: "2.0.0",
  taxonomy_version: "2.0.0"
)

# Load vocabularies from URLs (via w3id redirects)
connector.load_facets_from_url
connector.load_measures_from_url
connector.load_product_types_from_url

# Or load from local files
connector.load_facets(JSON.parse(File.read("vocabularies/facet.jsonld")))

# Create objects
tomato = DfcLinkmlConnector::Models::SuppliedProduct.new(
  "https://myplatform.com/tomato",
  name: "Tomato",
  description: "Awesome tomato",
  totalTheoreticalStock: 100
)

# Export to JSON-LD
jsonld = connector.export(tomato)
puts jsonld

# Import it back. import() raises on input that is not valid JSON, so a broken
# document surfaces as an exception rather than an empty array.
objects = connector.import(jsonld)
```

## Architecture

- **DfcLinkmlConnector::Core::Connector** - Main connector (instantiable, no singleton)
- **DfcLinkmlConnector::Core::SemanticObject** - Base class with type registry
- **DfcLinkmlConnector::Core::JsonLdSerializer** - JSON-LD serialization
- **DfcLinkmlConnector::Core::VocabularyLoader** - SKOS vocabulary loading
- **DfcLinkmlConnector::Models::*** - All 85 DFC model classes

## Vocabularies

- `vocabularies/facet.jsonld` - Product facets
- `vocabularies/measure.jsonld` - Measurement units
- `vocabularies/product_type.jsonld` - Product types

## License

MIT. The generated connectors are MIT licensed; the LinkML codebase that
generates them is licensed separately under AGPLv3 (see the repository root
`LICENSE`).
