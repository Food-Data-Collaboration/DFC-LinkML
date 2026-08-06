# frozen_string_literal: true

# Class from DFC Business Ontology: #AsRealizedConsumptionFlow
require_relative '../core/semantic_object'
require_relative 'consumption_flow'


module DfcLinkmlConnector
  module Models
    class AsRealizedConsumptionFlow < ConsumptionFlow
      SEMANTIC_TYPE = "dfc-b:AsRealizedConsumptionFlow".freeze

      # @param semanticId [String]
      # @param quantity: nil, consumes: nil, inputOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, quantity: nil, consumes: nil, inputOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId, quantity: quantity, consumes: consumes, inputOf: inputOf, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)

        self.semanticType = "dfc-b:AsRealizedConsumptionFlow"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
