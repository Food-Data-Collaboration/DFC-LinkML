# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedTransformation
require_relative '../core/semantic_object'
require_relative 'transformation'


module DfcLinkmlConnector
  module Models
    class AsPlannedTransformation < Transformation
      SEMANTIC_TYPE = "dfc-b:AsPlannedTransformation".freeze

      # @return [String]
      attr_accessor :input

      # @return [String]
      attr_accessor :output

      # @return [String]
      attr_accessor :transformation_type

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, input: nil, output: nil, transformationType: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, input: nil, output: nil, transformationType: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @input = input
        @output = output
        @transformation_type = transformationType
        self.semanticType = "dfc-b:AsPlannedTransformation"
        registerSemanticProperty("dfc-b:AsPlannedTransformation:has_input", &method("input")).valueSetter = method("input=")
        registerSemanticProperty("dfc-b:AsPlannedTransformation:has_output", &method("output")).valueSetter = method("output=")
        registerSemanticProperty("dfc-b:AsPlannedTransformation:has_transformation_type", &method("transformation_type")).valueSetter = method("transformation_type=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
