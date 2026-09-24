# frozen_string_literal: true

# Class from DFC Business Ontology: #Price
require_relative '../core/semantic_object'
require_relative 'quantitative_value'


module DfcLinkmlConnector
  module Models
    class Price < QuantitativeValue
      SEMANTIC_TYPE = "dfc-b:Price".freeze

      # @return [Float]
      attr_accessor :vat_rate

      # @return [String]
      attr_accessor :is_price_of

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil, vatRate: nil, isPriceOf: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, value: nil, unit: nil, vatRate: nil, isPriceOf: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, value: value, unit: unit)
        @vat_rate = vatRate
        @is_price_of = isPriceOf
        self.semanticType = "dfc-b:Price"
        registerSemanticProperty("dfc-b:VATrate", &method("vat_rate")).valueSetter = method("vat_rate=")
        registerSemanticProperty("dfc-b:isPriceOf", &method("is_price_of")).valueSetter = method("is_price_of=")
      end

      # Original DFC v2 API aliases (see config/dfc-original-api.yaml).
      alias_method :vatRate, :vat_rate
      alias_method :vatRate=, :vat_rate=

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
