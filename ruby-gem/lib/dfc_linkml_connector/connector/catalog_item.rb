# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class CatalogItem < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:CatalogItem"

      def initialize(semantic_id = nil, product: nil, sku: nil, stock_limitation: nil, offers: [], **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:CatalogItem"
        @product = product
        @sku = sku
        @stock_limitation = stock_limitation
        @offers = offers
      end

      def to_semantic
        result = super
        result["dfc-b:references"] = @product.semantic_id if @product
        result["dfc-b:sku"] = @sku if @sku
        result["dfc-b:stockLimitation"] = @stock_limitation if @stock_limitation
        result["dfc-b:offers"] = @offers.map(&:semantic_id) if @offers.any?
        result
      end
    end
  end
end