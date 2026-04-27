# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Price < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:Price"

      def initialize(value: nil, vat_rate: nil, unit: nil, **kwargs)
        super(nil, **kwargs)
        @semantic_type = "dfc-b:Price"
        @value = value
        @vat_rate = vat_rate
        @unit = unit
      end

      def to_semantic
        result = super
        result["dfc-b:value"] = @value if @value
        result["dfc-b:vatRate"] = @vat_rate if @vat_rate
        result["dfc-b:hasUnit"] = @unit if @unit
        result
      end
    end
  end
end