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
      attr_accessor :belongs_to

      # @return [String]
      attr_accessor :fulfilment_status

      # @return [String]
      attr_accessor :order_status

      # @return [String]
      attr_accessor :part

      # @return [String]
      attr_accessor :payment_method

      # @return [String]
      attr_accessor :payment_status

      # @return [String]
      attr_accessor :ordered_by

      # @return [String]
      attr_accessor :selects

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

      # @param semanticId [String]
      # @param discount: nil, orderNumber: nil, belongsTo: nil, fulfilmentStatus: nil, orderStatus: nil, part: nil, paymentMethod: nil, paymentStatus: nil, orderedBy: nil, selects: nil, soldBy: nil, uses: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, discount: nil, orderNumber: nil, belongsTo: nil, fulfilmentStatus: nil, orderStatus: nil, part: nil, paymentMethod: nil, paymentStatus: nil, orderedBy: nil, selects: nil, soldBy: nil, uses: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @discount = discount
        @order_number = orderNumber
        @belongs_to = belongsTo
        @fulfilment_status = fulfilmentStatus
        @order_status = orderStatus
        @part = part
        @payment_method = paymentMethod
        @payment_status = paymentStatus
        @ordered_by = orderedBy
        @selects = selects
        @sold_by = soldBy
        @uses = uses
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Order"
        registerSemanticProperty("dfc-b:Order:discount", &method("discount")).valueSetter = method("discount=")
        registerSemanticProperty("dfc-b:Order:order_number", &method("order_number")).valueSetter = method("order_number=")
        registerSemanticProperty("dfc-b:Order:belongs_to", &method("belongs_to")).valueSetter = method("belongs_to=")
        registerSemanticProperty("dfc-b:Order:has_fulfilment_status", &method("fulfilment_status")).valueSetter = method("fulfilment_status=")
        registerSemanticProperty("dfc-b:Order:has_order_status", &method("order_status")).valueSetter = method("order_status=")
        registerSemanticProperty("dfc-b:Order:has_part", &method("part")).valueSetter = method("part=")
        registerSemanticProperty("dfc-b:Order:has_payment_method", &method("payment_method")).valueSetter = method("payment_method=")
        registerSemanticProperty("dfc-b:Order:has_payment_status", &method("payment_status")).valueSetter = method("payment_status=")
        registerSemanticProperty("dfc-b:Order:ordered_by", &method("ordered_by")).valueSetter = method("ordered_by=")
        registerSemanticProperty("dfc-b:Order:selects", &method("selects")).valueSetter = method("selects=")
        registerSemanticProperty("dfc-b:Order:sold_by", &method("sold_by")).valueSetter = method("sold_by=")
        registerSemanticProperty("dfc-b:Order:uses", &method("uses")).valueSetter = method("uses=")
        registerSemanticProperty("dfc-b:Order:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Order:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Order:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Order:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Order:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
