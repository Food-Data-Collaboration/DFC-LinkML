# DFC Models Gem

Ruby gem providing ActiveRecord models for the Data Food Consortium (DFC) Business Ontology v2.0.0.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'dfc-models'
```

And then execute:

```bash
bundle install
```

Or install it directly:

```bash
gem install dfc-models
```

## Requirements

- Ruby >= 3.0
- Rails 7.0+ (ActiveRecord)
- PostgreSQL

## Database Setup

Run the migration to create DFC tables in your PostgreSQL database:

```bash
rails db:migrate
```

Or copy the migration from `db/migrate/20260423072213_create_dfc_tables.rb` to your application's `db/migrate/` directory.

## Usage

### Configuration

Configure the database connection in your `config/database.yml`:

```yaml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: your_username
  password: your_password

development:
  <<: *default
  database: your_app_development

production:
  <<: *default
  database: your_app_production
```

### Quick Start

```ruby
require 'dfc_models'

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'your_database',
  username: 'your_username',
  password: 'your_password'
)
```

### Creating DFC Entities

#### Create an Enterprise

```ruby
enterprise = Enterprise.create!(
  name: "My Farm",
  description: "Organic vegetable producer"
)
```

#### Create a Product

```ruby
product = DefinedProduct.create!(
  name: "Organic Carrots",
  description: "Fresh organic carrots",
  product_type: :carrot,
  has_quantity: 10,
  quantity_measure: :kilogram
)
```

#### Create an Offer

```ruby
offer = Offer.create!(
  offered: enterprise,
  defines: product,
  price: 15.00,
  price_currency: :euro,
  product_type: :carrot
)
```

#### Create an Order

```ruby
order = Order.create!(
  customer: customer_enterprise,
  date: DateTime.now,
  order_number: "ORD-001"
)

OrderLine.create!(
  order: order,
  has_quantity: 5,
  quantity_measure: :kilogram,
  offer: offer
)
```

### Querying DFC Entities

```ruby
# Find all offers for organic products
offers = Offer.where(facet: :agriculture_biologique)

# Find all pending orders
orders = Order.where(fulfilment_status: :pending)

# Find products by type
products = DefinedProduct.where(product_type: :vegetable)
```

### Available Models

The gem includes models for the following DFC entities:

| Model | Description |
|-------|-----------|
| `Agent` | Abstract base for any DFC agent |
| `Enterprise` | Business or organization |
| `Person` | Individual person |
| `DefinedProduct` | Product definition |
| `PhysicalProduct` | Physical product instance |
| `TechnicalProduct` | Technical product specification |
| `Offer` | Product offer with pricing |
| `Order` | Customer order |
| `OrderLine` | Line item in an order |
| `Catalog` | Product catalog |
| `CatalogItem` | Item in a catalog |
| `CatalogItem` | Product in a catalog |
| `Stock` | Inventory stock |
| `Shipment` | Delivery shipment |
| `Address` | Physical address |
| `Transformation` | Product transformation |
| `ProductionFlow` | Production flow |
| `ConsumptionFlow` | Consumption flow |

### Enums

Each model includes enums for DFC vocabulary:

- **facet**: Product facets and certifications (organic, PDO, geographical indications, etc.)
- **product_type**: Product types (vegetables, dairy, meat, etc.)
- **measure**: Units of measure (kg, liter, unit, etc.)
- **scope**: Authorization scopes
- **vocabulary_term**: Statuses and state values

Example using enums:

```ruby
offer = Offer.create!(
  facet: :agriculture_biologique,
  product_type: :carrot,
  price: 10.00
)

# Query by enum
Offer.agriculture_biologique # All organic offers
```

## API Endpoints

This gem provides the data models. For HTTP API endpoints, combine with a web framework like Rails or Sinatra.

### Example: Rails Controller

```ruby
class Api::OffersController < ApplicationController
  def index
    offers = Offer.all
    render json: offers
  end

  def show
    offer = Offer.find(params[:id])
    render json: offer
  end

  def create
    offer = Offer.create(offer_params)
    render json: offer, status: :created
  end

  private

  def offer_params
    params.require(:offer).permit(:name, :price, :product_type, :facet)
  end
end
```

## Development

After checking out the repo, run `bundle install` to install dependencies.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a Pull Request

## License

The gem is available as open source under the terms of the [MIT License](LICENSE).

## More Information

- Food Data Collaboration: https://github.com/Food-Data-Collaboration