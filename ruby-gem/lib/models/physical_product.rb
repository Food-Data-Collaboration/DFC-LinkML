# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalProduct
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class PhysicalProduct < WhatSubject
      SEMANTIC_TYPE = "dfc-b:PhysicalProduct".freeze

      # @return [String]
      attr_accessor :image

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :concerned_by

      # @return [String]
      attr_accessor :constitued_by

      # @return [String]
      attr_accessor :consumed_by

      # @return [String]
      attr_accessor :fulfills

      # @return [String]
      attr_accessor :owned_by

      # @return [String]
      attr_accessor :produced_by

      # @return [String]
      attr_accessor :represents

      # @return [String]
      attr_accessor :traced_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, quantity: nil, concernedBy: nil, constituedBy: nil, consumedBy: nil, fulfills: nil, ownedBy: nil, producedBy: nil, represents: nil, tracedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, quantity: nil, concernedBy: nil, constituedBy: nil, consumedBy: nil, fulfills: nil, ownedBy: nil, producedBy: nil, represents: nil, tracedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @image = image
        @quantity = quantity
        @concerned_by = concernedBy
        @constitued_by = constituedBy
        @consumed_by = consumedBy
        @fulfills = fulfills
        @owned_by = ownedBy
        @produced_by = producedBy
        @represents = represents
        @traced_by = tracedBy
        self.semanticType = "dfc-b:PhysicalProduct"
        registerSemanticProperty("dfc-b:Image", &method("image")).valueSetter = method("image=")
        registerSemanticProperty("dfc-b:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:concernedBy", &method("concerned_by")).valueSetter = method("concerned_by=")
        registerSemanticProperty("dfc-b:constituedBy", &method("constitued_by")).valueSetter = method("constitued_by=")
        registerSemanticProperty("dfc-b:consumedBy", &method("consumed_by")).valueSetter = method("consumed_by=")
        registerSemanticProperty("dfc-b:fulfills", &method("fulfills")).valueSetter = method("fulfills=")
        registerSemanticProperty("dfc-b:ownedBy", &method("owned_by")).valueSetter = method("owned_by=")
        registerSemanticProperty("dfc-b:producedBy", &method("produced_by")).valueSetter = method("produced_by=")
        registerSemanticProperty("dfc-b:represents", &method("represents")).valueSetter = method("represents=")
        registerSemanticProperty("dfc-b:tracedBy", &method("traced_by")).valueSetter = method("traced_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
