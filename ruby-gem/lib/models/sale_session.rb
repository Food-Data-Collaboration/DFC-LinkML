# frozen_string_literal: true

# Class from DFC Business Ontology: #SaleSession
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class SaleSession < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:SaleSession".freeze

      # @return [String]
      attr_accessor :end_date

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :start_date

      # @return [String]
      attr_accessor :option

      # @return [String]
      attr_accessor :holds

      # @return [String]
      attr_accessor :hosted_at

      # @return [String]
      attr_accessor :lists

      # @return [String]
      attr_accessor :object_of

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
      # @param endDate: nil, quantity: nil, startDate: nil, option: nil, holds: nil, hostedAt: nil, lists: nil, objectOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, endDate: nil, quantity: nil, startDate: nil, option: nil, holds: nil, hostedAt: nil, lists: nil, objectOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @end_date = endDate
        @quantity = quantity
        @start_date = startDate
        @option = option
        @holds = holds
        @hosted_at = hostedAt
        @lists = lists
        @object_of = objectOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:SaleSession"
        registerSemanticProperty("dfc-b:endDate", &method("end_date")).valueSetter = method("end_date=")
        registerSemanticProperty("dfc-b:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:startDate", &method("start_date")).valueSetter = method("start_date=")
        registerSemanticProperty("dfc-b:hasOption", &method("option")).valueSetter = method("option=")
        registerSemanticProperty("dfc-b:holds", &method("holds")).valueSetter = method("holds=")
        registerSemanticProperty("dfc-b:hostedAt", &method("hosted_at")).valueSetter = method("hosted_at=")
        registerSemanticProperty("dfc-b:lists", &method("lists")).valueSetter = method("lists=")
        registerSemanticProperty("dfc-b:objectOf", &method("object_of")).valueSetter = method("object_of=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
