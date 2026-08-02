#!/usr/bin/env ruby
# frozen_string_literal: true

# Adapter for the DFC-LinkML Ruby connector (local lib).
# Subcommands:
#   capabilities            -> JSON classes/predicates map
#   export <scenario.json>  -> JSON-LD (reads scenario from file, writes to stdout)
#   import                  -> canonical summary (reads JSON-LD from stdin)

$LOAD_PATH.unshift(File.expand_path('../../../ruby-gem/lib', __dir__))

require 'json'
require 'dfc_linkml_connector'

subcommand = ARGV[0]

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
  DfcLinkmlConnector::Core::SemanticObject.type_registry.each do |type, klass|
    probe = klass.new('_:probe')
    classes[type] = probe.registered_predicates.sort
  end
  puts JSON.pretty_generate(name: 'our-ruby', classes: classes)
end

# Canonical scenario param name => our-connector constructor kwarg.
PARAM_MAP = {
  'dfc-b:Order' => { 'orderNumber' => :orderNumber, 'hasPart' => :part },
  'dfc-b:OrderLine' => { 'name' => :name, 'quantity' => :quantity },
  'dfc-b:SuppliedProduct' => { 'name' => :name, 'description' => :description },
  'dfc-b:Enterprise' => { 'name' => :name, 'description' => :description, 'vatNumber' => :vatNumber },
}.freeze

def export_scenario(path)
  spec = JSON.parse(File.read(path))
  connector = DfcLinkmlConnector::Core::Connector.new
  instances = spec['objects'].map do |obj|
    type = obj['type'].sub(%r{\Adfc-b:}, '')
    klass = DfcLinkmlConnector::Models.const_get(type)
    map = PARAM_MAP.fetch(obj['type'], {})
    params = {}
    (obj['params'] || {}).each do |canonical, value|
      kwarg = map[canonical]
      next unless kwarg
      params[kwarg] = value.is_a?(Hash) && value['$ref'] ? value['$ref'] : value
    end
    klass.new(obj['semanticId'], **params)
  end
  result = instances.length == 1 ? connector.export(instances.first) : connector.export(*instances)
  puts result
end

def import_data
  jsonld = JSON.parse(STDIN.read)
  connector = DfcLinkmlConnector::Core::Connector.new
  objects = connector.import(jsonld)
  list = [objects].flatten
  result = list.length == 1 ? connector.export(list.first) : connector.export(*list)
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
  warn "usage: our-ruby.rb {capabilities|export <scenario.json>|import}"
  exit 1
end
