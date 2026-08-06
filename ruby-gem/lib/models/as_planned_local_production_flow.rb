# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedLocalProductionFlow
require_relative '../core/semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedLocalProductionFlow < ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedLocalProductionFlow".freeze

      # @param semanticId [String]
      # @param quantity: nil, outputOf: nil, produces: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, quantity: nil, outputOf: nil, produces: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId, quantity: quantity, outputOf: outputOf, produces: produces, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)

        self.semanticType = "dfc-b:AsPlannedLocalProductionFlow"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
