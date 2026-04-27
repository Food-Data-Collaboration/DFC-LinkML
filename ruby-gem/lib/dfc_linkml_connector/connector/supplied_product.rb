# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class SuppliedProduct < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:SuppliedProduct"

      def initialize(semantic_id = nil, total_theoretical_stock: nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:SuppliedProduct"
        @total_theoretical_stock = total_theoretical_stock
      end

      def to_semantic
        result = super
        result["dfc-b:totalTheoreticalStock"] = @total_theoretical_stock if @total_theoretical_stock
        result
      end
    end
  end
end