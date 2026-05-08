#!/usr/bin/env python3
"""
Ruby gem generator from LinkML schema.

Generates a complete Ruby gem with namespaced semantic objects.
Architecture:
- DfcLinkmlConnector::Core::SemanticObject - base class with type registry
- DfcLinkmlConnector::Core::Connector - instantiable connector (no singleton)
- DfcLinkmlConnector::Core::JsonLdSerializer
- DfcLinkmlConnector::Core::VocabularyLoader
- DfcLinkmlConnector::Models::* - all 85 model classes

Features:
- Versioned context URLs fetched at runtime via w3id redirects
- Type registry for JSON-LD import
- Import feature (shresolve @id references within document)

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
        'ontology_version': schema.get('ontology_version', schema.get('version', '0.1.0')),
        'taxonomy_version': schema.get('taxonomy_version', schema.get('version', '0.1.0')),
        'description': schema.get('description', ''),
    }


def to_snake_case(name: str) -> str:
    """Convert CamelCase to snake_case."""
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    return name.lower()


def to_ruby_class_name(name: str) -> str:
    """Convert a LinkML class name to a valid Ruby class name."""
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
    """Convert a Ruby class name to a file name (snake_case)."""
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    return name.lower()


def ruby_property_name(slot_name: str) -> str:
    """Convert a slot name to a Ruby accessor name (snake_case)."""
    name = slot_name
    if name.startswith('has'):
        name = name[3:]
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    name = name.lower()
    if name.startswith('_'):
        name = name[1:]
    special = {
        'u_r_l': 'url',
        'v_a_tnumber': 'vat_number',
        'v_a_trate': 'vat_rate',
        'v_a_tstatus': 'vat_status',
        'enterprise_i_d': 'enterprise_id',
        'operator_i_d': 'operator_id',
    }
    return special.get(name, name)


def ruby_param_name(slot_name: str) -> str:
    """Convert a slot name to a Ruby keyword parameter name (camelCase)."""
    name = slot_name
    if name.startswith('has'):
        name = name[3:]
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    name = name.lower()
    if name.startswith('_'):
        name = name[1:]
    special = {
        'u_r_l': 'url',
        'v_a_tnumber': 'vat_number',
        'v_a_trate': 'vat_rate',
        'v_a_tstatus': 'vat_status',
        'enterprise_i_d': 'enterprise_id',
        'operator_i_d': 'operator_id',
    }
    name = special.get(name, name)
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


# ---------------------------------------------------------------------------
# File generators
# ---------------------------------------------------------------------------


def generate_semantic_object_base() -> str:
    """Generate the SemanticObject base class with type registry."""
    return '''# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'

module DfcLinkmlConnector
  module Core
    # Base class for all DFC semantic objects.
    # Maintains a type registry for JSON-LD import.
    class SemanticObject
      @type_registry = {}

      class << self
        attr_reader :type_registry

        def inherited(subclass)
          super
          if subclass.const_defined?(:SEMANTIC_TYPE)
            @type_registry[subclass::SEMANTIC_TYPE] = subclass
          end
        end

        def register_type(semantic_type)
          @type_registry[semantic_type] = self
        end
      end

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

      def to_jsonld(context = nil)
        result = {
          "@context" => context || default_context,
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

      def to_json(context = nil)
        JSON.generate(to_jsonld(context))
      end

      private

      def default_context
        Connector.default_context_url
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
  end
end
'''


def generate_vocabulary_loader(schema_data: dict) -> str:
    """Generate the VocabularyLoader class with versioned taxonomy URLs."""
    taxonomy_version = schema_data.get('taxonomy_version', '2.0.0')
    enum_names = list(schema_data.get('enums', {}).keys())

    enum_methods = ''
    for enum_name in enum_names:
        snake = to_snake_case(enum_name)
        enum_methods += f'''      def {snake}(key = nil)
        vocab = vocabulary("{enum_name}")
        key ? vocab[key] : vocab
      end

'''

    code = '''# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'

module DfcLinkmlConnector
  module Core
    # Loads DFC SKOS vocabularies from JSON-LD files.
    # Supports fetching from versioned w3id URLs or loading local data.
    class VocabularyLoader
      TAXONOMY_BASE_URL = "__TAXONOMY_BASE_URL__".freeze

      def initialize(taxonomy_version: "__TAXONOMY_VERSION__")
        @taxonomy_version = taxonomy_version
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

      def load_from_url(name)
        url = "#{TAXONOMY_BASE_URL}/#{name.downcase}.json"
        uri = URI(url)
        response = Net::HTTP.get_response(uri)
        raise "Failed to fetch taxonomy from #{url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        json_data = JSON.parse(response.body)
        load(name, json_data)
      end

      def vocabulary(name)
        @vocabularies[name] || {}
      end

ENUM_METHODS
    end
  end
end
'''

    taxonomy_base_url = f'https://w3id.org/dfc/taxonomies/v{taxonomy_version}'
    code = code.replace('__TAXONOMY_BASE_URL__', taxonomy_base_url)
    code = code.replace('__TAXONOMY_VERSION__', taxonomy_version)
    code = code.replace('ENUM_METHODS', enum_methods.rstrip())
    return code


def generate_connector_class(schema_data: dict) -> str:
    """Generate the Connector class (no singleton) with versioned context and import."""
    ontology_version = schema_data.get('ontology_version', '2.0.0')
    taxonomy_version = schema_data.get('taxonomy_version', '2.0.0')
    enum_names = list(schema_data.get('enums', {}).keys())

    context_url = f'https://w3id.org/dfc/ontology/v{ontology_version}/context/context_{ontology_version}.json'

    enum_methods = ''
    for enum_name in enum_names:
        snake = to_snake_case(enum_name)
        enum_methods += f'''      def {snake}
        @other_vocabularies["{enum_name}"] || @vocab_loader.vocabulary("{enum_name}")
      end

'''

    code = '''# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'
require_relative 'vocabulary_loader'
require_relative 'json_ld_serializer'
require_relative 'semantic_object'

module DfcLinkmlConnector
  module Core
    # Main connector for DFC data interchange.
    # Instantiate with specific ontology/taxonomy versions.
    #
    #   connector = Connector.new(ontology_version: "2.0.0", taxonomy_version: "2.0.0")
    #   connector.import(json_ld_string)
    #   connector.export(some_object)
    class Connector
      ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology".freeze
      TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies".freeze

      class << self
        def default_context_url
          @default_context_url ||= "__CONTEXT_URL__"
        end

        def default_context_url=(url)
          @default_context_url = url
        end
      end

      attr_reader :ontology_version, :taxonomy_version, :vocab_loader

      def initialize(ontology_version: "__ONTOLOGY_VERSION__", taxonomy_version: "__TAXONOMY_VERSION__")
        @ontology_version = ontology_version
        @taxonomy_version = taxonomy_version
        @vocab_loader = VocabularyLoader.new(taxonomy_version: taxonomy_version)
        @context = nil
        @facets = {}
        @measures = {}
        @product_types = {}
        @other_vocabularies = {}
      end

      def context_url
        "#{ONTOLOGY_BASE_URL}/v#{@ontology_version}/context/context_#{@ontology_version}.json"
      end

      def context
        @context ||= _fetch_context
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

      def load_facets_from_url
        load_facets(_fetch_taxonomy_json("facets"))
      end

      def load_measures_from_url
        load_measures(_fetch_taxonomy_json("measures"))
      end

      def load_product_types_from_url
        load_product_types(_fetch_taxonomy_json("productTypes"))
      end

      def export(*objects)
        JsonLdSerializer.new(context).serialize(*objects)
      end

      # Import JSON-LD data and return SemanticObject instances.
      # Resolves @id references within the same document (shallow).
      def import(json_ld_data)
        data = json_ld_data.is_a?(String) ? JSON.parse(json_ld_data) : json_ld_data

        entries = data.is_a?(Array) ? data : (data["@graph"] || [data])

        objects_by_id = {}
        instances = []

        entries.each do |entry|
          semantic_id = entry["@id"]
          semantic_type = entry["@type"]
          next unless semantic_id && semantic_type

          klass = SemanticObject.type_registry[semantic_type]
          next unless klass

          obj = klass.new(semantic_id)
          objects_by_id[semantic_id] = obj
          instances << obj
        end

        entries.each do |entry|
          semantic_id = entry["@id"]
          obj = objects_by_id[semantic_id]
          next unless obj

          entry.each do |key, value|
            next if key.start_with?("@")
            prop_name = _predicate_to_prop_name(key)
            next unless obj.respond_to?(:"#{prop_name}=")

            if value.is_a?(Array)
              resolved = value.map do |v|
                v.is_a?(String) && v.start_with?("http", "/") ? (objects_by_id[v] || v) : v
              end
              obj.send(:"#{prop_name}=", resolved)
            elsif value.is_a?(String) && (value.start_with?("http") || value.start_with?("/"))
              obj.send(:"#{prop_name}=", objects_by_id[value] || value)
            else
              obj.send(:"#{prop_name}=", value)
            end
          end
        end

        instances.length == 1 ? instances.first : instances
      end

ENUM_METHODS
      private

      def _fetch_context
        uri = URI(context_url)
        response = Net::HTTP.get_response(uri)
        raise "Failed to fetch context from #{context_url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        JSON.parse(response.body)
      rescue => e
        raise "Failed to load JSON-LD context: #{e.message}"
      end

      def _fetch_taxonomy_json(name)
        url = "#{TAXONOMY_BASE_URL}/v#{@taxonomy_version}/#{name}.json"
        uri = URI(url)
        response = Net::HTTP.get_response(uri)
        raise "Failed to fetch taxonomy from #{url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        JSON.parse(response.body)
      end

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

      def _predicate_to_prop_name(predicate)
        name = predicate.gsub(/^dfc-b:/, "")
        if name.start_with?("has")
          name = name[3..-1]
        end
        name = name.gsub(/([A-Z])/, "_\\\\1").downcase
        name.sub!(/^_/, "")
        name
      end
    end
  end
end
'''

    code = code.replace('__CONTEXT_URL__', context_url)
    code = code.replace('__ONTOLOGY_VERSION__', ontology_version)
    code = code.replace('__TAXONOMY_VERSION__', taxonomy_version)
    code = code.replace('ENUM_METHODS', enum_methods.rstrip())
    return code


def generate_json_ld_serializer() -> str:
    """Generate the JSON-LD serializer class."""
    return '''# frozen_string_literal: true

require 'json'

module DfcLinkmlConnector
  module Core
    # Serializes DFC semantic objects to JSON-LD.
    class JsonLdSerializer
      def initialize(context = nil)
        @context = context
      end

      def serialize(*objects)
        result = {
          "@context" => @context || Connector.default_context_url,
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
  end
end
'''


def generate_vocabulary_file(enum_name: str, enum_data: dict, schema_data: dict) -> str:
    """Generate a SKOS-style JSON-LD vocabulary file from an enum."""
    pv_data = enum_data.get('permissible_values', {})
    taxonomy_version = schema_data.get('taxonomy_version', '2.0.0')

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
            "dfc-v": f"http://w3id.org/dfc/taxonomies/v{taxonomy_version}/vocabulary.rdf#",
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


def generate_semantic_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    """Generate a semantic object model file wrapped in module namespace."""
    ruby_name = to_ruby_class_name(class_name)
    parent_raw = get_parent_ruby_class(class_data)
    description = class_data.get('description', '').replace("'", "'\\''")
    semantic_type = rdf_prefix_for_class(class_name)

    data_props = get_data_properties(class_name, schema_data)
    obj_props = get_object_properties(class_name, schema_data)

    parent = f"Core::{parent_raw}" if parent_raw != "SemanticObject" else "Core::SemanticObject"

    code = f'''# frozen_string_literal: true

# {description}
require_relative 'semantic_object'
'''

    if parent_raw != 'SemanticObject':
        parent_file = to_file_name(parent_raw)
        code += f"require_relative '{parent_file}'\n"

    code += f'''

module DfcLinkmlConnector
  module Models
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
            code += f'      # @return [{rtype}]\n'
            code += f'      attr_accessor :{prop_name}\n\n'
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
                code += f'      # @return [Array<{rtype}>]\n'
            else:
                code += f'      # @return [{rtype}]\n'
            code += f'      attr_accessor :{prop_name}\n\n'
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
                assignments.append(f'        @{prop_name} = {param_name}')
            else:
                all_params.append(f'{param_name}: nil')
                assignments.append(f'        @{prop_name} = {param_name}')
            registrations.append(f'        registerSemanticProperty("{semantic_type}:{slot_name}", &method("{prop_name}")).valueSetter = method("{prop_name}=")')

        params_str = ', '.join(all_params)
        assignments_str = '\n'.join(assignments)
        registrations_str = '\n'.join(registrations)

        code += f'''      # @param semanticId [String]
      # @param {params_str}
      def initialize(semanticId, {params_str})
        super(semanticId)
{assignments_str}
        self.semanticType = "{semantic_type}"
{registrations_str}
      end

'''

    code += '''    end
  end
end
'''

    return code


def generate_main_entry_point(schema_data: dict) -> str:
    """Generate the main dfc_linkml_connector.rb entry point."""
    class_names = sorted(schema_data.get('classes', {}).keys())
    requires = []
    for class_name in class_names:
        file_name = to_file_name(to_ruby_class_name(class_name))
        requires.append(f"require_relative 'models/{file_name}'")

    requires_str = '\n'.join(requires)
    version = schema_data.get('version', '0.1.0')
    ontology_version = schema_data.get('ontology_version', version)
    taxonomy_version = schema_data.get('taxonomy_version', version)

    return f'''# frozen_string_literal: true

require_relative 'core/semantic_object'
require_relative 'core/vocabulary_loader'
require_relative 'core/json_ld_serializer'
require_relative 'core/connector'

{requires_str}

module DfcLinkmlConnector
  VERSION = \'{version}\'
  ONTOLOGY_VERSION = \'{ontology_version}\'
  TAXONOMY_VERSION = \'{taxonomy_version}\'
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
puts connector.export(tomato)

# Import from JSON-LD
data = File.read("export.json")
objects = connector.import(data)
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
    (output_dir / 'lib' / 'core').mkdir()
    (output_dir / 'lib' / 'models').mkdir()
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

    (output_dir / 'lib' / 'core' / 'semantic_object.rb').write_text(generate_semantic_object_base())
    print("  - lib/core/semantic_object.rb", file=sys.stderr)

    (output_dir / 'lib' / 'core' / 'json_ld_serializer.rb').write_text(generate_json_ld_serializer())
    print("  - lib/core/json_ld_serializer.rb", file=sys.stderr)

    (output_dir / 'lib' / 'core' / 'vocabulary_loader.rb').write_text(generate_vocabulary_loader(schema_data))
    print("  - lib/core/vocabulary_loader.rb", file=sys.stderr)

    (output_dir / 'lib' / 'core' / 'connector.rb').write_text(generate_connector_class(schema_data))
    print("  - lib/core/connector.rb", file=sys.stderr)

    (output_dir / 'lib' / 'dfc_linkml_connector.rb').write_text(generate_main_entry_point(schema_data))
    print("  - lib/dfc_linkml_connector.rb", file=sys.stderr)

    print("\nGenerating vocabulary files...", file=sys.stderr)
    vocab_count = 0
    for enum_name, enum_data in schema_data.get('enums', {}).items():
        content = generate_vocabulary_file(enum_name, enum_data, schema_data)
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
        (output_dir / 'lib' / 'models' / f'{file_name}.rb').write_text(model_code)
        model_count += 1
    print(f"  - {model_count} model files", file=sys.stderr)

    print(f"\nGem generated in: {output_dir}/", file=sys.stderr)
    print(f"To build: cd {output_dir} && gem build {gem_name}.gemspec", file=sys.stderr)


if __name__ == '__main__':
    main()
