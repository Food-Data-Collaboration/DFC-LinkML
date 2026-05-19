# frozen_string_literal: true

# Class from DFC Business Ontology: #AllergenCharacteristic
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class AllergenCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:AllergenCharacteristic".freeze

      # @return [String]
      attr_accessor :allergen_dimension

      # @param semanticId [String]
      # @param allergenDimension: nil
      def initialize(semanticId, allergenDimension: nil)
        super(semanticId)
        @allergen_dimension = allergenDimension
        self.semanticType = "dfc-b:AllergenCharacteristic"
        registerSemanticProperty("dfc-b:AllergenCharacteristic:hasAllergenDimension", &method("allergen_dimension")).valueSetter = method("allergen_dimension=")
      end

    end
  end
end
