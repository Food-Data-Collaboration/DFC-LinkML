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
  },
  'dfc-b:OrderLine' => {
    'quantity' => :quantity=,
    'description' => :description=,
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
  # Pre-create all instances (empty) so $ref params can link to objects.
  instances = spec['objects'].map do |obj|
    type = obj['type'].sub(%r{\Adfc-b:}, '')
    klass = DataFoodConsortium::Connector.const_get(type)
    klass.new(obj['semanticId'])
  end
  by_id = {}
  instances.zip(spec['objects']).each do |inst, obj|
    by_id[obj['semanticId']] = inst
  end
  instances.zip(spec['objects']).each do |inst, obj|
    (obj['params'] || {}).each do |canonical, value|
      method = PARAM_METHODS.dig(obj['type'], canonical)
      next unless method
      resolved = value.is_a?(Hash) && value['$ref'] ? by_id[value['$ref']] : value
      if method.to_s.end_with?('=')
        resolved = value.is_a?(Hash) && value['$ref'] ? by_id[value['$ref']] : value
        if method == :lines=
          inst.lines = [resolved].flatten
        else
          inst.public_send(method, resolved)
        end
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
