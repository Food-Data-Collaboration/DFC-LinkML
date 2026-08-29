#!/usr/bin/env ruby
# frozen_string_literal: true

# Adapter for the official DFC Ruby connector (datafoodconsortium-connector gem).
# Subcommands:
#   capabilities            -> JSON classes/predicates map
#   export <scenario.json>  -> JSON-LD (reads scenario from file, writes to stdout)
#   import                  -> canonical summary (reads JSON-LD from stdin)

require 'json'
require 'datafoodconsortium/connector'

subcommand = ARGV[0]

# Canonical scenario param name => official-connector setter.
PARAM_METHODS = {
  'dfc-b:Order' => {
    'orderNumber' => :number=,
    'hasPart' => :lines=,
    'orderedBy' => :client=,
  },
  'dfc-b:OrderLine' => {
    'quantity' => :quantity=,
    'description' => :description=,
    'concerns' => :offer=,
  },
  'dfc-b:SuppliedProduct' => {
    'name' => :name=,
    'description' => :description=,
  },
  'dfc-b:Enterprise' => {
    'name' => :name=,
    'description' => :description=,
    'vatNumber' => :vatNumber=,
  },
  'dfc-b:Organization' => {
    'name' => :name=,
    'description' => :description=,
    'vatNumber' => :vatNumber=,
  },
  'dfc-b:CatalogItem' => {
    'sku' => :sku=,
    'references' => :product=,
    'offeredThrough' => :offers=,
  },
  'dfc-b:Offer' => {
    'name' => :name=,
    'hasPrice' => :price=,
  },
}.freeze

# Object-reference setters that must never receive a plain string/IRI.
OBJECT_REF_SETTERS = [:product=, :offer=, :client=, :price=].freeze

# Canonical scenario type => official connector class (official uses
# Enterprise, not Organization).
TYPE_CLASS = {
  'dfc-b:Organization' => 'Enterprise',
}.freeze

def normalize_refs(value)
  case value
  when Array
    value.map { |v| normalize_refs(v) }
  when Hash
    value['@id'] || value
  else
    value
  end
end

def capabilities
  classes = {}
  DataFoodConsortium::Connector.semantic_types.each do |klass|
    next unless klass.const_defined?(:SEMANTIC_TYPE)
    type = klass.const_get(:SEMANTIC_TYPE)
    predicates = begin
      probe = klass.new('_:probe')
      if probe.respond_to?(:semanticProperties)
        probe.semanticProperties.map(&:name).select { |n| n.include?(':') }.sort
      else
        []
      end
    rescue ArgumentError, NoMethodError
      []
    end
    classes[type] = predicates
  end
  puts JSON.pretty_generate(name: 'official-ruby', classes: classes)
end

def export_scenario(path)
  spec = JSON.parse(File.read(path))
  c = DataFoodConsortium::Connector::Connector.instance
  objects = spec['objects']
  # Pre-create all instances (empty) so $ref params can link to objects.
  # Official Ruby Price is an embedded value object (no semanticId), so it is
  # created on demand from its params rather than as a standalone instance.
  by_id = {}
  objects.each do |obj|
    next if obj['type'] == 'dfc-b:Price'
    type = obj['type'].sub(%r{\Adfc-b:}, '')
    type = TYPE_CLASS.fetch(obj['type'], type)
    klass = DataFoodConsortium::Connector.const_get(type)
    inst = klass.new(obj['semanticId'])
    by_id[obj['semanticId']] = inst
  end
  instances = by_id.values
  objects.each do |obj|
    inst = by_id[obj['semanticId']]
    next unless inst
    (obj['params'] || {}).each do |canonical, value|
      method = PARAM_METHODS.dig(obj['type'], canonical)
      next unless method
      if method == :price= && value.is_a?(Hash) && value['$ref']
        price_obj = objects.find { |o| o['semanticId'] == value['$ref'] }
        next unless price_obj && price_obj['type'] == 'dfc-b:Price'
        params = price_obj['params'] || {}
        # Forward all Price scalar params (value/vatRate/unit) - keeps adapter
        # future-proof if the scenario adds e.g. `value`.
        price_kwargs = {}
        price_kwargs[:value] = params['value'] if params.key?('value')
        price_kwargs[:vatRate] = params['vatRate'] if params.key?('vatRate')
        price_kwargs[:unit] = params['unit'] if params.key?('unit')
        resolved = DataFoodConsortium::Connector::Price.new(**price_kwargs)
      elsif value.is_a?(Hash) && value['$ref']
        resolved = by_id[value['$ref']]
        next unless resolved
      elsif OBJECT_REF_SETTERS.include?(method)
        next # external IRI reference, cannot be resolved to an object — expected-drop (official connector has no IRI target)
      else
        resolved = value
      end
      if method == :lines=
        inst.lines = [resolved].flatten
      elsif method == :offers=
        inst.offers = [resolved].flatten
      else
        inst.public_send(method, resolved)
      end
    end
  end
  result = instances.length == 1 ? c.export(instances.first) : c.export(*instances)
  puts result
end

def import_data
  jsonld = STDIN.read
  c = DataFoodConsortium::Connector::Connector.instance
  objects = c.import(jsonld)
  list = [objects].flatten
  result = list.length == 1 ? c.export(list.first) : c.export(*list)
  puts result
end

case subcommand
when 'capabilities'
  capabilities
when 'export'
  export_scenario(ARGV[1])
when 'import'
  import_data
else
  warn "usage: official-ruby.rb {capabilities|export <scenario.json>|import}"
  exit 1
end
