# frozen_string_literal: true

require 'json'

module DfcLinkmlConnector
  module Core
    # Serializes DFC semantic objects to JSON-LD.
    class JsonLdSerializer
      def initialize(context = nil)
        @context = context
      end

      def serialize(*objects)
        result = {
          "@context" => @context || Connector.default_context_url,
        }

        if objects.length == 1
          obj = objects.first
          return _serialize_object(obj)
        end

        graph = []
        objects.each do |obj|
          graph << _serialize_object(obj)
        end
        result["@graph"] = graph
        result
      end

      def to_json(*objects)
        JSON.pretty_generate(serialize(*objects))
      end

      private

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
