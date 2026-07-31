# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedProductionFlow
require_relative '../core/semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedProductionFlow < ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedProductionFlow".freeze

      # @param semanticId [String]
      # @param quantity: nil, outputOf: nil, produces: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, quantity: nil, outputOf: nil, produces: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId, quantity: quantity, outputOf: outputOf, produces: produces, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)

        self.semanticType = "dfc-b:AsPlannedProductionFlow"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
