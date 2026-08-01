# frozen_string_literal: true

# Class from DFC Business Ontology: #Ingredient
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Ingredient < WhatSubject
      SEMANTIC_TYPE = "dfc-b:Ingredient".freeze

      # @return [String]
      attr_accessor :composed_of

      # @return [String]
      attr_accessor :is_ingredient_of

      # @return [QuantitativeValue]
      attr_accessor :quantity

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, composedOf: nil, isIngredientOf: nil, quantity: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, composedOf: nil, isIngredientOf: nil, quantity: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @composed_of = composedOf
        @is_ingredient_of = isIngredientOf
        @quantity = quantity
        self.semanticType = "dfc-b:Ingredient"
        registerSemanticProperty("dfc-b:composedOf", &method("composed_of")).valueSetter = method("composed_of=")
        registerSemanticProperty("dfc-b:isIngredientOf", &method("is_ingredient_of")).valueSetter = method("is_ingredient_of=")
        registerSemanticProperty("dfc-b:hasQuantity", &method("quantity")).valueSetter = method("quantity=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
