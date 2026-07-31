# frozen_string_literal: true

# Class from DFC Business Ontology: #Vehicle
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Vehicle < WhatSubject
      SEMANTIC_TYPE = "dfc-b:Vehicle".freeze

      # @return [Boolean]
      attr_accessor :frozen

      # @return [Boolean]
      attr_accessor :refrigerated

      # @return [String]
      attr_accessor :ships

      # @return [String]
      attr_accessor :used_in_route

      # @return [PhysicalPlace]
      attr_accessor :based_at

      # @return [QuantitativeValue]
      attr_accessor :quantity

      # @return [OpeningHoursSpecification]
      attr_accessor :is_available_during

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, frozen: nil, refrigerated: nil, ships: nil, usedInRoute: nil, basedAt: nil, quantity: nil, isAvailableDuring: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, frozen: nil, refrigerated: nil, ships: nil, usedInRoute: nil, basedAt: nil, quantity: nil, isAvailableDuring: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @frozen = frozen
        @refrigerated = refrigerated
        @ships = ships
        @used_in_route = usedInRoute
        @based_at = basedAt
        @quantity = quantity
        @is_available_during = isAvailableDuring
        self.semanticType = "dfc-b:Vehicle"
        registerSemanticProperty("dfc-b:Vehicle:frozen", &method("frozen")).valueSetter = method("frozen=")
        registerSemanticProperty("dfc-b:Vehicle:refrigerated", &method("refrigerated")).valueSetter = method("refrigerated=")
        registerSemanticProperty("dfc-b:Vehicle:ships", &method("ships")).valueSetter = method("ships=")
        registerSemanticProperty("dfc-b:Vehicle:used_in_route", &method("used_in_route")).valueSetter = method("used_in_route=")
        registerSemanticProperty("dfc-b:Vehicle:based_at", &method("based_at")).valueSetter = method("based_at=")
        registerSemanticProperty("dfc-b:Vehicle:has_quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:Vehicle:is_available_during", &method("is_available_during")).valueSetter = method("is_available_during=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
