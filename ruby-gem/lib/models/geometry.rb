# frozen_string_literal: true

# Class from DFC Business Ontology: #Geometry
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Geometry < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Geometry".freeze

      # @return [String]
      attr_accessor :coordinates

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
      # @param coordinates: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, coordinates: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @coordinates = coordinates
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Geometry"
        registerSemanticProperty("dfc-b:Geometry:coordinates", &method("coordinates")).valueSetter = method("coordinates=")
        registerSemanticProperty("dfc-b:Geometry:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Geometry:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Geometry:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Geometry:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Geometry:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
