# frozen_string_literal: true

# Class from DFC Business Ontology: #LabellingCharacteristic
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class LabellingCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:LabellingCharacteristic".freeze

      # @return [String]
      attr_accessor :labelling_dimension

      # @param semanticId [String]
      # @param labellingDimension: nil
      def initialize(semanticId, labellingDimension: nil)
        super(semanticId)
        @labelling_dimension = labellingDimension
        self.semanticType = "dfc-b:LabellingCharacteristic"
        registerSemanticProperty("dfc-b:LabellingCharacteristic:hasLabellingDimension", &method("labelling_dimension")).valueSetter = method("labelling_dimension=")
      end

    end
  end
end
