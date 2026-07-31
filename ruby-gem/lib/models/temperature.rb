# frozen_string_literal: true

# Class from DFC Business Ontology: #Temperature
require_relative '../core/semantic_object'
require_relative 'quantitative_value'


module DfcLinkmlConnector
  module Models
    class Temperature < QuantitativeValue
      SEMANTIC_TYPE = "dfc-b:Temperature".freeze

      # @return [String]
      attr_accessor :is_temperature_of

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil, isTemperatureOf: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil, isTemperatureOf: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, value: value, unit: unit)
        @is_temperature_of = isTemperatureOf
        self.semanticType = "dfc-b:Temperature"
        registerSemanticProperty("dfc-b:Temperature:is_temperature_of", &method("is_temperature_of")).valueSetter = method("is_temperature_of=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
