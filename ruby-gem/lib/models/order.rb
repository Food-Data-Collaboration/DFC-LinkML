# frozen_string_literal: true

# Class from DFC Business Ontology: #Order
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Order < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Order".freeze

      # @return [Float]
      attr_accessor :discount

      # @return [String]
      attr_accessor :order_number

      # @return [String]
      attr_accessor :fulfilment_status

      # @return [String]
      attr_accessor :order_status

      # @return [String]
      attr_accessor :payment_method

      # @return [String]
      attr_accessor :payment_status

      # @return [String]
      attr_accessor :sold_by

      # @return [String]
      attr_accessor :uses

      # @return [String]
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @return [SaleSession, String]
      attr_accessor :belongs_to

      # @return [OrderLine, String]
      attr_accessor :part

      # @return [Agent, String]
      attr_accessor :ordered_by

      # @return [Array<ShippingOption, String>]
      attr_accessor :selects

      # @param semanticId [String]
      # @param discount: nil, orderNumber: nil, fulfilmentStatus: nil, orderStatus: nil, paymentMethod: nil, paymentStatus: nil, soldBy: nil, uses: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, belongsTo: nil, part: nil, orderedBy: nil, selects: []
      def initialize(semanticId, discount: nil, orderNumber: nil, fulfilmentStatus: nil, orderStatus: nil, paymentMethod: nil, paymentStatus: nil, soldBy: nil, uses: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, belongsTo: nil, part: nil, orderedBy: nil, selects: [])
        super(semanticId)
        @discount = discount
        @order_number = orderNumber
        @fulfilment_status = fulfilmentStatus
        @order_status = orderStatus
        @payment_method = paymentMethod
        @payment_status = paymentStatus
        @sold_by = soldBy
        @uses = uses
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @belongs_to = belongsTo
        @part = part
        @ordered_by = orderedBy
        @selects = selects
        self.semanticType = "dfc-b:Order"
        registerSemanticProperty("dfc-b:discount", &method("discount")).valueSetter = method("discount=")
        registerSemanticProperty("dfc-b:orderNumber", &method("order_number")).valueSetter = method("order_number=")
        registerSemanticProperty("dfc-b:hasFulfilmentStatus", &method("fulfilment_status")).valueSetter = method("fulfilment_status=")
        registerSemanticProperty("dfc-b:hasOrderStatus", &method("order_status")).valueSetter = method("order_status=")
        registerSemanticProperty("dfc-b:hasPaymentMethod", &method("payment_method")).valueSetter = method("payment_method=")
        registerSemanticProperty("dfc-b:hasPaymentStatus", &method("payment_status")).valueSetter = method("payment_status=")
        registerSemanticProperty("dfc-b:soldBy", &method("sold_by")).valueSetter = method("sold_by=")
        registerSemanticProperty("dfc-b:uses", &method("uses")).valueSetter = method("uses=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("dfc-b:belongsTo", &method("belongs_to")).valueSetter = method("belongs_to=")
        registerSemanticProperty("dfc-b:hasPart", &method("part")).valueSetter = method("part=")
        registerSemanticProperty("dfc-b:orderedBy", &method("ordered_by")).valueSetter = method("ordered_by=")
        registerSemanticProperty("dfc-b:selects", &method("selects")).valueSetter = method("selects=")
      end

      # Original DFC v2 API aliases (see config/dfc-original-api.yaml).
      alias_method :number, :order_number
      alias_method :number=, :order_number=
      alias_method :lines, :part
      alias_method :lines=, :part=
      alias_method :client, :ordered_by
      alias_method :client=, :ordered_by=

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
