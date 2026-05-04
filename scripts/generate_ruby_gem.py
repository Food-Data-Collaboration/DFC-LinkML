#!/usr/bin/env python3
"""
Ruby gem generator from LinkML schema.

Generates a complete Ruby gem with semantic objects that faithfully
represent the LinkML schema, mimicking the datafoodconsortium/connector-ruby
but with complete class coverage. Generates:
- All classes with proper inheritance and semantic types
- All data properties as attr_accessor with initialize parameters
- All object properties as typed accessors
- External vocabulary files (SKOS-style) from enums
- Connector singleton for vocabulary loading and JSON-LD export
- JSON-LD serialization on every model

Usage:
    python3 generate_ruby_gem.py [--output DIR]
"""

import json
import re
import sys
import yaml
from pathlib import Path


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


def to_ruby_class_name(name: str) -> str:
    """Convert a LinkML class name to a valid Ruby class name.

    Handles:
    - DFC_BusinessOntology_Relation -> DFCBusinessOntologyRelation
    - Where_Subject -> WhereSubject
    - What_Subject -> WhatSubject
    - DefinedProduct -> DefinedProduct  (already CamelCase)
    - RepresentedThing -> RepresentedThing
    """
    name = re.sub(r'^DFC_BusinessOntology_', '', name)
    name = re.sub(r'^DFC_', '', name)
    parts = name.split('_')
    result = []
    for part in parts:
        if part[0].isupper() and len(part) > 1:
            result.append(part)
        else:
            result.append(part.capitalize())
    return ''.join(result)


def to_file_name(name: str) -> str:
    """Convert a LinkML class name to a Ruby file name (snake_case)."""
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    return name.lower()


def ruby_property_name(slot_name: str) -> str:
    """Convert a slot name to a Ruby accessor name."""
    name = slot_name
    if name.startswith('has'):
        name = name[3:]
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    name = name.lower()
    if name.startswith('_'):
        name = name[1:]
    if name == 'u_r_l':
        return 'url'
    if name == 'v_a_tnumber':
        return 'vat_number'
    if name == 'v_a_trate':
        return 'vat_rate'
    if name == 'v_a_tstatus':
        return 'vat_status'
    if name == 'enterprise_i_d':
        return 'enterprise_id'
    if name == 'operator_i_d':
        return 'operator_id'
    if name == 'country_code':
        return 'country_code'
    return name


def ruby_param_name(slot_name: str) -> str:
    """Convert a slot name to a Ruby keyword parameter name (camelCase)."""
    name = slot_name
    if name.startswith('has'):
        name = name[3:]
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    name = name.lower()
    if name.startswith('_'):
        name = name[1:]
    if name == 'u_r_l':
        name = 'url'
    if name == 'v_a_tnumber':
        name = 'vat_number'
    if name == 'v_a_trate':
        name = 'vat_rate'
    if name == 'v_a_tstatus':
        name = 'vat_status'
    if name == 'enterprise_i_d':
        name = 'enterprise_id'
    if name == 'operator_i_d':
        name = 'operator_id'
    parts = name.split('_')
    return parts[0] + ''.join(p.capitalize() for p in parts[1:])


def get_class_hierarchy(class_name: str, classes: dict) -> list:
    """Get the inheritance chain for a class, from root to class."""
    chain = []
    current = class_name
    while current:
        chain.append(current)
        current = classes.get(current, {}).get('is_a', '')
    chain.reverse()
    return chain


def get_all_slots_for_class(class_name: str, schema_data: dict):
    """Get all slots that apply to a class, including inherited ones."""
    classes = schema_data['classes']
    slots = schema_data['slots']
    hierarchy = get_class_hierarchy(class_name, classes)

    seen = set()
    for cls in hierarchy:
        for slot_name, slot_data in slots.items():
            domain = slot_data.get('domain', '')
            if domain == cls and slot_name not in seen:
                seen.add(slot_name)
                yield slot_name, slot_data, cls


