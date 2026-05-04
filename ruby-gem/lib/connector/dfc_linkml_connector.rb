# frozen_string_literal: true

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

  def facet
    @other_vocabularies["Facet"] || @vocab_loader.vocabulary("Facet")
  end

  def product_type
    @other_vocabularies["ProductType"] || @vocab_loader.vocabulary("ProductType")
  end

  def measure
    @other_vocabularies["Measure"] || @vocab_loader.vocabulary("Measure")
  end

  def scope
    @other_vocabularies["Scope"] || @vocab_loader.vocabulary("Scope")
  end

  def vocabulary_term
    @other_vocabularies["VocabularyTerm"] || @vocab_loader.vocabulary("VocabularyTerm")
  end

  private

  def _build_nested_hash(concepts)
    result = {}
    concepts.each do |key, concept|
      parts = key.split(/[_\s]+/)
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
