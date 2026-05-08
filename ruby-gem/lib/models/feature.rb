# frozen_string_literal: true

# Class from DFC Business Ontology: #Feature
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class Feature < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Feature".freeze

      # @return [Feature]
      attr_accessor :geo_json_feature

      # @param semanticId [String]
      # @param geoJsonFeature: nil
      def initialize(semanticId, geoJsonFeature: nil)
        super(semanticId)
        @geo_json_feature = geoJsonFeature
        self.semanticType = "dfc-b:Feature"
        registerSemanticProperty("dfc-b:Feature:hasGeoJsonFeature", &method("geo_json_feature")).valueSetter = method("geo_json_feature=")
      end

    end
  end
end
