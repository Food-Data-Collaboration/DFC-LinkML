#!/usr/bin/env python3
"""
Generate a Ruby on Rails gem from LinkML schema.

Creates a Ruby gem with ActiveRecord models for the DFC LinkML schema.

Usage:
    python3 generate_ruby_gem.py [--output DIR]
"""

import os
import re
import sys
import yaml
from pathlib import Path
from datetime import datetime


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


def generate_gemgemfile(schema_data: dict, gem_name: str) -> str:
    """Generate Gemfile."""
    return f'''source 'https://rubygems.org'

gemspec

gem 'activerecord', '~> 7.0'
gem 'pg', '~> 1.4'
gem 'rails', '~> 7.0'
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
  spec.homepage    = "https://github.com/Food-Data-Collaboration/DFC-LinkMML"
  spec.license     = "AGPL-3.0"

  spec.files        = Dir["lib/**/*.rb"]
  spec.require_path = "lib"

  spec.add_runtime_dependency "activerecord", "~> 7.0"
  spec.add_runtime_dependency "pg", "~> 1.4"
end
'''


def generateactiverecord_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    """Generate an ActiveRecord model file."""
    is_root = class_data.get('tree_root', False)
    parent_class = class_data.get('is_a', '')
    
    # Get the parent model name if present
    parent_model = to_camel_case(parent_class) if parent_class else 'ApplicationRecord'
    
    # Determine table name
    table_name = to_plural(to_snake_case(class_name))
    
    # Get description for comments
    description = class_data.get('description', '').replace("'", "'\\''")
    
    code = f'''# frozen_string_literal: true

class {class_name} < {parent_model}
  self.table_name = '{table_name}'
  
'''
    
    # Add description as comment
    if description:
        code += f'''  # {description}
'''
    
    # Add self.inheritance_column to handle single-table inheritance if needed
    if is_root:
        code += f'''  # Root class for this hierarchy
'''
    
    # Find slots that reference this class as domain
    referenced_by = []
    for slot_name, slot_data in schema_data.get('slots', {}).items():
        domain = slot_data.get('domain', '')
        if domain == class_name:
            referenced_by.append(slot_name)
    
    # Add associations for referenced slots
    if referenced_by:
        code += f'''  # Associations
'''
        for slot in referenced_by[:10]:  # Limit to first 10 to avoid bloat
            # Determine if it's a singular or plural relation
            if '_of' in slot or 'has' in slot:
                target = slot.split('_')[-1]
                target_model = to_camel_case(target)
                if slot.startswith('has_') or slot.endswith('_of'):
                    code += f'  belongs_to :{to_snake_case(target)}, class_name: "{target_model}"\n'
                else:
                    code += f'  has_many :{to_plural(to_snake_case(target))}, class_name: "{target_model}"\n'
    
    # Add enum values if any
    for enum_name, enum_data in schema_data.get('enums', {}).items():
        pv_data = enum_data.get('permissible_values', {})
        if pv_data:
            code += f'''
  # Enum: {enum_name}
  enum {to_snake_case(enum_name)}: {{'''
            for i, (pv_name, pv_info) in enumerate(sorted(pv_data.items())):
                if i > 0:
                    code += ', '
                if i % 5 == 4:
                    code += '\n    '
                code += f'{clean_name(pv_name).lower()}: {clean_name(pv_name).lower()}'
            code += '}\n'
    
    code += f'''
end
'''
    return code


def generateactiverecord_application_record() -> str:
    """Generate ApplicationRecord base class."""
    return '''# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  # Shared behavior across all models
  def to_linkml
    {{}}
  end
end
'''


def generatelibinit(schema_data: dict, gem_name: str) -> str:
    """Generate lib/__init__.rb"""
    return f'''# frozen_string_literal: true

module {to_camel_case(gem_name).replace('-', '')}
  VERSION = '{schema_data.get("version", "0.1.0")}'
  
  module Models
    # Auto-load all models
  end
end
'''


