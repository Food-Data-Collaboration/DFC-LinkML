#!/usr/bin/env ruby
# frozen_string_literal: true

# Shell-out script: creates DFC objects and exports them as JSON-LD
# Usage: ruby export.rb <object_type> <semantic_id> [key=value ...]
#
# Example:
#   ruby export.rb SuppliedProduct http://example.com/tomato name=Tomato description="Fresh tomato"
#
# For multi-object export, pass --graph and repeat:
#   ruby export.rb --graph Organization http://example.com/org1 name=Org1 Organization http://example.com/org2 name=Org2

require 'json'
require 'dfc_linkml_connector'

def parse_args(args)
  objects = []
  current = nil

  args.each do |arg|
    if arg.start_with?("--")
      # flags
    elsif arg.include?("=")
      key, value = arg.split("=", 2)
      current[:params][key] = value
    elsif current.nil?
      current = { type: arg, semantic_id: nil, params: {} }
    elsif current[:semantic_id].nil?
      current[:semantic_id] = arg
    else
      objects << current
      current = { type: arg, semantic_id: nil, params: {} }
    end
  end
  objects << current if current
  objects
end

connector = DfcLinkmlConnector::Core::Connector.new

# Load local vocabularies
vocab_base = File.join(File.dirname(__FILE__), '..', '..', '..', '..', 'ruby-gem', 'vocabularies')
if File.exist?(vocab_base)
  connector.load_facets(JSON.parse(File.read(File.join(vocab_base, 'facet.jsonld'))))
  connector.load_measures(JSON.parse(File.read(File.join(vocab_base, 'measure.jsonld'))))
  connector.load_product_types(JSON.parse(File.read(File.join(vocab_base, 'product_type.jsonld'))))
end

objects = parse_args(ARGV)

instances = objects.map do |obj|
  klass = DfcLinkmlConnector::Models.const_get(obj[:type])
  params = obj[:params].transform_keys(&:to_sym)
  klass.new(obj[:semantic_id], **params)
end

if instances.length == 1
  result = connector.export(instances.first)
else
  result = connector.export(*instances)
end

puts JSON.generate(result)
