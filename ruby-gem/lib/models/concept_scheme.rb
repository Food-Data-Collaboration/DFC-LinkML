# frozen_string_literal: true

# Class from DFC Business Ontology: #ConceptScheme
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class ConceptScheme < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:ConceptScheme".freeze

      # @return [String]
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:ConceptScheme"
        registerSemanticProperty("dfc-b:ConceptScheme:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:ConceptScheme:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:ConceptScheme:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:ConceptScheme:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:ConceptScheme:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
