# dfc-linkml-connector

Ruby semantic object connector for the Data Food Consortium (DFC) standard.
Generated from LinkML schema v2.0.0.

Mimics the interface of [datafoodconsortium/connector-ruby](https://github.com/datafoodconsortium/connector-ruby)
but with full class and property coverage from the LinkML schema.

## Schema Overview

- **Classes**: 85
- **Slots/Properties**: 246
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

connector = DfcLinkmlConnector::DfcLinkmlConnector.instance

# Load vocabularies
connector.load_facets(JSON.parse(File.read("vocabularies/facets.jsonld")))
connector.load_measures(JSON.parse(File.read("vocabularies/measures.jsonld")))

# Create objects
tomato = SuppliedProduct.new(
  "https://myplatform.com/tomato",
  name: "Tomato",
  description: "Awesome tomato",
  totalTheoreticalStock: 100
)

# Export to JSON-LD
puts connector.export(tomato)
```

## Vocabularies

- `vocabularies/facet.jsonld` - Product facets
- `vocabularies/measure.jsonld` - Measurement units
- `vocabularies/product_type.jsonld` - Product types

## License

AGPL-3.0
