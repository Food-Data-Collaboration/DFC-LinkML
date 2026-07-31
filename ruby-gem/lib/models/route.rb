# frozen_string_literal: true

# Class from DFC Business Ontology: #Route
require_relative '../core/semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Route < WhereSubject
      SEMANTIC_TYPE = "dfc-b:Route".freeze

      # @return [String]
      attr_accessor :step

      # @return [String]
      attr_accessor :use_vehicle

      # @return [Feature]
      attr_accessor :geo_json_feature

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, step: nil, useVehicle: nil, geoJsonFeature: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, step: nil, useVehicle: nil, geoJsonFeature: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @step = step
        @use_vehicle = useVehicle
        @geo_json_feature = geoJsonFeature
        self.semanticType = "dfc-b:Route"
        registerSemanticProperty("dfc-b:Route:has_step", &method("step")).valueSetter = method("step=")
        registerSemanticProperty("dfc-b:Route:use_vehicle", &method("use_vehicle")).valueSetter = method("use_vehicle=")
        registerSemanticProperty("dfc-b:Route:has_geo_json_feature", &method("geo_json_feature")).valueSetter = method("geo_json_feature=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
