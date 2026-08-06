# frozen_string_literal: true

# Class from DFC Business Ontology: #AsRealizedTransformation
require_relative '../core/semantic_object'
require_relative 'transformation'


module DfcLinkmlConnector
  module Models
    class AsRealizedTransformation < Transformation
      SEMANTIC_TYPE = "dfc-b:AsRealizedTransformation".freeze

      # @return [Float]
      attr_accessor :cost

      # @return [String]
      attr_accessor :end_date

      # @return [String]
      attr_accessor :start_date

      # @return [String]
      attr_accessor :input

      # @return [String]
      attr_accessor :output

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, cost: nil, endDate: nil, startDate: nil, input: nil, output: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, cost: nil, endDate: nil, startDate: nil, input: nil, output: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @cost = cost
        @end_date = endDate
        @start_date = startDate
        @input = input
        @output = output
        self.semanticType = "dfc-b:AsRealizedTransformation"
        registerSemanticProperty("dfc-b:cost", &method("cost")).valueSetter = method("cost=")
        registerSemanticProperty("dfc-b:endDate", &method("end_date")).valueSetter = method("end_date=")
        registerSemanticProperty("dfc-b:startDate", &method("start_date")).valueSetter = method("start_date=")
        registerSemanticProperty("dfc-b:hasInput", &method("input")).valueSetter = method("input=")
        registerSemanticProperty("dfc-b:hasOutput", &method("output")).valueSetter = method("output=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
