# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'

module DfcLinkmlConnector
  module Core
    # Loads DFC SKOS vocabularies from JSON-LD files.
    # Supports fetching from versioned w3id URLs or loading local data.
    class VocabularyLoader
      TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies".freeze
      BUNDLED_DIR = File.expand_path("../../vocabularies", __dir__).freeze
      BUNDLED_FILES = {
        "Facet" => "facet.jsonld",
        "Measure" => "measure.jsonld",
        "ProductType" => "product_type.jsonld",
        "Scope" => "scope.jsonld",
        "VocabularyTerm" => "vocabulary_term.jsonld",
      }.freeze
      # Maps the taxonomy URL file name to the internal vocabulary key.
      # Keys are plural/lowercased URL segments (e.g. "facets") to match TS
      # VocabularyLoader.URL_TO_KEY and the w3id taxonomy URLs.
      URL_TO_KEY = {
        "facets" => "Facet",
        "measures" => "Measure",
        "producttypes" => "ProductType",
        "scopes" => "Scope",
        "vocabularyterms" => "VocabularyTerm",
      }.freeze

      def initialize(taxonomy_version: "2.0.0", ontology_version: "2.0.0")
        @taxonomy_version = taxonomy_version
        @ontology_version = ontology_version
        @vocabularies = {}
      end

      def load_bundled(name)
        file = BUNDLED_FILES[name]
        return self unless file
        path = File.join(BUNDLED_DIR, file)
        return self unless File.exist?(path)
        load(name, JSON.parse(File.read(path)))
      end

      def load(name, json_data)
        concepts = {}
        json_data.fetch("@graph", []).each do |entry|
          types = entry["@type"]
          types = [types] unless types.is_a?(Array)
          is_concept = types&.any? { |t| t == "skos:Concept" || t == "http://www.w3.org/2004/02/skos/core#Concept" }
          next unless is_concept
          notation = extract_concept_key(entry)
          next unless notation
          concepts[notation] = entry
        end
        @vocabularies[name] = concepts
        self
      end

      private

      def extract_concept_key(entry)
        candidates = ["skos:notation", "http://www.w3.org/2004/02/skos/core#notation", "skos:prefLabel", "http://www.w3.org/2004/02/skos/core#prefLabel"]
        candidates.each do |field|
          value = entry[field]
          next if value.nil?
          return value if value.is_a?(String)
          if value.is_a?(Array)
            value.each do |item|
              return item if item.is_a?(String)
              if item.is_a?(Hash) && item["@value"].is_a?(String)
                return item["@value"]
              end
            end
          end
        end
        nil
      end

      public

      def load_from_url(name)
        url = "#{TAXONOMY_BASE_URL}/v#{@taxonomy_version}/#{name}.json"
        uri = URI(url)
        request = Net::HTTP::Get.new(uri)
        request["dfc-version"] = @ontology_version
        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") { |http| http.request(request) }
        raise "Failed to fetch taxonomy from #{url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        json_data = JSON.parse(response.body)
        key = URL_TO_KEY.fetch(name.downcase, name)
        load(key, json_data)
      end

      def vocabulary(name)
        @vocabularies[name] || {}
      end

      def facet(key = nil)
        vocab = vocabulary("Facet")
        key ? vocab[key] : vocab
      end

      def measure(key = nil)
        vocab = vocabulary("Measure")
        key ? vocab[key] : vocab
      end

      def product_type(key = nil)
        vocab = vocabulary("ProductType")
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
