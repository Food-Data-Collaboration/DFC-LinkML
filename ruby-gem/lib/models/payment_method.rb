# frozen_string_literal: true

# Class from DFC Business Ontology: #PaymentMethod
require_relative '../core/semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class PaymentMethod < HowSubject
      SEMANTIC_TYPE = "dfc-b:PaymentMethod".freeze

      # @return [String]
      attr_accessor :payment_method_provider

      # @return [String]
      attr_accessor :payment_method_type

      # @return [String]
      attr_accessor :price

      # @return [String]
      attr_accessor :paid_with

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, paymentMethodProvider: nil, paymentMethodType: nil, price: nil, paidWith: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, paymentMethodProvider: nil, paymentMethodType: nil, price: nil, paidWith: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @payment_method_provider = paymentMethodProvider
        @payment_method_type = paymentMethodType
        @price = price
        @paid_with = paidWith
        self.semanticType = "dfc-b:PaymentMethod"
        registerSemanticProperty("dfc-b:PaymentMethod:payment_method_provider", &method("payment_method_provider")).valueSetter = method("payment_method_provider=")
        registerSemanticProperty("dfc-b:PaymentMethod:payment_method_type", &method("payment_method_type")).valueSetter = method("payment_method_type=")
        registerSemanticProperty("dfc-b:PaymentMethod:has_price", &method("price")).valueSetter = method("price=")
        registerSemanticProperty("dfc-b:PaymentMethod:paid_with", &method("paid_with")).valueSetter = method("paid_with=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
