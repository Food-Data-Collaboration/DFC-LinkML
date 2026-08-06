# frozen_string_literal: true

# Class from DFC Business Ontology: #ShippingOption
require_relative '../core/semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class ShippingOption < HowSubject
      SEMANTIC_TYPE = "dfc-b:ShippingOption".freeze

      # @return [String]
      attr_accessor :end_date

      # @return [Float]
      attr_accessor :fee

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :start_date

      # @return [String]
      attr_accessor :option_of

      # @return [String]
      attr_accessor :selected_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, fee: nil, quantity: nil, startDate: nil, optionOf: nil, selectedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, fee: nil, quantity: nil, startDate: nil, optionOf: nil, selectedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @end_date = endDate
        @fee = fee
        @quantity = quantity
        @start_date = startDate
        @option_of = optionOf
        @selected_by = selectedBy
        self.semanticType = "dfc-b:ShippingOption"
        registerSemanticProperty("dfc-b:endDate", &method("end_date")).valueSetter = method("end_date=")
        registerSemanticProperty("dfc-b:fee", &method("fee")).valueSetter = method("fee=")
        registerSemanticProperty("dfc-b:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:startDate", &method("start_date")).valueSetter = method("start_date=")
        registerSemanticProperty("dfc-b:optionOf", &method("option_of")).valueSetter = method("option_of=")
        registerSemanticProperty("dfc-b:selectedBy", &method("selected_by")).valueSetter = method("selected_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
