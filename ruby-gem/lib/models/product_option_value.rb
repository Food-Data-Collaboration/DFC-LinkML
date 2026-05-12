# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductOptionValue
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class ProductOptionValue < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:ProductOptionValue".freeze

      # @return [String]
      attr_accessor :specific_condition

      # @param semanticId [String]
      # @param specificCondition: nil
      def initialize(semanticId, specificCondition: nil)
        super(semanticId)
        @specific_condition = specificCondition
        self.semanticType = "dfc-b:ProductOptionValue"
        registerSemanticProperty("dfc-b:ProductOptionValue:specificCondition", &method("specific_condition")).valueSetter = method("specific_condition=")
      end

    end
  end
end
