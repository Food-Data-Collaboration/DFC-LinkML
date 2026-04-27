# DFC-LinkML Test Suite

Comprehensive test suite for the dfc-models gem implementing the DFC Business Ontology.

## Prerequisites

- Ruby 3.0+
- PostgreSQL 13+
- Bundler

## Setup

```bash
# Install dependencies
bundle install

# Create test database (requires PostgreSQL running)
export POSTGRES_HOST=localhost
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=your_password

# Run migrations on test database
bundle exec rake db:migrate
```

## Running Tests

```bash
# Run all tests
bundle exec rspec

# Run specific test suites
bundle exec rspec spec/models/           # Model structure & associations
bundle exec rspec spec/enums/            # Enumeration validation
bundle exec rspec spec/integrations/      # Database integration
bundle exec rspec spec/serialization/    # LinkML serialization

# Run with rake tasks
bundle exec rake spec                    # All tests
bundle exec rake spec:structure         # Model structure only
bundle exec rake spec:enums              # Enum validation only
bundle exec rake spec:db                 # Database tests only
bundle exec rake spec:serialization      # Serialization tests only
```

## Test Structure

```
spec/
├── spec_helper.rb              # RSpec configuration & helpers
├── support/
│   ├── test_database.rb        # Test database setup/teardown
│   └── database_cleaner.rb     # Table cleanup between tests
├── models/
│   ├── dfc_model_structure_spec.rb   # Class existence, inheritance, table names
│   └── dfc_associations_spec.rb      # Association definitions
├── enums/
│   └── dfc_enums_spec.rb            # Enumeration validation
├── integrations/
│   ├── dfc_database_spec.rb         # Database schema tests
│   └── linkml_roundtrip_spec.rb      # LinkML alignment tests
├── serialization/
│   └── linkml_spec.rb               # to_linkml serialization
└── dfc_models_spec.rb               # Module-level tests
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| POSTGRES_HOST | localhost | PostgreSQL host |
| POSTGRES_PORT | 5432 | PostgreSQL port |
| POSTGRES_USER | postgres | PostgreSQL username |
| POSTGRES_PASSWORD | (empty) | PostgreSQL password |

## Test Coverage

### Phase 1: Model Structure Tests
- 80+ model classes loaded and inherit correctly
- Table name mappings match migrations
- Inheritance hierarchy matches LinkML `is_a` relationships
- Common methods (`to_linkml`, timestamps) present

### Phase 2: Enumeration Tests
- 351 facet values validated
- 490 product type values validated
- 224 measure values (documented)
- 14 scope values for Order
- 31 vocabulary terms validated

### Phase 3: Database Integration Tests
- 70+ tables created with UUID primary keys
- Timestamp columns present on all tables
- CRUD operations functional
- Enum column validation

### Phase 4: LinkML Serialization Tests
- `to_linkml` method produces correct hashes
- All attributes included in output
- Timestamp fields present
- DFC ID lookup functionality

### Phase 5: Association Tests
- Association helper modules defined
- Class hierarchy validated
- Product/Order/Agent associations specified

## CI Integration

Add to your CI pipeline:

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v3
      - uses: ruby/setup-ruby@v1
        with:
          bundle-cache: true
      - run: bundle install
      - run: bundle exec rspec
        env:
          POSTGRES_HOST: localhost
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
```
