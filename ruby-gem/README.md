# Dfc-models

LinkML schema converted from DFC Business Ontology v2.0.0. Part of the DFC schema suite.

## Schema Overview

- **Classes**: 85
- **Slots/Properties**: 246
- **Enumerations**: 5

## Installation

Add this line to your Gemfile:

```ruby
gem 'dfc-models'
```

And then execute:

```bash
bundle install
```

Or install yourself:

```bash
gem build dfc-models.gemspec
gem install dfc-models-2.0.0.gem
```

## Usage

### Rails Application

1. Copy migration file:
   ```bash
   cp -r db/migrate/*your_migration_timestamp*_create_dfc_tables.rb your_rails_app/db/migrate/
   rails db:migrate
   ```

2. Use models:
   ```ruby
   product = DefinedProduct.new
   product.name = "Organic Apples"
   product.save
   ```

### Standalone

```ruby
require 'active_record'
require 'dfc-models'

# Configure database connection
ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'your_database'
)

# Use models
product = DefinedProduct.create(name: "Organic Apples", sku: "APL001")
```

## Models

### Product Classes
- DefinedProduct - Base product definition
- FunctionalProduct - Functional product variant
- SuppliedProduct - Product supplied by an agent
- TechnicalProduct - Technical specifications
- LocalizedProduct - Localized product data

### Order Classes
- Order - Customer order
- OrderLine - Line item in order
- Offer - Product offer

### Agent Classes
- Organization - Business organization
- Person - Individual person
- Enterprise - Enterprise entity

### Supporting Classes
- Catalog - Product catalog
- CatalogItem - Item in catalog
- Address - Physical address
- Price - Price value

## Enumerations

- Facet - Product facets (labels, certifications)
- ProductType - Product type categories
- Measure - Measurement units
- Scope - Authorization scopes
- VocabularyTerm - Standard vocabulary terms

## License

AGPL-3.0 - see LICENSE file for details.
