# frozen_string_literal: true

# Class from DFC Business Ontology: #Platform
require_relative '../core/semantic_object'
require_relative 'ditributed_representation'


module DfcLinkmlConnector
  module Models
    class Platform < DitributedRepresentation
      SEMANTIC_TYPE = "dfc-b:Platform".freeze

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)

        self.semanticType = "dfc-b:Platform"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
