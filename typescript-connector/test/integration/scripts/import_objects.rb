#!/usr/bin/env ruby
# frozen_string_literal: true

# Reads JSON-LD from stdin, imports it, and prints the objects as JSON.
#
# Usage: cat data.jsonld | ruby import_objects.rb

require 'json'
require 'dfc_linkml_connector'

jsonld = STDIN.read

connector = DfcLinkmlConnector::Core::Connector.new

vocab_base = File.join(File.dirname(__FILE__), '..', '..', '..', '..', 'ruby-gem', 'vocabularies')
connector.load_facets(JSON.parse(File.read(File.join(vocab_base, 'facet.jsonld')))) rescue nil
connector.load_measures(JSON.parse(File.read(File.join(vocab_base, 'measure.jsonld')))) rescue nil
connector.load_product_types(JSON.parse(File.read(File.join(vocab_base, 'product_type.jsonld')))) rescue nil

result = connector.import(jsonld)

output = if result.is_a?(Array)
  result.map { |obj| { semanticId: obj.semanticId, semanticType: obj.semanticType } }
else
  { semanticId: result.semanticId, semanticType: result.semanticType }
end

puts JSON.generate(output)
