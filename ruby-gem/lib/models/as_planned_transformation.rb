# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedTransformation
require_relative 'semantic_object'
require_relative 'transformation'


module DfcLinkmlConnector
  module Models
    class AsPlannedTransformation < Core::Transformation
      SEMANTIC_TYPE = "dfc-b:AsPlannedTransformation".freeze

      # @return [String]
      attr_accessor :transformation_type

      # @param semanticId [String]
      # @param transformationType: nil
      def initialize(semanticId, transformationType: nil)
        super(semanticId)
        @transformation_type = transformationType
        self.semanticType = "dfc-b:AsPlannedTransformation"
        registerSemanticProperty("dfc-b:AsPlannedTransformation:hasTransformationType", &method("transformation_type")).valueSetter = method("transformation_type=")
      end

    end
  end
end
