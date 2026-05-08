# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductOption
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class ProductOption < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:ProductOption".freeze

      # @return [String]
      attr_accessor :reference_product_option_value

      # @param semanticId [String]
      # @param referenceProductOptionValue: nil
      def initialize(semanticId, referenceProductOptionValue: nil)
        super(semanticId)
        @reference_product_option_value = referenceProductOptionValue
        self.semanticType = "dfc-b:ProductOption"
        registerSemanticProperty("dfc-b:ProductOption:hasReferenceProductOptionValue", &method("reference_product_option_value")).valueSetter = method("reference_product_option_value=")
      end

    end
  end
end
