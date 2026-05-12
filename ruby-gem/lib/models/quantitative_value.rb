# frozen_string_literal: true

# Class from DFC Business Ontology: #QuantitativeValue
require_relative 'semantic_object'
require_relative 'represented_thing'


module DfcLinkmlConnector
  module Models
    class QuantitativeValue < Core::RepresentedThing
      SEMANTIC_TYPE = "dfc-b:QuantitativeValue".freeze

      # @return [String]
      attr_accessor :unit

      # @return [Float]
      attr_accessor :max_value

      # @return [Float]
      attr_accessor :min_value

      # @return [String]
      attr_accessor :value

      # @param semanticId [String]
      # @param unit: nil, maxValue: nil, minValue: nil, value: nil
      def initialize(semanticId, unit: nil, maxValue: nil, minValue: nil, value: nil)
        super(semanticId)
        @unit = unit
        @max_value = maxValue
        @min_value = minValue
        @value = value
        self.semanticType = "dfc-b:QuantitativeValue"
        registerSemanticProperty("dfc-b:QuantitativeValue:hasUnit", &method("unit")).valueSetter = method("unit=")
        registerSemanticProperty("dfc-b:QuantitativeValue:maxValue", &method("max_value")).valueSetter = method("max_value=")
        registerSemanticProperty("dfc-b:QuantitativeValue:minValue", &method("min_value")).valueSetter = method("min_value=")
        registerSemanticProperty("dfc-b:QuantitativeValue:value", &method("value")).valueSetter = method("value=")
      end

    end
  end
end
