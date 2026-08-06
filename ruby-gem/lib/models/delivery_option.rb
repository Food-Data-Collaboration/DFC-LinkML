# frozen_string_literal: true

# Class from DFC Business Ontology: #DeliveryOption
require_relative '../core/semantic_object'
require_relative 'shipping_option'


module DfcLinkmlConnector
  module Models
    class DeliveryOption < ShippingOption
      SEMANTIC_TYPE = "dfc-b:DeliveryOption".freeze

      # @return [String]
      attr_accessor :accessibility_info

      # @return [String]
      attr_accessor :delivery_constraint

      # @return [String]
      attr_accessor :delivered_at

      # @return [String]
      attr_accessor :refers_to

      # @return [String]
      attr_accessor :uses

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, fee: nil, quantity: nil, startDate: nil, optionOf: nil, selectedBy: nil, accessibilityInfo: nil, deliveryConstraint: nil, deliveredAt: nil, refersTo: nil, uses: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, fee: nil, quantity: nil, startDate: nil, optionOf: nil, selectedBy: nil, accessibilityInfo: nil, deliveryConstraint: nil, deliveredAt: nil, refersTo: nil, uses: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, endDate: endDate, fee: fee, quantity: quantity, startDate: startDate, optionOf: optionOf, selectedBy: selectedBy)
        @accessibility_info = accessibilityInfo
        @delivery_constraint = deliveryConstraint
        @delivered_at = deliveredAt
        @refers_to = refersTo
        @uses = uses
        self.semanticType = "dfc-b:DeliveryOption"
        registerSemanticProperty("dfc-b:accessibilityInfo", &method("accessibility_info")).valueSetter = method("accessibility_info=")
        registerSemanticProperty("dfc-b:deliveryConstraint", &method("delivery_constraint")).valueSetter = method("delivery_constraint=")
        registerSemanticProperty("dfc-b:deliveredAt", &method("delivered_at")).valueSetter = method("delivered_at=")
        registerSemanticProperty("dfc-b:refersTo", &method("refers_to")).valueSetter = method("refers_to=")
        registerSemanticProperty("dfc-b:uses", &method("uses")).valueSetter = method("uses=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
