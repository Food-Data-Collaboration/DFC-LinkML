# frozen_string_literal: true

# Class from DFC Business Ontology: #VariantCaracteristic
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class VariantCaracteristic < WhatSubject
      SEMANTIC_TYPE = "dfc-b:VariantCaracteristic".freeze

      # @return [ProductOption]
      attr_accessor :product_option

      # @return [ProductOptionValue]
      attr_accessor :product_option_value

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, productOption: nil, productOptionValue: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, productOption: nil, productOptionValue: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @product_option = productOption
        @product_option_value = productOptionValue
        self.semanticType = "dfc-b:VariantCaracteristic"
        registerSemanticProperty("dfc-b:hasProductOption", &method("product_option")).valueSetter = method("product_option=")
        registerSemanticProperty("dfc-b:hasProductOptionValue", &method("product_option_value")).valueSetter = method("product_option_value=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
