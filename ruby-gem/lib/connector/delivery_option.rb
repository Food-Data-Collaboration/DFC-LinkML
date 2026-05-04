# frozen_string_literal: true

# Class from DFC Business Ontology: #DeliveryOption
require_relative '../semantic_object'
require_relative 'shipping_option'


class DeliveryOption < ShippingOption
  SEMANTIC_TYPE = "dfc-b:DeliveryOption".freeze

  # @return [String]
  attr_accessor :delivery_constraint

  # @param semanticId [String]
  # @param deliveryConstraint: nil
  def initialize(semanticId, deliveryConstraint: nil)
    super(semanticId)
    @delivery_constraint = deliveryConstraint
    self.semanticType = "dfc-b:DeliveryOption"
    registerSemanticProperty("dfc-b:DeliveryOption:deliveryConstraint", &method("delivery_constraint")).valueSetter = method("delivery_constraint=")
  end

end
