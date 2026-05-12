# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'

module DfcLinkmlConnector
  module Core
    # Base class for all DFC semantic objects.
    # Maintains a type registry for JSON-LD import.
    class SemanticObject
      @type_registry = {}

      class << self
        attr_reader :type_registry

        def inherited(subclass)
          super
          if subclass.const_defined?(:SEMANTIC_TYPE)
            @type_registry[subclass::SEMANTIC_TYPE] = subclass
          end
        end

        def register_type(semantic_type)
          @type_registry[semantic_type] = self
        end
      end

      attr_accessor :semanticId
      attr_accessor :semanticType

      def initialize(semanticId)
        @semanticId = semanticId
        @semanticType = nil
        @semanticProperties = {}
      end

      def registerSemanticProperty(predicate, &getter)
        prop = SemanticProperty.new(predicate, &getter)
        @semanticProperties[predicate] = prop
        prop
      end

      def semantic_property_value(predicate)
        prop = @semanticProperties[predicate]
        prop&.getter&.call
      end

      def to_jsonld(context = nil)
        result = {
          "@context" => context || default_context,
          "@id" => @semanticId,
          "@type" => @semanticType,
        }

        @semanticProperties.each do |predicate, prop|
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

      def to_json(context = nil)
        JSON.generate(to_jsonld(context))
      end

      private

      def default_context
        Connector.default_context_url
      end

      class SemanticProperty
        attr_accessor :predicate
        attr_accessor :getter
        attr_accessor :valueSetter

        def initialize(predicate, &getter)
          @predicate = predicate
          @getter = getter
        end
      end
    end
  end
end
