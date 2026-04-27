# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Enterprise < Agent
      SEMANTIC_TYPE = "dfc-b:Enterprise"

      def initialize(semantic_id = nil, name: nil, description: nil, vat_number: nil, customer_categories: [], supplied_products: [], catalog_items: [], **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:Enterprise"
        @name = name
        @description = description
        @vat_number = vat_number
        @customer_categories = customer_categories
        @supplied_products = supplied_products
        @catalog_items = catalog_items
      end

      def to_semantic
        result = super
        result["dfc-b:name"] = @name if @name
        result["dfc-b:description"] = @description if @description
        result["dfc-b:VATnumber"] = @vat_number if @vat_number
        result["dfc-b:hasCustomerCategory"] = @customer_categories.map(&:semantic_id) if @customer_categories.any?
        result["dfc-b:supplies"] = @supplied_products.map(&:semantic_id) if @supplied_products.any?
        result["dfc-b:offers"] = @catalog_items.map(&:semantic_id) if @catalog_items.any?
        result
      end
    end
  end
end