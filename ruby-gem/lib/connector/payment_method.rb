# frozen_string_literal: true

# Class from DFC Business Ontology: #PaymentMethod
require_relative '../semantic_object'
require_relative 'how_subject'


class PaymentMethod < HowSubject
  SEMANTIC_TYPE = "dfc-b:PaymentMethod".freeze

  # @return [String]
  attr_accessor :payment_method_provider

  # @return [String]
  attr_accessor :payment_method_type

  # @param semanticId [String]
  # @param paymentMethodProvider: nil, paymentMethodType: nil
  def initialize(semanticId, paymentMethodProvider: nil, paymentMethodType: nil)
    super(semanticId)
    @payment_method_provider = paymentMethodProvider
    @payment_method_type = paymentMethodType
    self.semanticType = "dfc-b:PaymentMethod"
    registerSemanticProperty("dfc-b:PaymentMethod:paymentMethodProvider", &method("payment_method_provider")).valueSetter = method("payment_method_provider=")
    registerSemanticProperty("dfc-b:PaymentMethod:paymentMethodType", &method("payment_method_type")).valueSetter = method("payment_method_type=")
  end

end
