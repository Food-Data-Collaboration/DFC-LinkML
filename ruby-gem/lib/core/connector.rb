# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'
require_relative 'vocabulary_loader'
require_relative 'json_ld_serializer'
require_relative 'semantic_object'

module DfcLinkmlConnector
  module Core
    # Main connector for DFC data interchange.
    # Instantiate with specific ontology/taxonomy versions.
    #
    #   connector = Connector.new(ontology_version: "2.0.0", taxonomy_version: "2.0.0")
    #   connector.import(json_ld_string)
    #   connector.export(some_object)
    class Connector
      ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology".freeze
      TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies".freeze

      class << self
        def default_context_url
          @default_context_url ||= "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json"
        end

        def default_context_url=(url)
          @default_context_url = url
        end
      end

      attr_reader :ontology_version, :taxonomy_version, :vocab_loader

      def initialize(ontology_version: "2.0.0", taxonomy_version: "2.0.0")
        @ontology_version = ontology_version
        @taxonomy_version = taxonomy_version
        @vocab_loader = VocabularyLoader.new(taxonomy_version: taxonomy_version)
        @context = nil
        @facets = {}
        @measures = {}
        @product_types = {}
        @other_vocabularies = {}
      end

      def context_url
        "#{ONTOLOGY_BASE_URL}/v#{@ontology_version}/context/context_#{@ontology_version}.json"
      end

      def context
        @context ||= _fetch_context
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

      def load_facets_from_url
        load_facets(_fetch_taxonomy_json("facets"))
      end

      def load_measures_from_url
        load_measures(_fetch_taxonomy_json("measures"))
      end

      def load_product_types_from_url
        load_product_types(_fetch_taxonomy_json("productTypes"))
      end

      def export(*objects)
        JsonLdSerializer.new(context).serialize(*objects)
      end

      # Import JSON-LD data and return SemanticObject instances.
      # Resolves @id references within the same document (shallow).
      def import(json_ld_data)
        data = json_ld_data.is_a?(String) ? JSON.parse(json_ld_data) : json_ld_data

        entries = data.is_a?(Array) ? data : (data["@graph"] || [data])

        objects_by_id = {}
        instances = []

        entries.each do |entry|
          semantic_id = entry["@id"]
          semantic_type = entry["@type"]
          next unless semantic_id && semantic_type

          klass = SemanticObject.type_registry[semantic_type]
          next unless klass

          obj = klass.new(semantic_id)
          objects_by_id[semantic_id] = obj
          instances << obj
        end

        entries.each do |entry|
          semantic_id = entry["@id"]
          obj = objects_by_id[semantic_id]
          next unless obj

          entry.each do |key, value|
            next if key.start_with?("@")
            prop_name = _predicate_to_prop_name(key)
            next unless obj.respond_to?(:"#{prop_name}=")

            if value.is_a?(Array)
              resolved = value.map do |v|
                v.is_a?(String) && v.start_with?("http", "/") ? (objects_by_id[v] || v) : v
              end
              obj.send(:"#{prop_name}=", resolved)
            elsif value.is_a?(String) && (value.start_with?("http") || value.start_with?("/"))
              obj.send(:"#{prop_name}=", objects_by_id[value] || value)
            else
              obj.send(:"#{prop_name}=", value)
            end
          end
        end

        instances.length == 1 ? instances.first : instances
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

      def _fetch_context
        uri = URI(context_url)
        response = Net::HTTP.get_response(uri)
        raise "Failed to fetch context from #{context_url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        JSON.parse(response.body)
      rescue => e
        raise "Failed to load JSON-LD context: #{e.message}"
      end

      def _fetch_taxonomy_json(name)
        url = "#{TAXONOMY_BASE_URL}/v#{@taxonomy_version}/#{name}.json"
        uri = URI(url)
        response = Net::HTTP.get_response(uri)
        raise "Failed to fetch taxonomy from #{url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        JSON.parse(response.body)
      end

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

      def _predicate_to_prop_name(predicate)
        name = predicate.gsub(/^dfc-b:/, "")
        if name.start_with?("has")
          name = name[3..-1]
        end
        name = name.gsub(/([A-Z])/, "_\\1").downcase
        name.sub!(/^_/, "")
        name
      end
    end
  end
end
