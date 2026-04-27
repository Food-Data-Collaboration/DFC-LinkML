# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Offer < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:Offer"

      def initialize(semantic_id = nil, price: nil, stock_limitation: nil, offered_to: nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:Offer"
        @price = price
        @stock_limitation = stock_limitation
        @offered_to = offered_to
      end

      def to_semantic
        result = super
        result["dfc-b:hasPrice"] = @price.to_semantic if @price
        result["dfc-b:stockLimitation"] = @stock_limitation if @stock_limitation
        result["dfc-b:offeredTo"] = @offered_to.semantic_id if @offered_to
        result
      end
    end
  end
end