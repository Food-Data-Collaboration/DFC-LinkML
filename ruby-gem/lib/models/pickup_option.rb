# frozen_string_literal: true

# Class from DFC Business Ontology: #PickupOption
require_relative '../core/semantic_object'
require_relative 'shipping_option'


module DfcLinkmlConnector
  module Models
    class PickupOption < ShippingOption
      SEMANTIC_TYPE = "dfc-b:PickupOption".freeze

      # @return [String]
      attr_accessor :picked_up_at

      # @return [String]
      attr_accessor :uses

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, fee: nil, quantity: nil, startDate: nil, selectedBy: nil, hasQuantity: nil, optionOf: nil, pickedUpAt: nil, uses: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, fee: nil, quantity: nil, startDate: nil, selectedBy: nil, hasQuantity: nil, optionOf: nil, pickedUpAt: nil, uses: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, endDate: endDate, fee: fee, quantity: quantity, startDate: startDate, selectedBy: selectedBy, hasQuantity: hasQuantity, optionOf: optionOf)
        @picked_up_at = pickedUpAt
        @uses = uses
        self.semanticType = "dfc-b:PickupOption"
        registerSemanticProperty("dfc-b:pickedUpAt", &method("picked_up_at")).valueSetter = method("picked_up_at=")
        registerSemanticProperty("dfc-b:uses", &method("uses")).valueSetter = method("uses=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
