# frozen_string_literal: true

# Class from DFC Business Ontology: #CatalogItem
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class CatalogItem < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:CatalogItem".freeze

      # @return [String]
      attr_accessor :extra_availability_time

      # @return [String]
      attr_accessor :extra_delivery_condition

      # @return [String]
      attr_accessor :sku

      # @return [Float]
      attr_accessor :stock_limitation

      # @return [String]
      attr_accessor :listed_in

      # @return [String]
      attr_accessor :managed_by

      # @return [String]
      attr_accessor :offered_through

      # @return [String]
      attr_accessor :references

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
      # @param extraAvailabilityTime: nil, extraDeliveryCondition: nil, sku: nil, stockLimitation: nil, listedIn: nil, managedBy: nil, offeredThrough: nil, references: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, extraAvailabilityTime: nil, extraDeliveryCondition: nil, sku: nil, stockLimitation: nil, listedIn: nil, managedBy: nil, offeredThrough: nil, references: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @extra_availability_time = extraAvailabilityTime
        @extra_delivery_condition = extraDeliveryCondition
        @sku = sku
        @stock_limitation = stockLimitation
        @listed_in = listedIn
        @managed_by = managedBy
        @offered_through = offeredThrough
        @references = references
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:CatalogItem"
        registerSemanticProperty("dfc-b:CatalogItem:extra_availability_time", &method("extra_availability_time")).valueSetter = method("extra_availability_time=")
        registerSemanticProperty("dfc-b:CatalogItem:extra_delivery_condition", &method("extra_delivery_condition")).valueSetter = method("extra_delivery_condition=")
        registerSemanticProperty("dfc-b:CatalogItem:sku", &method("sku")).valueSetter = method("sku=")
        registerSemanticProperty("dfc-b:CatalogItem:stock_limitation", &method("stock_limitation")).valueSetter = method("stock_limitation=")
        registerSemanticProperty("dfc-b:CatalogItem:listed_in", &method("listed_in")).valueSetter = method("listed_in=")
        registerSemanticProperty("dfc-b:CatalogItem:managed_by", &method("managed_by")).valueSetter = method("managed_by=")
        registerSemanticProperty("dfc-b:CatalogItem:offered_through", &method("offered_through")).valueSetter = method("offered_through=")
        registerSemanticProperty("dfc-b:CatalogItem:references", &method("references")).valueSetter = method("references=")
        registerSemanticProperty("dfc-b:CatalogItem:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:CatalogItem:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:CatalogItem:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:CatalogItem:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:CatalogItem:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
