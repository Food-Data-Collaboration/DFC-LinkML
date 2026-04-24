#!/usr/bin/env python3
"""
Enhanced Ruby gem generator from LinkML schema.

Generates a complete Ruby on Rails gem with ActiveRecord models that faithfully
represent the LinkML schema including:
- All classes with proper inheritance
- All data properties as database columns
- All object properties as associations (belongs_to/has_many)
- Enums scoped to relevant classes
- Complete migrations

Usage:
    python3 generate_ruby_gem.py [--output DIR]
"""

import os
import re
import sys
import yaml
from pathlib import Path
from datetime import datetime
from collections import defaultdict


def parse_schema(schema_path: str) -> dict:
    """Parse LinkML schema."""
    with open(schema_path, 'r') as f:
        schema = yaml.safe_load(f)
    
    return {
        'classes': schema.get('classes', {}),
        'slots': schema.get('slots', {}),
        'enums': schema.get('enums', {}),
        'prefixes': schema.get('prefixes', {}),
        'id': schema.get('id', ''),
        'name': schema.get('name', ''),
        'version': schema.get('version', '0.1.0'),
        'description': schema.get('description', ''),
    }


def to_snake_case(name: str) -> str:
    """Convert CamelCase to snake_case."""
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    return name.lower()


def to_camel_case(name: str) -> str:
    """Convert snake_case to CamelCase."""
    return ''.join(word.capitalize() for word in name.split('_'))


def to_plural(name: str) -> str:
    """Simple pluralization."""
    if name.endswith('s') or name.endswith('x') or name.endswith('ch') or name.endswith('sh'):
        return name + 'es'
    return name + 's'


def clean_name(name: str) -> str:
    """Clean a name for Ruby identifier."""
    # Remove special characters
    name = re.sub(r'[^A-Za-z0-9_]', '', name)
    return name


def clean_class_name(name: str) -> str:
    """Clean a class name for use in file names."""
    # Replace DFC_BusinessOntology prefixes
    name = re.sub(r'^DFC_BusinessOntology_', '', name)
    name = re.sub(r'^DFC_', '', name)
    # Remove underscores from underscores
    name = name.replace('_', '')
    return to_snake_case(name)


