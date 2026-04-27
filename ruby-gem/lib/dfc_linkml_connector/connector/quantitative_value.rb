# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class QuantitativeValue < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:QuantitativeValue"

      def initialize(value: nil, unit: nil, **kwargs)
        super(nil, **kwargs)
        @semantic_type = "dfc-b:QuantitativeValue"
        @value = value
        @unit = unit
      end

      def to_semantic
        result = super
        result["dfc-b:value"] = @value if @value
        result["dfc-b:hasUnit"] = @unit if @unit
        result
      end
    end
  end
end