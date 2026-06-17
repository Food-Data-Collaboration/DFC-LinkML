#!/usr/bin/env ruby
# frozen_string_literal: true

# Reads a JSON spec from stdin and exports the described objects as JSON-LD.
# Uses local source to avoid gem installation path issues.

$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), '..', '..', '..', '..', 'ruby-gem', 'lib'))

require 'json'
require 'dfc_linkml_connector'

spec = JSON.parse(STDIN.read)

connector = DfcLinkmlConnector::Core::Connector.new

vocab_base = File.join(File.dirname(__FILE__), '..', '..', '..', '..', 'ruby-gem', 'vocabularies')
connector.load_facets(JSON.parse(File.read(File.join(vocab_base, 'facet.jsonld')))) rescue nil
connector.load_measures(JSON.parse(File.read(File.join(vocab_base, 'measure.jsonld')))) rescue nil
connector.load_product_types(JSON.parse(File.read(File.join(vocab_base, 'product_type.jsonld')))) rescue nil

instances = spec["objects"].map do |obj|
  klass = DfcLinkmlConnector::Models.const_get(obj["type"])
  params = (obj["params"] || {}).transform_keys(&:to_sym)
  klass.new(obj["semanticId"], **params)
end

if instances.length == 1
  result = connector.export(instances.first)
else
  result = connector.export(*instances)
end

puts JSON.generate(result)
