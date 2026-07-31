# frozen_string_literal: true

# Class from DFC Business Ontology: #Price
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Price < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Price".freeze

      # @return [Float]
      attr_accessor :vat_rate

      # @return [String]
      attr_accessor :is_price_of

      # @return [String]
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @param semanticId [String]
      # @param vatRate: nil, isPriceOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, vatRate: nil, isPriceOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @vat_rate = vatRate
        @is_price_of = isPriceOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Price"
        registerSemanticProperty("dfc-b:Price:vat_rate", &method("vat_rate")).valueSetter = method("vat_rate=")
        registerSemanticProperty("dfc-b:Price:is_price_of", &method("is_price_of")).valueSetter = method("is_price_of=")
        registerSemanticProperty("dfc-b:Price:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Price:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Price:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Price:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Price:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
