# frozen_string_literal: true

# Class from DFC Business Ontology: #Transformation
require_relative '../core/semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class Transformation < HowSubject
      SEMANTIC_TYPE = "dfc-b:Transformation".freeze

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)

        self.semanticType = "dfc-b:Transformation"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
