# frozen_string_literal: true

# Class from DFC Business Ontology: #LocalizedProduct
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class LocalizedProduct < WhatSubject
      SEMANTIC_TYPE = "dfc-b:LocalizedProduct".freeze

      # @return [String]
      attr_accessor :image

      # @return [Float]
      attr_accessor :cost

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :constitued_by

      # @return [String]
      attr_accessor :consumed_by

      # @return [String]
      attr_accessor :reference

      # @return [String]
      attr_accessor :produced_by

      # @return [String]
      attr_accessor :represented_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, cost: nil, quantity: nil, constituedBy: nil, consumedBy: nil, reference: nil, producedBy: nil, representedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, cost: nil, quantity: nil, constituedBy: nil, consumedBy: nil, reference: nil, producedBy: nil, representedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @image = image
        @cost = cost
        @quantity = quantity
        @constitued_by = constituedBy
        @consumed_by = consumedBy
        @reference = reference
        @produced_by = producedBy
        @represented_by = representedBy
        self.semanticType = "dfc-b:LocalizedProduct"
        registerSemanticProperty("dfc-b:LocalizedProduct:image", &method("image")).valueSetter = method("image=")
        registerSemanticProperty("dfc-b:LocalizedProduct:cost", &method("cost")).valueSetter = method("cost=")
        registerSemanticProperty("dfc-b:LocalizedProduct:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:LocalizedProduct:constitued_by", &method("constitued_by")).valueSetter = method("constitued_by=")
        registerSemanticProperty("dfc-b:LocalizedProduct:consumed_by", &method("consumed_by")).valueSetter = method("consumed_by=")
        registerSemanticProperty("dfc-b:LocalizedProduct:has_reference", &method("reference")).valueSetter = method("reference=")
        registerSemanticProperty("dfc-b:LocalizedProduct:produced_by", &method("produced_by")).valueSetter = method("produced_by=")
        registerSemanticProperty("dfc-b:LocalizedProduct:represented_by", &method("represented_by")).valueSetter = method("represented_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