def get_data_properties(class_name: str, schema_data: dict) -> list:
    """Get data properties for a class (non-class-range slots)."""
    classes = schema_data['classes']
    props = []
    for slot_name, slot_data, owner in get_all_slots_for_class(class_name, schema_data):
        range_type = slot_data.get('range', '')
        if range_type and range_type not in classes:
            props.append((slot_name, slot_data, owner))
    return props


def get_object_properties(class_name: str, schema_data: dict) -> list:
    """Get object properties for a class (class-range slots)."""
    classes = schema_data['classes']
    props = []
    for slot_name, slot_data, owner in get_all_slots_for_class(class_name, schema_data):
        range_type = slot_data.get('range', '')
        if range_type in classes:
            props.append((slot_name, slot_data, owner))
    return props


def get_parent_ruby_class(class_data: dict) -> str:
    """Get the Ruby parent class name for a class."""
    parent = class_data.get('is_a', '')
    if not parent:
        return 'SemanticObject'
    return to_ruby_class_name(parent)


def rdf_prefix_for_class(class_name: str) -> str:
    """Get the RDF prefix for a class."""
    return f'dfc-b:{class_name}'


def ruby_type_for_slot(slot_data: dict, schema_data: dict) -> str:
    """Determine the Ruby type annotation for a slot."""
    range_type = slot_data.get('range', 'string')
    classes = schema_data['classes']

    if range_type in classes:
        return to_ruby_class_name(range_type)
    elif range_type in ('float', 'decimal', 'double'):
        return 'Float'
    elif range_type in ('integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
        return 'Integer'
    elif range_type in ('boolean', 'bool'):
        return 'Boolean'
    else:
        return 'String'


def is_collection_property(slot_name: str, slot_data: dict) -> bool:
    """Determine if a property should be an array (collection)."""
    if slot_data.get('multivalued', False):
        return True
    name = slot_name.lower()
    collection_indicators = [
        'characteristics', 'claims', 'certifications', 'catalogitems',
        'suppliedproducts', 'technicalproducts', 'customercategories',
        'catalogs', 'variants', 'images', 'localizations', 'phonenumbers',
        'socialmedias', 'websites', 'emails', 'offers', 'orderlines',
        'steps', 'inputs', 'outputs',
    ]
    for indicator in collection_indicators:
        if indicator in name:
            return True
    if name.endswith('s') and not name.endswith('ss') and not name.endswith('us'):
        return True
    if name.endswith('ies'):
        return True
    return False


def generate_semantic_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    """Generate a semantic object model file."""
    ruby_name = to_ruby_class_name(class_name)
    parent = get_parent_ruby_class(class_data)
    description = class_data.get('description', '').replace("'", "'\\''")
    semantic_type = rdf_prefix_for_class(class_name)

    data_props = get_data_properties(class_name, schema_data)
    obj_props = get_object_properties(class_name, schema_data)

    code = f'''# frozen_string_literal: true

# {description}
require_relative '../semantic_object'
'''

    if parent != 'SemanticObject':
        parent_file = to_file_name(parent)
        code += f"require_relative '{parent_file}'\n"

    code += f'''

class {ruby_name} < {parent}
  SEMANTIC_TYPE = "{semantic_type}".freeze

'''

    all_props = []
    own_props_for_init = []
    seen_ruby_props = set()

    for slot_name, slot_data, owner in data_props:
        prop_name = ruby_property_name(slot_name)
        if prop_name in seen_ruby_props:
            continue
        seen_ruby_props.add(prop_name)
        rtype = ruby_type_for_slot(slot_data, schema_data)
        is_collection = False
        if owner == class_name:
            code += f'  # @return [{rtype}]\n'
            code += f'  attr_accessor :{prop_name}\n\n'
            own_props_for_init.append((slot_name, prop_name, slot_data, is_collection))
        all_props.append((slot_name, prop_name, slot_data, owner, is_collection))

    for slot_name, slot_data, owner in obj_props:
        prop_name = ruby_property_name(slot_name)
        if prop_name in seen_ruby_props:
            continue
        seen_ruby_props.add(prop_name)
        rtype = ruby_type_for_slot(slot_data, schema_data)
        is_collection = is_collection_property(slot_name, slot_data)
        if owner == class_name:
            if is_collection:
                code += f'  # @return [Array<{rtype}>]\n'
            else:
                code += f'  # @return [{rtype}]\n'
            code += f'  attr_accessor :{prop_name}\n\n'
            own_props_for_init.append((slot_name, prop_name, slot_data, is_collection))
        all_props.append((slot_name, prop_name, slot_data, owner, is_collection))

    if own_props_for_init:
        all_params = []
        assignments = []
        registrations = []

        for slot_name, prop_name, slot_data, is_collection in own_props_for_init:
            param_name = ruby_param_name(slot_name)
            if is_collection:
                all_params.append(f'{param_name}: []')
                assignments.append(f'    @{prop_name} = {param_name}')
            else:
                all_params.append(f'{param_name}: nil')
                assignments.append(f'    @{prop_name} = {param_name}')
            registrations.append(f'    registerSemanticProperty("{semantic_type}:{slot_name}", &method("{prop_name}")).valueSetter = method("{prop_name}=")')

        params_str = ', '.join(all_params)
        assignments_str = '\n'.join(assignments)
        registrations_str = '\n'.join(registrations)

        code += f'''  # @param semanticId [String]
  # @param {params_str}
  def initialize(semanticId, {params_str})
    super(semanticId)
{assignments_str}
    self.semanticType = "{semantic_type}"
{registrations_str}
  end

'''

    code += 'end\n'
    return code


def generate_vocabulary_file(enum_name: str, enum_data: dict) -> str:
    """Generate a SKOS-style JSON-LD vocabulary file from an enum."""
    pv_data = enum_data.get('permissible_values', {})

    concepts = []
    for pv_name, pv_info in pv_data.items():
        meaning = pv_info.get('meaning', '')
        description = pv_info.get('description', pv_name)

        concept = {
            "@id": meaning if meaning else f"dfc-v:{pv_name}",
            "@type": ["skos:Concept"],
            "skos:prefLabel": description,
            "skos:notation": pv_name,
        }
        concepts.append(concept)

    vocab = {
        "@context": {
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "dfc-v": "http://w3id.org/dfc/taxonomies/vocabulary.rdf#",
        },
        "@graph": [
            {
                "@id": f"dfc-v:{enum_name}",
                "@type": ["skos:ConceptScheme"],
                "skos:prefLabel": enum_name,
                "skos:hasTopConcept": [c["@id"] for c in concepts],
            }
        ] + concepts,
    }

    return json.dumps(vocab, indent=2, ensure_ascii=False)


def generate_vocabulary_loader(schema_data: dict) -> str:
    """Generate the VocabularyLoader class."""
    enum_names = list(schema_data.get('enums', {}).keys())

    code = '''# frozen_string_literal: true

# Loads DFC SKOS vocabularies from JSON-LD files.
class VocabularyLoader
  def initialize
    @vocabularies = {}
  end

  def load(name, json_data)
    concepts = {}
    json_data.fetch("@graph", []).each do |entry|
      next unless entry["@type"]&.include?("skos:Concept")
      notation = entry["skos:notation"] || entry["skos:prefLabel"]
      concepts[notation] = entry
    end
    @vocabularies[name] = concepts
    self
  end

  def vocabulary(name)
    @vocabularies[name] || {}
  end

  def facet(key)
    vocabulary("Facet")[key]
  end

  def measure(key)
    vocabulary("Measure")[key]
  end

  def product_type(key)
    vocabulary("ProductType")[key]
  end

'''

    for enum_name in enum_names:
        snake = to_snake_case(enum_name)
        code += f'''  def {snake}
    vocabulary("{enum_name}")
  end

'''

    code += 'end\n'
    return code


def generate_semantic_object_base() -> str:
    """Generate the SemanticObject base class."""
    return '''# frozen_string_literal: true

# Base class for all DFC semantic objects.
# Mimics the VirtualAssembly::Semantizer::SemanticObject interface
# from the reference connector-ruby implementation.
class SemanticObject
  attr_accessor :semanticId
  attr_accessor :semanticType

  def initialize(semanticId)
    @semanticId = semanticId
    @semanticType = nil
    @semanticProperties = {}
  end

  def registerSemanticProperty(predicate, &getter)
    prop = SemanticProperty.new(predicate, &getter)
    @semanticProperties[predicate] = prop
    prop
  end

  def semantic_property_value(predicate)
    prop = @semanticProperties[predicate]
    prop&.getter&.call
  end

  def to_jsonld
    result = {
      "@context" => "http://static.datafoodconsortium.org/ontologies/context.json",
      "@id" => @semanticId,
      "@type" => @semanticType,
    }

    @semanticProperties.each do |predicate, prop|
      value = prop.getter.call
      next if value.nil?

      if value.is_a?(Array)
        next if value.empty?
        if value.first.is_a?(SemanticObject)
          result[predicate] = value.map { |v| v.semanticId }
        else
          result[predicate] = value
        end
      elsif value.is_a?(SemanticObject)
        result[predicate] = value.semanticId
      elsif value.is_a?(Numeric)
        result[predicate] = value
      else
        result[predicate] = value.to_s
      end
    end

    result
  end

  def to_json
    JSON.generate(to_jsonld)
  end

  class SemanticProperty
    attr_accessor :predicate
    attr_accessor :getter
    attr_accessor :valueSetter

    def initialize(predicate, &getter)
      @predicate = predicate
      @getter = getter
    end
  end
end
'''


def generate_connector_class(schema_data: dict) -> str:
    """Generate the Connector singleton class."""
    enum_names = list(schema_data.get('enums', {}).keys())

    code = '''# frozen_string_literal: true

require 'json'
require 'singleton'
require_relative 'vocabulary_loader'
require_relative 'json_ld_serializer'

# Main connector singleton. Provides vocabulary loading and JSON-LD export.
class DfcLinkmlConnector
  include Singleton

  attr_reader :facets, :measures, :product_types

  def initialize
    @vocab_loader = VocabularyLoader.new
    @facets = {}
    @measures = {}
    @product_types = {}
    @other_vocabularies = {}
  end

  def load_facets(json_data)
    @vocab_loader.load("Facet", json_data)
    @facets = _build_nested_hash(@vocab_loader.vocabulary("Facet"))
    self
  end

  def load_measures(json_data)
    @vocab_loader.load("Measure", json_data)
    @measures = _build_nested_hash(@vocab_loader.vocabulary("Measure"))
    self
  end

  def load_product_types(json_data)
    @vocab_loader.load("ProductType", json_data)
    @product_types = _build_nested_hash(@vocab_loader.vocabulary("ProductType"))
    self
  end

  def load_vocabulary(name, json_data)
    @vocab_loader.load(name, json_data)
    @other_vocabularies[name] = _build_nested_hash(@vocab_loader.vocabulary(name))
    self
  end

  def export(*objects)
    JsonLdSerializer.new.serialize(*objects)
  end

'''

    for enum_name in enum_names:
        snake = to_snake_case(enum_name)
        code += f'''  def {snake}
    @other_vocabularies["{enum_name}"] || @vocab_loader.vocabulary("{enum_name}")
  end

'''

    code += '''  private

  def _build_nested_hash(concepts)
    result = {}
    concepts.each do |key, concept|
      parts = key.split(/[_\\s]+/)
      current = result
      parts.each_with_index do |part, i|
        normalized = part.downcase.gsub(/[^a-z0-9]/, "_")
        if i == parts.length - 1
          current[normalized] = concept
        else
          current[normalized] ||= {}
          current = current[normalized]
        end
      end
    end
    result
  end
end
'''
    return code


def generate_json_ld_serializer() -> str:
    """Generate the JSON-LD serializer class."""
    return '''# frozen_string_literal: true

require 'json'

# Serializes DFC semantic objects to JSON-LD.
class JsonLdSerializer
  def serialize(*objects)
    result = {
      "@context" => "http://static.datafoodconsortium.org/ontologies/context.json",
    }

    if objects.length == 1
      obj = objects.first
      return _serialize_object(obj)
    end

    graph = []
    objects.each do |obj|
      graph << _serialize_object(obj)
    end
    result["@graph"] = graph
    result
  end

  def to_json(*objects)
    JSON.pretty_generate(serialize(*objects))
  end

  private

  def _serialize_object(obj)
    result = {
      "@id" => obj.semanticId,
      "@type" => obj.semanticType,
    }

    obj.instance_variables.each do |ivar|
      next if ivar == :@semanticId || ivar == :@semanticType || ivar == :@semanticProperties
      value = obj.instance_variable_get(ivar)
      next if value.nil?

      name = ivar.to_s.sub(/^@/, '')

      if value.is_a?(Array)
        next if value.empty?
        if value.first.is_a?(SemanticObject)
          result["dfc-b:#{name}"] = value.map { |v| v.semanticId }
        else
          result["dfc-b:#{name}"] = value
        end
      elsif value.is_a?(SemanticObject)
        result["dfc-b:#{name}"] = value.semanticId
      elsif value.is_a?(Numeric)
        result["dfc-b:#{name}"] = value
      else
        result["dfc-b:#{name}"] = value.to_s
      end
    end

    result
  end
end
'''


def generate_main_entry_point(schema_data: dict) -> str:
    """Generate the main dfc_linkml_connector.rb entry point."""
    class_names = sorted(schema_data.get('classes', {}).keys())
    requires = []
    for class_name in class_names:
        file_name = to_file_name(to_ruby_class_name(class_name))
        requires.append(f"require_relative 'connector/{file_name}'")

    requires_str = '\n'.join(requires)
    version = schema_data.get('version', '0.1.0')

    return f'''# frozen_string_literal: true

require 'json'
require 'singleton'

require_relative 'semantic_object'
require_relative 'connector/vocabulary_loader'
require_relative 'connector/json_ld_serializer'
require_relative 'connector/dfc_linkml_connector'

{requires_str}

module DfcLinkmlConnector
  VERSION = \'{version}\'
end
'''


def generate_gemspec(schema_data: dict, gem_name: str) -> str:
    version = schema_data.get('version', '0.1.0')
    description = schema_data.get('description', 'DFC LinkML Connector')
    return f'''Gem::Specification.new do |spec|
  spec.name          = \'{gem_name}\'
  spec.version       = \'{version}\'
  spec.authors       = ["Data Food Consortium"]
  spec.email         = ["hello@fooddatacollaboration.org.uk"]
  spec.summary       = \'{description}\'
  spec.description   = \'Ruby semantic object connector for the Data Food Consortium (DFC) standard.\'
  spec.homepage      = "https://github.com/Food-Data-Collaboration/DFC-LinkML"
  spec.license       = "AGPL-3.0"

  spec.files = Dir["lib/**/*.rb"] + Dir["vocabularies/**/*.jsonld"]
  spec.require_paths = ["lib"]

  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata = {{
    "rubygems_mfa_required" => "true"
  }}
end
'''


def generate_gemfile(gem_name: str) -> str:
    return f'''source 'https://rubygems.org'

gemspec
'''


def generate_readme(schema_data: dict, gem_name: str) -> str:
    class_count = len(schema_data.get('classes', {}))
    slot_count = len(schema_data.get('slots', {}))
    enum_count = len(schema_data.get('enums', {}))
    version = schema_data.get('version', '0.1.0')

    return f'''# {gem_name}

Ruby semantic object connector for the Data Food Consortium (DFC) standard.
Generated from LinkML schema v{version}.

Mimics the interface of [datafoodconsortium/connector-ruby](https://github.com/datafoodconsortium/connector-ruby)
but with full class and property coverage from the LinkML schema.

## Schema Overview

- **Classes**: {class_count}
- **Slots/Properties**: {slot_count}
- **Enumerations**: {enum_count}

## Installation

```ruby
gem '{gem_name}'
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
'''


def main():
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

    print(f"Loading schema: {schema_path}", file=sys.stderr)
    schema_data = parse_schema(schema_path)

    gem_name = "dfc-linkml-connector"
    output_dir = Path("ruby-gem")

    if output_dir.exists():
        import shutil
        shutil.rmtree(output_dir)

    output_dir.mkdir()
    (output_dir / 'lib').mkdir()
    (output_dir / 'lib' / 'connector').mkdir()
    (output_dir / 'vocabularies').mkdir()

    print(f"Generating gem: {gem_name}", file=sys.stderr)
    print(f"Classes: {len(schema_data['classes'])}", file=sys.stderr)
    print(f"Slots: {len(schema_data['slots'])}", file=sys.stderr)
    print(f"Enums: {len(schema_data['enums'])}", file=sys.stderr)

    print("\nGenerating core files...", file=sys.stderr)
    (output_dir / 'Gemfile').write_text(generate_gemfile(gem_name))
    print("  - Gemfile", file=sys.stderr)

    (output_dir / f'{gem_name}.gemspec').write_text(generate_gemspec(schema_data, gem_name))
    print(f"  - {gem_name}.gemspec", file=sys.stderr)

    (output_dir / 'README.md').write_text(generate_readme(schema_data, gem_name))
    print("  - README.md", file=sys.stderr)

    (output_dir / 'LICENSE').write_text('AGPL-3.0 License\n')
    print("  - LICENSE", file=sys.stderr)

    (output_dir / '.gitignore').write_text('*.gem\n.bundle/\npkg/\n')
    print("  - .gitignore", file=sys.stderr)

    (output_dir / 'Rakefile').write_text('require "bundler/gem_tasks"\ntask default: :spec\n')
    print("  - Rakefile", file=sys.stderr)

    print("\nGenerating library files...", file=sys.stderr)

    (output_dir / 'lib' / 'semantic_object.rb').write_text(generate_semantic_object_base())
    print("  - lib/semantic_object.rb", file=sys.stderr)

    (output_dir / 'lib' / 'connector' / 'json_ld_serializer.rb').write_text(generate_json_ld_serializer())
    print("  - lib/connector/json_ld_serializer.rb", file=sys.stderr)

    (output_dir / 'lib' / 'connector' / 'vocabulary_loader.rb').write_text(generate_vocabulary_loader(schema_data))
    print("  - lib/connector/vocabulary_loader.rb", file=sys.stderr)

    (output_dir / 'lib' / 'connector' / 'dfc_linkml_connector.rb').write_text(generate_connector_class(schema_data))
    print("  - lib/connector/dfc_linkml_connector.rb", file=sys.stderr)

    (output_dir / 'lib' / 'dfc_linkml_connector.rb').write_text(generate_main_entry_point(schema_data))
    print("  - lib/dfc_linkml_connector.rb", file=sys.stderr)

    print("\nGenerating vocabulary files...", file=sys.stderr)
    vocab_count = 0
    for enum_name, enum_data in schema_data.get('enums', {}).items():
        content = generate_vocabulary_file(enum_name, enum_data)
        file_name = to_snake_case(enum_name) + '.jsonld'
        (output_dir / 'vocabularies' / file_name).write_text(content)
        vocab_count += 1
    print(f"  - {vocab_count} vocabulary files", file=sys.stderr)

    print("\nGenerating model classes...", file=sys.stderr)
    model_count = 0
    for class_name, class_data in schema_data.get('classes', {}).items():
        model_code = generate_semantic_model(class_name, class_data, schema_data)
        ruby_name = to_ruby_class_name(class_name)
        file_name = to_file_name(ruby_name)
        (output_dir / 'lib' / 'connector' / f'{file_name}.rb').write_text(model_code)
        model_count += 1
    print(f"  - {model_count} model files", file=sys.stderr)

    print(f"\nGem generated in: {output_dir}/", file=sys.stderr)
    print(f"To build: cd {output_dir} && gem build {gem_name}.gemspec", file=sys.stderr)


if __name__ == '__main__':
    main()
