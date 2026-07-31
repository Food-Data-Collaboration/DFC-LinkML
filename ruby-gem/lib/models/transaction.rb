# frozen_string_literal: true

# Class from DFC Business Ontology: #Transaction
require_relative '../core/semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class Transaction < HowSubject
      SEMANTIC_TYPE = "dfc-b:Transaction".freeze

      # @return [String]
      attr_accessor :invoice_number

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :concerns

      # @return [String]
      attr_accessor :from

      # @return [String]
      attr_accessor :price

      # @return [String]
      attr_accessor :to

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, invoiceNumber: nil, quantity: nil, concerns: nil, from: nil, price: nil, to: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, invoiceNumber: nil, quantity: nil, concerns: nil, from: nil, price: nil, to: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @invoice_number = invoiceNumber
        @quantity = quantity
        @concerns = concerns
        @from = from
        @price = price
        @to = to
        self.semanticType = "dfc-b:Transaction"
        registerSemanticProperty("dfc-b:Transaction:invoice_number", &method("invoice_number")).valueSetter = method("invoice_number=")
        registerSemanticProperty("dfc-b:Transaction:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:Transaction:concerns", &method("concerns")).valueSetter = method("concerns=")
        registerSemanticProperty("dfc-b:Transaction:from", &method("from")).valueSetter = method("from=")
        registerSemanticProperty("dfc-b:Transaction:has_price", &method("price")).valueSetter = method("price=")
        registerSemanticProperty("dfc-b:Transaction:to", &method("to")).valueSetter = method("to=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
