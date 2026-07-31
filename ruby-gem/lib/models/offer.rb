# frozen_string_literal: true

# Class from DFC Business Ontology: #Offer
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Offer < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Offer".freeze

      # @return [Float]
      attr_accessor :discount

      # @return [Float]
      attr_accessor :stock_limitation

      # @return [String]
      attr_accessor :concerned_by

      # @return [String]
      attr_accessor :price

      # @return [String]
      attr_accessor :listed_in

      # @return [String]
      attr_accessor :offers

      # @return [String]
      attr_accessor :offers_to

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
      # @param discount: nil, stockLimitation: nil, concernedBy: nil, price: nil, listedIn: nil, offers: nil, offersTo: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, discount: nil, stockLimitation: nil, concernedBy: nil, price: nil, listedIn: nil, offers: nil, offersTo: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @discount = discount
        @stock_limitation = stockLimitation
        @concerned_by = concernedBy
        @price = price
        @listed_in = listedIn
        @offers = offers
        @offers_to = offersTo
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Offer"
        registerSemanticProperty("dfc-b:Offer:discount", &method("discount")).valueSetter = method("discount=")
        registerSemanticProperty("dfc-b:Offer:stock_limitation", &method("stock_limitation")).valueSetter = method("stock_limitation=")
        registerSemanticProperty("dfc-b:Offer:concerned_by", &method("concerned_by")).valueSetter = method("concerned_by=")
        registerSemanticProperty("dfc-b:Offer:has_price", &method("price")).valueSetter = method("price=")
        registerSemanticProperty("dfc-b:Offer:listed_in", &method("listed_in")).valueSetter = method("listed_in=")
        registerSemanticProperty("dfc-b:Offer:offers", &method("offers")).valueSetter = method("offers=")
        registerSemanticProperty("dfc-b:Offer:offers_to", &method("offers_to")).valueSetter = method("offers_to=")
        registerSemanticProperty("dfc-b:Offer:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Offer:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Offer:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Offer:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Offer:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
