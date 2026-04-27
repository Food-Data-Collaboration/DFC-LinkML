# frozen_string_literal: true

require "singleton"
require "ostruct"

module DFCLinkMLConnector
  module Connector
    class Connector
      include Singleton

      DFC_CONTEXT_URL = "http://static.datafoodconsortium.org/ontologies/context.json"

      attr_accessor :context

      def initialize
        @facets = nil
        @measures = nil
        @product_types = nil
        @context = DFC_CONTEXT_URL
      end

      def instance
        self
      end

      def loadFacets(json)
        @facets = build_vocabulary(json, "FACETS")
      end

      def loadMeasures(json)
        @measures = build_vocabulary(json, "MEASURES")
      end

      def loadProductTypes(json)
        @product_types = build_vocabulary(json, "PRODUCT_TYPES")
      end

      def FACETS
        @facets
      end

      def MEASURES
        @measures
      end

      def PRODUCT_TYPES
        @product_types
      end

      def export(*objects)
        graph = objects.map { |obj| obj.respond_to?(:to_semantic) ? obj.to_semantic : obj }

        if graph.length == 1
          result = graph.first.dup
          result["@context"] = @context
          result
        else
          { "@context" => @context, "@graph" => graph }
        end
      end

      private

      def build_vocabulary(json, name)
        return nil unless json.is_a?(Hash)

        vocab = OpenStruct.new
        return vocab unless json["@graph"]

        json["@graph"].each do |item|
          next unless item["@type"] == "skos:Concept"

          id = item["@id"] || ""
          segments = id.split(":").last.to_s.split("/").reject(&:empty?)
          next if segments.empty?

          category = segments[0]
          value = segments[1] || segments.last

          container = vocab
          category.to_s.split("_").each do |part|
            unless container.respond_to?(part.to_sym)
              container.define_singleton_method(part.to_sym) { OpenStruct.new }
              container.define_singleton_method("#{part}=".to_sym) { |v| @inner = v }
            end
            container = container.send(part.to_sym)
          end

          container.define_singleton_method(value.to_sym) { item }
        end

        vocab
      end
    end
  end
end