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
        registerSemanticProperty("dfc-b:discount", &method("discount")).valueSetter = method("discount=")
        registerSemanticProperty("dfc-b:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:concerns", &method("concerns")).valueSetter = method("concerns=")
        registerSemanticProperty("dfc-b:hasPrice", &method("price")).valueSetter = method("price=")
        registerSemanticProperty("dfc-b:isFulfilledBy", &method("is_fulfilled_by")).valueSetter = method("is_fulfilled_by=")
        registerSemanticProperty("dfc-b:partOf", &method("part_of")).valueSetter = method("part_of=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
