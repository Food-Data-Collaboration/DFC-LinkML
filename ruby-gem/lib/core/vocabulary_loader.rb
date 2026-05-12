# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'

module DfcLinkmlConnector
  module Core
    # Loads DFC SKOS vocabularies from JSON-LD files.
    # Supports fetching from versioned w3id URLs or loading local data.
    class VocabularyLoader
      TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies/".freeze

      def initialize(taxonomy_version: "2.0.0")
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
        url = "#{TAXONOMY_BASE_URL}v#{@taxonomy_version}/#{name.downcase}.json"
        uri = URI(url)
        response = Net::HTTP.get_response(uri)
        raise "Failed to fetch taxonomy from #{url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        json_data = JSON.parse(response.body)
        load(name, json_data)
      end

      def vocabulary(name)
        @vocabularies[name] || {}
      end

      def facet(key = nil)
        vocab = vocabulary("Facet")
        key ? vocab[key] : vocab
      end

      def product_type(key = nil)
        vocab = vocabulary("ProductType")
        key ? vocab[key] : vocab
      end

      def measure(key = nil)
        vocab = vocabulary("Measure")
        key ? vocab[key] : vocab
      end

      def scope(key = nil)
        vocab = vocabulary("Scope")
        key ? vocab[key] : vocab
      end

      def vocabulary_term(key = nil)
        vocab = vocabulary("VocabularyTerm")
        key ? vocab[key] : vocab
      end
    end
  end
end
