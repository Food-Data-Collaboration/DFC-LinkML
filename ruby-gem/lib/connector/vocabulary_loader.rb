# frozen_string_literal: true

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

  def facet
    vocabulary("Facet")
  end

  def product_type
    vocabulary("ProductType")
  end

  def measure
    vocabulary("Measure")
  end

  def scope
    vocabulary("Scope")
  end

  def vocabulary_term
    vocabulary("VocabularyTerm")
  end

end
