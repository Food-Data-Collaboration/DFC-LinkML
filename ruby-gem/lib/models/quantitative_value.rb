# frozen_string_literal: true

# Class from DFC Business Ontology: #QuantitativeValue
require_relative '../core/semantic_object'
require_relative 'represented_thing'


module DfcLinkmlConnector
  module Models
    class QuantitativeValue < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:QuantitativeValue".freeze

      # @return [Float]
      attr_accessor :value

      # @return [String]
      attr_accessor :unit

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @value = value
        @unit = unit
        self.semanticType = "dfc-b:QuantitativeValue"
        registerSemanticProperty("dfc-b:value", &method("value")).valueSetter = method("value=")
        registerSemanticProperty("dfc-b:hasUnit", &method("unit")).valueSetter = method("unit=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
