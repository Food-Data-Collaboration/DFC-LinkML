# frozen_string_literal: true

# Class from DFC Business Ontology: #CatalogItem
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class CatalogItem < Core::Relation
      SEMANTIC_TYPE = "dfc-b:CatalogItem".freeze

      # @return [String]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :stock_limitation

      # @param semanticId [String]
      # @param quantity: nil, stockLimitation: nil
      def initialize(semanticId, quantity: nil, stockLimitation: nil)
        super(semanticId)
        @quantity = quantity
        @stock_limitation = stockLimitation
        self.semanticType = "dfc-b:CatalogItem"
        registerSemanticProperty("dfc-b:CatalogItem:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:CatalogItem:stockLimitation", &method("stock_limitation")).valueSetter = method("stock_limitation=")
      end

    end
  end
end
