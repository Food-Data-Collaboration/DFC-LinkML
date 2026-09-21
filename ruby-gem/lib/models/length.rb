# frozen_string_literal: true

# Class from DFC Business Ontology: #Length
require_relative '../core/semantic_object'
require_relative 'quantitative_value'


module DfcLinkmlConnector
  module Models
    class Length < QuantitativeValue
      SEMANTIC_TYPE = "dfc-b:Length".freeze

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, value: value, unit: unit)

        self.semanticType = "dfc-b:Length"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
