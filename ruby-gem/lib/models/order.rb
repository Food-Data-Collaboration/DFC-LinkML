# frozen_string_literal: true

# Class from DFC Business Ontology: #Order
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class Order < Core::Relation
      SEMANTIC_TYPE = "dfc-b:Order".freeze

      # @return [String]
      attr_accessor :fulfilment_status

      # @return [String]
      attr_accessor :order_status

      # @return [String]
      attr_accessor :payment_status

      # @return [String]
      attr_accessor :status

      # @return [String]
      attr_accessor :invoice_number

      # @return [String]
      attr_accessor :order_number

      # @return [OrderLine]
      attr_accessor :part

      # @return [PaymentMethod]
      attr_accessor :payment_method

      # @param semanticId [String]
      # @param fulfilmentStatus: nil, orderStatus: nil, paymentStatus: nil, status: nil, invoiceNumber: nil, orderNumber: nil, part: nil, paymentMethod: nil
      def initialize(semanticId, fulfilmentStatus: nil, orderStatus: nil, paymentStatus: nil, status: nil, invoiceNumber: nil, orderNumber: nil, part: nil, paymentMethod: nil)
        super(semanticId)
        @fulfilment_status = fulfilmentStatus
        @order_status = orderStatus
        @payment_status = paymentStatus
        @status = status
        @invoice_number = invoiceNumber
        @order_number = orderNumber
        @part = part
        @payment_method = paymentMethod
        self.semanticType = "dfc-b:Order"
        registerSemanticProperty("dfc-b:Order:hasFulfilmentStatus", &method("fulfilment_status")).valueSetter = method("fulfilment_status=")
        registerSemanticProperty("dfc-b:Order:hasOrderStatus", &method("order_status")).valueSetter = method("order_status=")
        registerSemanticProperty("dfc-b:Order:hasPaymentStatus", &method("payment_status")).valueSetter = method("payment_status=")
        registerSemanticProperty("dfc-b:Order:hasStatus", &method("status")).valueSetter = method("status=")
        registerSemanticProperty("dfc-b:Order:invoiceNumber", &method("invoice_number")).valueSetter = method("invoice_number=")
        registerSemanticProperty("dfc-b:Order:orderNumber", &method("order_number")).valueSetter = method("order_number=")
        registerSemanticProperty("dfc-b:Order:hasPart", &method("part")).valueSetter = method("part=")
        registerSemanticProperty("dfc-b:Order:hasPaymentMethod", &method("payment_method")).valueSetter = method("payment_method=")
      end

    end
  end
end