def generatemigration(schema_data: dict) -> str:
    """Generate a migration file for all tables."""
    columns = []
    
    for class_name, class_data in schema_data.get('classes', {}).items():
        table_name = to_plural(to_snake_case(class_name))
        
        cols = ['id:primary_key']
        
        # Add common columns from data properties
        for slot_name, slot_data in schema_data.get('slots', {}).items():
            domain = slot_data.get('domain', '')
            if domain == class_name:
                range_type = slot_data.get('range', 'string')
                col_name = to_snake_case(slot_name)
                
                if range_type in ('string', 'str'):
                    cols.append(f'{col_name}:string')
                elif range_type in ('integer', 'int'):
                    cols.append(f'{col_name}:integer')
                elif range_type in ('float', 'decimal'):
                    cols.append(f'{col_name}:decimal')
                elif range_type in ('boolean', 'bool'):
                    cols.append(f'{col_name}:boolean')
                elif range_type in ('date', 'datetime'):
                    cols.append(f'{col_name}:datetime')
                else:
                    # Foreign key for class references
                    cols.append(f'{col_name}_id:bigint')
        
        cols.append('created_at:datetime')
        cols.append('updated_at:datetime')
        
        columns.append((table_name, cols))
    
    # Generate migration
    code = f'''# frozen_string_literal: true

class CreateDfcTables < ActiveRecord::Migration[7.0]
  def change
'''
    
    for table_name, col_defs in columns[:10]:  # Limit to first 10 tables
        code += f'''
    create_table :{table_name}, force: true do |t|
'''
        for col_def in col_defs:
            col_name, col_type = col_def.split(':')
            if col_type == 'primary_key':
                code += '      t.primary_key\n'
            else:
                code += f'      t.{col_type} :{col_name}\n'
        code += '    end\n'
    
    code += '''
  end
end
'''
    return code


def generate_readme(schema_data: dict, gem_name: str) -> str:
    """Generate README."""
    return f'''# {to_camel_case(gem_name)}

{schema_data.get('description', 'ActiveRecord models from DFC LinkML schema')}

## Installation

Add this line to your application's Gemfile:

```ruby
gem '{gem_name}'
```

And then execute:

    $ bundle install

Or install it yourself:

    $ gem build {gem_name}.gemspec
    $ gem install {gem_name}-{schema_data.get('version', '0.1.0')}.gem

## Usage

Add to your Rails application:

```ruby
# config/application.rb
require '{gem_name}'
```

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
    
    # Create output directory
    output_dir.mkdir(exist_ok=True)
    (output_dir / 'lib').mkdir(exist_ok=True)
    (output_dir / 'lib' / 'dfc_models').mkdir(exist_ok=True)
    (output_dir / 'db' / 'migrate').mkdir(parents=True, exist_ok=True)
    
    print(f"Generating gem: {gem_name}", file=sys.stderr)
    print(f"Classes: {len(schema_data['classes'])}", file=sys.stderr)
    print(f"Slots: {len(schema_data['slots'])}", file=sys.stderr)
    print(f"Enums: {len(schema_data['enums'])}", file=sys.stderr)
    
    # Generate files
    print(f"\nGenerating files in {output_dir}/...", file=sys.stderr)
    
    # Gemfile
    (output_dir / 'Gemfile').write_text(generate_gemgemfile(schema_data, gem_name))
    print("  - Gemfile", file=sys.stderr)
    
    # Gemspec
    (output_dir / f'{gem_name}.gemspec').write_text(generate_gemspec(schema_data, gem_name))
    print(f"  - {gem_name}.gemspec", file=sys.stderr)
    
    # lib/__init__.rb
    (output_dir / 'lib' / '__init__.rb').write_text(generatelibinit(schema_data, gem_name))
    print("  - lib/__init__.rb", file=sys.stderr)
    
    # lib/dfc_models.rb
    (output_dir / 'lib' / 'dfc_models.rb').write_text(f'''# DFC Models
require 'active_record'

module DfcModels
  def self.root
    File.expand_path('..', __dir__)
  end
end
''')
    print("  - lib/dfc_models.rb", file=sys.stderr)
    
    # Generate ActiveRecord models
    for class_name, class_data in schema_data.get('classes', {}).items():
        # Skip external classes
        if ':' in class_name or class_name.startswith('foaf') or class_name.startswith('skos'):
            continue
        
        model_code = generateactiverecord_model(class_name, class_data, schema_data)
        file_path = output_dir / 'lib' / 'dfc_models' / f'{to_snake_case(class_name)}.rb'
        file_path.write_text(model_code)
    
    print(f"  - {len(schema_data['classes'])} model files", file=sys.stderr)
    
    # ApplicationRecord
    (output_dir / 'lib' / 'application_record.rb').write_text(generateactiverecord_application_record())
    print("  - lib/application_record.rb", file=sys.stderr)
    
    # Migration
    (output_dir / 'db' / 'migrate' / f'{datetime.now().strftime("%Y%m%d%H%M%S")}_create_dfc_tables.rb').write_text(
        generatemigration(schema_data))
    print("  - db/migrate migration", file=sys.stderr)
    
    # README
    (output_dir / 'README.md').write_text(generate_readme(schema_data, gem_name))
    print("  - README.md", file=sys.stderr)
    
    # LICENSE
    (output_dir / 'LICENSE').write_text('''AGPL-3.0 License
Copyright (c) 2024 Data Food Consortium

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
''')
    print("  - LICENSE", file=sys.stderr)
    
    print(f"\nGem generated in: {output_dir}/", file=sys.stderr)
    print(f"To build: cd {output_dir} && gem build {gem_name}.gemspec", file=sys.stderr)


if __name__ == '__main__':
    main()