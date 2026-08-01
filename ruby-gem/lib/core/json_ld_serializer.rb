# frozen_string_literal: true

require 'json'
require 'json/ld'

module DfcLinkmlConnector
  module Core
    # Serializes DFC semantic objects to JSON-LD.
    class JsonLdSerializer
      def initialize(context = nil, context_url = nil)
        @context = context
        @context_url = context_url
      end

      # Returns the JSON-LD document as a Hash with CURIE predicates
      # (uncompacted). Single objects are returned as-is; multiple objects
      # are wrapped in an @graph.
      def serialize(*objects)
        if objects.length == 1
          return _serialize_object(objects.first)
        end

        {
          "@context" => _context_iri,
          "@graph" => objects.map { |obj| _serialize_object(obj) },
        }
      end

      # Returns a compacted JSON-LD JSON string using the official context.
      # Falls back to the plain serialization when no context is available.
      def to_json(*objects)
        doc = serialize(*objects)
        inner = _inner_context
        unless inner.nil?
          expanded = JSON::LD::API.expand(doc.merge("@context" => inner))
          doc = JSON::LD::API.compact(expanded, inner)
          doc["@context"] = _context_iri
        end
        JSON.pretty_generate(doc)
      end

      private

      def _context_iri
        @context_url || Connector.default_context_url
      end

      def _inner_context
        return nil if @context.nil?
        @context.is_a?(Hash) && @context.key?("@context") ? @context["@context"] : @context
      end

      def _serialize_object(obj)
        result = {
          "@id" => obj.semanticId,
          "@type" => obj.semanticType,
        }

        obj.instance_variable_get(:@semanticProperties).each do |predicate, prop|
          value = prop.getter.call
          next if value.nil?

          if value.is_a?(Array)
            next if value.empty?
            if value.first.is_a?(SemanticObject)
              result[predicate] = value.map { |v| v.semanticId }
            else
              result[predicate] = value
            end
          elsif value.is_a?(SemanticObject)
            result[predicate] = value.semanticId
          elsif value.is_a?(Numeric)
            result[predicate] = value
          else
            result[predicate] = value.to_s
          end
        end

        result
      end
    end
  end
end
