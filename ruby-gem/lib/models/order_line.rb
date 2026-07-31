# frozen_string_literal: true

# Class from DFC Business Ontology: #OrderLine
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class OrderLine < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:OrderLine".freeze

      # @return [Float]
      attr_accessor :discount

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :concerns

      # @return [String]
      attr_accessor :price

      # @return [String]
      attr_accessor :is_fulfilled_by

      # @return [String]
      attr_accessor :part_of

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
      # @param discount: nil, quantity: nil, concerns: nil, price: nil, isFulfilledBy: nil, partOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, discount: nil, quantity: nil, concerns: nil, price: nil, isFulfilledBy: nil, partOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @discount = discount
        @quantity = quantity
        @concerns = concerns
        @price = price
        @is_fulfilled_by = isFulfilledBy
        @part_of = partOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:OrderLine"
        registerSemanticProperty("dfc-b:OrderLine:discount", &method("discount")).valueSetter = method("discount=")
        registerSemanticProperty("dfc-b:OrderLine:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:OrderLine:concerns", &method("concerns")).valueSetter = method("concerns=")
        registerSemanticProperty("dfc-b:OrderLine:has_price", &method("price")).valueSetter = method("price=")
        registerSemanticProperty("dfc-b:OrderLine:is_fulfilled_by", &method("is_fulfilled_by")).valueSetter = method("is_fulfilled_by=")
        registerSemanticProperty("dfc-b:OrderLine:part_of", &method("part_of")).valueSetter = method("part_of=")
        registerSemanticProperty("dfc-b:OrderLine:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:OrderLine:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:OrderLine:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:OrderLine:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:OrderLine:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
