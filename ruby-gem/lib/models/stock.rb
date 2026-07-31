# frozen_string_literal: true

# Class from DFC Business Ontology: #Stock
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Stock < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Stock".freeze

      # @return [String]
      attr_accessor :availability_date

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :transported_by

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
      # @param availabilityDate: nil, quantity: nil, transportedBy: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, availabilityDate: nil, quantity: nil, transportedBy: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @availability_date = availabilityDate
        @quantity = quantity
        @transported_by = transportedBy
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Stock"
        registerSemanticProperty("dfc-b:Stock:availability_date", &method("availability_date")).valueSetter = method("availability_date=")
        registerSemanticProperty("dfc-b:Stock:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:Stock:transported_by", &method("transported_by")).valueSetter = method("transported_by=")
        registerSemanticProperty("dfc-b:Stock:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Stock:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Stock:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Stock:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Stock:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
