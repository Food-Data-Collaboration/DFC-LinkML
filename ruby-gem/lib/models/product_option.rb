# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductOption
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class ProductOption < WhatSubject
      SEMANTIC_TYPE = "dfc-b:ProductOption".freeze

      # @return [ProductOptionValue]
      attr_accessor :reference_product_option_value

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, referenceProductOptionValue: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, referenceProductOptionValue: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @reference_product_option_value = referenceProductOptionValue
        self.semanticType = "dfc-b:ProductOption"
        registerSemanticProperty("dfc-b:hasReferenceProductOptionValue", &method("reference_product_option_value")).valueSetter = method("reference_product_option_value=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
