# frozen_string_literal: true

# Class from DFC Business Ontology: #VariantCaracteristic
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class VariantCaracteristic < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:VariantCaracteristic".freeze

      # @return [ProductOption]
      attr_accessor :product_option

      # @return [ProductOptionValue]
      attr_accessor :product_option_value

      # @param semanticId [String]
      # @param productOption: nil, productOptionValue: nil
      def initialize(semanticId, productOption: nil, productOptionValue: nil)
        super(semanticId)
        @product_option = productOption
        @product_option_value = productOptionValue
        self.semanticType = "dfc-b:VariantCaracteristic"
        registerSemanticProperty("dfc-b:VariantCaracteristic:hasProductOption", &method("product_option")).valueSetter = method("product_option=")
        registerSemanticProperty("dfc-b:VariantCaracteristic:hasProductOptionValue", &method("product_option_value")).valueSetter = method("product_option_value=")
      end

    end
  end
end
