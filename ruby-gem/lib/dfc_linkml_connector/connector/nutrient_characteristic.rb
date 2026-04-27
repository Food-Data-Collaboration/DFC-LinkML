# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class NutrientCharacteristic < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:NutrientCharacteristic"

      def initialize(nutrient_dimension: nil, unit: nil, value: nil, **kwargs)
        super(nil, **kwargs)
        @semantic_type = "dfc-b:NutrientCharacteristic"
        @nutrient_dimension = nutrient_dimension
        @unit = unit
        @value = value
      end

      def to_semantic
        result = super
        result["dfc-b:nutrientDimension"] = @nutrient_dimension if @nutrient_dimension
        result["dfc-b:hasUnit"] = @unit if @unit
        result["dfc-b:value"] = @value if @value
        result
      end
    end
  end
end