def get_slot_type(slot_name: str, slot_data: dict, schema_data: dict) -> str:
    """Determine the Ruby/PostgreSQL type for a slot."""
    range_type = slot_data.get('range', 'string')
    
    if range_type in ('string', 'str', 'NCName', 'URI', 'URIorCurie', 'Curie'):
        return 'string'
    elif range_type in ('integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
        return 'integer'
    elif range_type in ('float', 'decimal', 'double'):
        return 'decimal'
    elif range_type in ('boolean', 'bool'):
        return 'boolean'
    elif range_type in ('date', 'datetime', 'date', 'time'):
        return 'datetime'
    elif range_type == 'float':
        return 'float'
    elif range_type in schema_data.get('classes', {}):
        # Object reference - this is a foreign key
        return 'fk'
    else:
        return 'string'


def get_data_properties_for_class(class_name: str, schema_data: dict) -> list:
    """Get all data property slots for a class."""
    data_props = []
    for slot_name, slot_data in schema_data.get('slots', {}).items():
        # Check if this slot belongs to this class
        domain = slot_data.get('domain', '')
        range_type = slot_data.get('range', 'string')
        
        if domain != class_name:
            continue
        
        # Skip object references (they become associations)
        if range_type in schema_data.get('classes', {}):
            continue
        
        # Skip if no range or range is a basic type
        if range_type not in schema_data.get('enums', {}):
            data_props.append((slot_name, slot_data))
    
    return data_props


def get_object_references_for_class(class_name: str, schema_data: dict) -> list:
    """Get all object property references for a class."""
    refs = []
    for slot_name, slot_data in schema_data.get('slots', {}).items():
        domain = slot_data.get('domain', '')
        range_type = slot_data.get('range', '')
        
        if domain == class_name and range_type in schema_data.get('classes', {}):
            refs.append((slot_name, range_type))
    
    return refs


def get_referencing_classes(class_name: str, schema_data: dict) -> list:
    """Get all classes that reference this class via object properties."""
    refs = []
    for slot_name, slot_data in schema_data.get('slots', {}).items():
        range_type = slot_data.get('range', '')
        if range_type == class_name:
            domain = slot_data.get('domain', '')
            if domain in schema_data.get('classes', {}):
                refs.append((slot_name, domain))
    return refs


def determine_association_type(slot_name: str, target_class: str) -> tuple:
    """
    Determine if a property should be belongs_to or has_many.
    Returns (type, name, target).
    """
    # Slots that indicate ownership/containment -> belongs_to
    if slot_name.startswith('has_') or slot_name.endswith('_of'):
        # Extract the target from the slot name
        parts = slot_name.replace('has_', '').replace('_of', '').split('_')
        if parts:
            # Common patterns
            target = to_camel_case(parts[-1])
            return ('belongs_to', to_snake_case(slot_name), target)
    
    # Slots ending with 'Of' pattern -> belongs_to
    if slot_name.endswith('Of'):
        target = slot_name[:-2]  # Remove 'Of'
        target_camel = to_camel_case(target)
        return ('belongs_to', to_snake_case(slot_name), target_camel)
    
    # Default pattern: singular for belongs_to, plural for has_many
    return ('has_many', to_plural(to_snake_case(slot_name)), to_camel_case(target_class))


def get_applicable_enums(class_name: str, schema_data: dict) -> list:
    """Determine which enums apply to a class based on its hierarchy."""
    applicable = []
    
    # Get class hierarchy
    class_hierarchy = set()
    current = class_name
    while current:
        class_hierarchy.add(current)
        class_data = schema_data['classes'].get(current, {})
        current = class_data.get('is_a', '')
    
    # Check each enum for applicability
    for enum_name, enum_data in schema_data.get('enums', {}).items():
        pv_data = enum_data.get('permissible_values', {})
        
        # Map enum names to their likely usage context
        enum_usage_map = {
            'Facet': ['DefinedProduct', 'Offer', 'Order', 'CatalogItem'],
            'ProductType': ['DefinedProduct', 'SuppliedProduct', 'TechnicalProduct', 'FunctionalProduct'],
            'Measure': ['QuantitativeValue', 'Price', 'NutrientCharacteristic', 'PhysicalCharacteristic'],
            'Scope': ['SaleSession', 'TemplateSaleSession', 'Order'],
            'VocabularyTerm': ['Offer', 'Order', 'OrderLine', 'SaleSession'],
        }
        
        # Check if this enum should apply to this class
        applicable_classes = enum_usage_map.get(enum_name, [])
        for cls in class_hierarchy:
            if cls in applicable_classes:
                applicable.append(enum_name)
                break
    
    return applicable


def generate_gemfile(schema_data: dict, gem_name: str) -> str:
    """Generate Gemfile."""
    return f'''source 'https://rubygems.org'

gemspec

gem 'activerecord', '~> 7.0'
gem 'pg', '~> 1.4'
gem 'rails', '~> 7.0'
gem 'enum_help'  # For enum translations
'''


def generate_gemspec(schema_data: dict, gem_name: str) -> str:
    """Generate .gemspec file."""
    return f'''Gem::Specification.new do |spec|
  spec.name          = '{gem_name}'
  spec.version      = '{schema_data.get("version", "0.1.0")}'
  spec.authors      = ["Data Food Consortium"]
  spec.email        = ["hello@fooddatacollaboration.org.uk"]
  spec.summary     = "{schema_data.get('description', 'DFC LinkML Models')}"
  spec.description  = "{schema_data.get('description', 'ActiveRecord models from DFC LinkML schema')}"
  spec.homepage    = "https://github.com/Food-Data-Collaboration/DFC-LinkML"
  spec.license     = "AGPL-3.0"

  spec.files        = Dir["lib/**/*.rb"]
  spec.require_path = "lib"

  spec.add_runtime_dependency "activerecord", "~> 7.0"
  spec.add_runtime_dependency "pg", "~> 1.4"
  spec.metadata = {{
    "rubygems_mfa_required" => "true"
  }}
end
'''


def generate_activerecord_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    """Generate an ActiveRecord model file."""
    is_root = class_data.get('tree_root', False)
    parent_class = class_data.get('is_a', '')
    
    # Get the parent model name if present
    parent_model = to_camel_case(parent_class) if parent_class else 'ApplicationRecord'
    
    # Get description
    description = class_data.get('description', '').replace("'", "'\\''")
    
    code = f'''# frozen_string_literal: true

# {description}
class {class_name} < {parent_model}
  self.table_name = '{to_plural(to_snake_case(class_name))}'
  
'''
    
    # Get data properties for this class
    data_props = get_data_properties_for_class(class_name, schema_data)
    
    # Get object references for this class (properties owned by this class)
    obj_refs = get_object_references_for_class(class_name, schema_data)
    
    # Get classes that reference this class
    referencing = get_referencing_classes(class_name, schema_data)
    
    # Generate belongs_to associations for object references
    if obj_refs:
        code += '  # Object property associations (owned by this class)\n'
        for slot_name, target_class in obj_refs:
            assoc_name = to_snake_case(slot_name)
            code += f'  belongs_to :{assoc_name}, class_name: "{target_class}", foreign_key: "{assoc_name}_id", optional: true\n'
        code += '\n'
    
    # Generate has_many associations for inverse references
    if referencing:
        code += '  # Inverse associations (referenced by other classes)\n'
        for slot_name, ref_class in referencing:
            # Determine if this should be has_many or has_one
            if slot_name.startswith('has_') and not slot_name.endswith('s'):
                assoc_type = 'has_one'
            else:
                assoc_type = 'has_many'
            assoc_name = to_plural(to_snake_case(slot_name))
            code += f'  {assoc_type} :{assoc_name}, class_name: "{ref_class}", foreign_key: "{to_snake_case(slot_name)}_id"\n'
        code += '\n'
    
    # Generate enums for applicable classes
    applicable_enums = get_applicable_enums(class_name, schema_data)
    if applicable_enums:
        code += '  # Enumerations\n'
        for enum_name in applicable_enums:
            enum_data = schema_data['enums'].get(enum_name, {})
            pv_data = enum_data.get('permissible_values', {})
            if pv_data:
                code += f'  enum {to_snake_case(enum_name)}: {{\n'
                values = []
                for pv_name, pv_info in sorted(pv_data.items()):
                    clean_pv = clean_name(pv_name).lower().replace(' ', '_')
                    values.append(f'    {clean_pv}: {clean_pv}')
                code += ',\n'.join(values) + ',\n  }\n'
        code += '\n'
    
    # Generate attr_accessor for unmapped data properties (if needed)
    # Note: Data properties are typically handled by the column mapping
    
    code += '''end
'''
    return code


def generate_activerecord_application_record() -> str:
    """Generate ApplicationRecord base class."""
    return '''# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  # Shared behavior across all models
  
  # Convert model to LinkML-compatible hash
  def to_linkml
    attributes.slice(*self.class.column_names.map(&:to_sym))
  end
  
  # Find or create by external ID
  def self.find_or_create_by_dfc_id(dfc_id)
    find_or_create_by(uri: dfc_id)
  end
end
'''


def generate_model_documentation(class_name: str, class_data: dict, schema_data: dict) -> str:
    """Generate model documentation comments."""
    data_props = get_data_properties_for_class(class_name, schema_data)
    obj_refs = get_object_references_for_class(class_name, schema_data)
    
    doc = f'''# frozen_string_literal: true

# DFC LinkML Model: {class_name}
# Generated from LinkML schema
#
# Description: {class_data.get('description', 'N/A')}
# Parent: {class_data.get('is_a', 'ApplicationRecord')}
#
# Data Properties ({len(data_props)}):
'''
    for prop, prop_data in data_props:
        doc += f'#   - {prop}: {prop_data.get("description", "")}\n'
    
    doc += f'#\n# Object Properties ({len(obj_refs)}):\n'
    for prop, target in obj_refs:
        doc += f'#   - {prop} -> {target}\n'
    
    return doc


def generate_migration(schema_data: dict) -> str:
    """Generate comprehensive migration file."""
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    
    code = f'''# frozen_string_literal: true

class CreateDfcTables < ActiveRecord::Migration[7.0]
  def change
    # Enable UUID support
    enable_extension 'uuid-ossp' unless extension_enabled?('uuid-ossp')
    
'''
    
    # Generate create_table statements for each class
    for class_name, class_data in schema_data.get('classes', {}).items():
        # Skip external classes
        if ':' in class_name or class_name.startswith('foaf') or class_name.startswith('skos'):
            continue
        
        table_name = to_plural(to_snake_case(class_name))
        
        code += f'''
    # Table: {table_name} (Class: {class_name})
    create_table :{table_name}, id: :uuid do |t|
      t.timestamps
'''
        
        # Add data property columns
        for slot_name, slot_data in schema_data.get('slots', {}).items():
            domain = slot_data.get('domain', '')
            if domain != class_name:
                continue
            
            range_type = slot_data.get('range', 'string')
            
            # Skip object references (handled as foreign keys in associations)
            if range_type in schema_data.get('classes', {}):
                col_name = to_snake_case(slot_name)
                code += f'      t.uuid :{col_name}_id, comment: "FK to {range_type}"\n'
                continue
            
            # Data property columns
            col_name = to_snake_case(slot_name)
            
            if range_type in ('string', 'str', 'NCName', 'URI', 'URIorCurie', 'Curie', 'boolean', 'bool'):
                code += f'      t.string :{col_name}\n'
            elif range_type in ('integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
                code += f'      t.integer :{col_name}\n'
            elif range_type in ('float', 'decimal', 'double'):
                code += f'      t.decimal :{col_name}, precision: 10, scale: 4\n'
            elif range_type in ('date', 'datetime', 'date', 'time'):
                code += f'      t.datetime :{col_name}\n'
            elif range_type == 'float':
                code += f'      t.float :{col_name}\n'
            else:
                code += f'      t.string :{col_name}\n'
        
        # Add index for common lookups
        code += f'''
      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end
'''
    
    code += '''
  end
end
'''
    return code


def generate_enum_migration(schema_data: dict) -> str:
    """Generate migration for enum values (optional, for documentation)."""
    code = '''# frozen_string_literal: true

# This migration documents the enum values available in the schema.
# In PostgreSQL, we use string columns with check constraints.
# Example usage: validate_inclusion_of :facet, in: Facet.values

class CreateDfcEnums < ActiveRecord::Migration[7.0]
  def change
'''
    
    for enum_name, enum_data in schema_data.get('enums', {}).items():
        pv_data = enum_data.get('permissible_values', {})
        values = [clean_name(k).lower().replace(' ', '_') for k in pv_data.keys()]
        code += f'''
    # Enum: {enum_name} ({len(values)} values)
    # Example: validate_inclusion_of :{to_snake_case(enum_name)}, in: {to_camel_case(enum_name)}.values
'''
    
    code += '''
  end
end
'''
    return code


def generate_association_helper_module(schema_data: dict) -> str:
    """Generate module with association helpers."""
    code = '''# frozen_string_literal: true

module DfcModels
  module Associations
    # Helper module for common DFC associations
    
    # Products
    def product_associations
      {
        ingredients: -> { has_many :ingredients },
        allergens: -> { has_many :allergen_characteristics },
        nutrients: -> { has_many :nutrient_characteristics },
        labels: -> { has_many :labelling_characteristics },
        physical_properties: -> { has_many :physical_characteristics }
      }
    end
    
    # Orders
    def order_associations
      {
        lines: -> { has_many :order_lines },
        offers: -> { has_many :offers },
        payments: -> { has_many :payment_methods }
      }
    end
    
    # Agents
    def agent_associations
      {
        catalogs: -> { has_many :catalogs },
        orders: -> { has_many :orders },
        products: -> { has_many :supplied_products }
      }
    end
  end
end
'''
    return code


def generate_readme(schema_data: dict, gem_name: str) -> str:
    """Generate README."""
    class_count = len(schema_data.get('classes', {}))
    slot_count = len(schema_data.get('slots', {}))
    enum_count = len(schema_data.get('enums', {}))
    version = schema_data.get('version', '0.1.0')
    
    return f'''# {to_camel_case(gem_name)}

{schema_data.get('description', 'ActiveRecord models from DFC LinkML schema')}

## Schema Overview

- **Classes**: {class_count}
- **Slots/Properties**: {slot_count}
- **Enumerations**: {enum_count}

## Installation

Add this line to your Gemfile:

```ruby
gem '{gem_name}'
```

And then execute:

```bash
bundle install
```

Or install yourself:

```bash
gem build {gem_name}.gemspec
gem install {gem_name}-{version}.gem
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
require '{gem_name}'

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
'''


def main():
    # Find schema file
    schema_paths = [
        'src/dfc_business_linkml.yaml',
        '../src/dfc_business_linkml.yaml',
        '../../src/dfc_business_linkml.yaml',
    ]
    
    schema_path = None
    for p in schema_paths:
        if Path(p).exists():
            schema_path = p
            break
    
    if not schema_path:
        print("Error: Could not find schema file", file=sys.stderr)
        sys.exit(1)
    
    # Parse schema
    print(f"Loading schema: {schema_path}", file=sys.stderr)
    schema_data = parse_schema(schema_path)
    
    gem_name = "dfc-models"
    output_dir = Path("ruby-gem")
    
    # Remove old output directory
    if output_dir.exists():
        import shutil
        shutil.rmtree(output_dir)
    
    # Create output directory structure
    output_dir.mkdir()
    (output_dir / 'lib').mkdir()
    (output_dir / 'lib' / 'dfc_models').mkdir()
    (output_dir / 'db' / 'migrate').mkdir(parents=True)
    
    print(f"Generating gem: {gem_name}", file=sys.stderr)
    print(f"Classes: {len(schema_data['classes'])}", file=sys.stderr)
    print(f"Slots: {len(schema_data['slots'])}", file=sys.stderr)
    print(f"Enums: {len(schema_data['enums'])}", file=sys.stderr)
    
    # Generate core files
    print("\nGenerating core files...", file=sys.stderr)
    
    (output_dir / 'Gemfile').write_text(generate_gemfile(schema_data, gem_name))
    print("  - Gemfile", file=sys.stderr)
    
    (output_dir / f'{gem_name}.gemspec').write_text(generate_gemspec(schema_data, gem_name))
    print(f"  - {gem_name}.gemspec", file=sys.stderr)
    
    (output_dir / 'lib' / 'dfc_models.rb').write_text('''# frozen_string_literal: true

require 'active_record'

# DFC Models
module DfcModels
  def self.root
    File.expand_path('..', __dir__)
  end
end

require_relative 'dfc_models/associations'
''')
    print("  - lib/dfc_models.rb", file=sys.stderr)
    
    (output_dir / 'lib' / '__init__.rb').write_text(f'''# frozen_string_literal: true

module DfcModels
  VERSION = '{schema_data.get("version", "0.1.0")}'
end
''')
    print("  - lib/__init__.rb", file=sys.stderr)
    
    (output_dir / 'lib' / 'application_record.rb').write_text(generate_activerecord_application_record())
    print("  - lib/application_record.rb", file=sys.stderr)
    
    # Generate association helpers
    (output_dir / 'lib' / 'dfc_models' / 'associations.rb').write_text(generate_association_helper_module(schema_data))
    print("  - lib/dfc_models/associations.rb", file=sys.stderr)
    
    # Generate ActiveRecord models
    print("\nGenerating models...", file=sys.stderr)
    model_count = 0
    
    for class_name, class_data in schema_data.get('classes', {}).items():
        # Skip external classes
        if ':' in class_name or class_name.startswith('foaf') or class_name.startswith('skos'):
            continue
        
        model_code = generate_activerecord_model(class_name, class_data, schema_data)
        file_name = clean_class_name(class_name)
        file_path = output_dir / 'lib' / 'dfc_models' / f'{file_name}.rb'
        file_path.write_text(model_code)
        model_count += 1
    
    print(f"  - {model_count} model files", file=sys.stderr)
    
    # Generate migrations
    print("\nGenerating migrations...", file=sys.stderr)
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    
    (output_dir / 'db' / 'migrate' / f'{timestamp}_create_dfc_tables.rb').write_text(
        generate_migration(schema_data))
    print("  - db/migrate/create_dfc_tables.rb", file=sys.stderr)
    
    (output_dir / 'db' / 'migrate' / f'{timestamp}_create_dfc_enums.rb').write_text(
        generate_enum_migration(schema_data))
    print("  - db/migrate/create_dfc_enums.rb", file=sys.stderr)
    
    # Generate README
    (output_dir / 'README.md').write_text(generate_readme(schema_data, gem_name))
    print("  - README.md", file=sys.stderr)
    
    # Generate LICENSE
    (output_dir / 'LICENSE').write_text('''AGPL-3.0 License
Copyright (c) 2024 Data Food Consortium

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
''')
    print("  - LICENSE", file=sys.stderr)
    
    # Generate .gitignore
    (output_dir / '.gitignore').write_text('''*.gem
.bundle/
pkg/
vendor/
*.db
*.sqlite3
log/*.log
tmp/
.DS_Store
''')
    print("  - .gitignore", file=sys.stderr)
    
    # Generate Rakefile for rake tasks
    (output_dir / 'Rakefile').write_text('''# frozen_string_literal: true

require "bundler/gem_tasks"

task default: :spec
''')
    print("  - Rakefile", file=sys.stderr)
    
    print(f"\nGem generated in: {output_dir}/", file=sys.stderr)
    print(f"To build: cd {output_dir} && gem build {gem_name}.gemspec", file=sys.stderr)


if __name__ == '__main__':
    main()