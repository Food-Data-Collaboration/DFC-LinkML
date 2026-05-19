# frozen_string_literal: true

# Class from DFC Business Ontology: #Point
require_relative 'semantic_object'
require_relative 'geometry'


module DfcLinkmlConnector
  module Models
    class Point < Core::Geometry
      SEMANTIC_TYPE = "dfc-b:Point".freeze

      # @return [String]
      attr_accessor :coordinate_value

      # @return [String]
      attr_accessor :latitude

      # @return [String]
      attr_accessor :longitude

      # @param semanticId [String]
      # @param coordinateValue: nil, latitude: nil, longitude: nil
      def initialize(semanticId, coordinateValue: nil, latitude: nil, longitude: nil)
        super(semanticId)
        @coordinate_value = coordinateValue
        @latitude = latitude
        @longitude = longitude
        self.semanticType = "dfc-b:Point"
        registerSemanticProperty("dfc-b:Point:coordinate_value", &method("coordinate_value")).valueSetter = method("coordinate_value=")
        registerSemanticProperty("dfc-b:Point:latitude", &method("latitude")).valueSetter = method("latitude=")
        registerSemanticProperty("dfc-b:Point:longitude", &method("longitude")).valueSetter = method("longitude=")
      end

    end
  end
end
