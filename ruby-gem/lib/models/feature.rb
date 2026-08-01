# frozen_string_literal: true

# Class from DFC Business Ontology: #Feature
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Feature < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Feature".freeze

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

      # @return [Geometry]
      attr_accessor :geometry

      # @return [Array<Properties>]
      attr_accessor :properties

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, geometry: nil, properties: []
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, geometry: nil, properties: [])
        super(semanticId)
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @geometry = geometry
        @properties = properties
        self.semanticType = "dfc-b:Feature"
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("https://purl.org/geojson/vocab#geometry", &method("geometry")).valueSetter = method("geometry=")
        registerSemanticProperty("https://purl.org/geojson/vocab#properties", &method("properties")).valueSetter = method("properties=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
