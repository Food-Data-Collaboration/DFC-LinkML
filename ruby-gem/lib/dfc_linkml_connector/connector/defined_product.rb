# frozen_string_literal: true

module DFCLinkMLConnector
  module Connector
    class DefinedProduct < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:DefinedProduct"

      def initialize(semantic_id = nil, name: nil, description: nil, product_type: nil, quantity: nil, alcohol_percentage: nil, lifetime: nil, claims: [], usage_or_storage_conditions: nil, allergen_characteristics: [], nutrient_characteristics: [], physical_characteristics: [], geographical_origin: nil, catalog_items: [], certifications: [], nature_origin: [], part_origin: [], images: [], variants: [], is_variant_of: [], **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:DefinedProduct"
        @name = name
        @description = description
        @product_type = product_type
        @quantity = quantity
        @alcohol_percentage = alcohol_percentage
        @lifetime = lifetime
        @claims = claims
        @usage_or_storage_conditions = usage_or_storage_conditions
        @allergen_characteristics = allergen_characteristics
        @nutrient_characteristics = nutrient_characteristics
        @physical_characteristics = physical_characteristics
        @geographical_origin = geographical_origin
        @catalog_items = catalog_items
        @certifications = certifications
        @nature_origin = nature_origin
        @part_origin = part_origin
        @images = images
        @variants = variants
        @is_variant_of = is_variant_of
      end

      def to_semantic
        result = super
        result["dfc-b:name"] = @name if @name
        result["dfc-b:description"] = @description if @description
        result["dfc-b:productType"] = @product_type if @product_type
        result["dfc-b:quantity"] = @quantity.to_semantic if @quantity
        result["dfc-b:alcoholPercentage"] = @alcohol_percentage if @alcohol_percentage
        result["dfc-b:lifetime"] = @lifetime if @lifetime
        result["dfc-b:hasCertification"] = @certifications.map(&:semantic_id) if @certifications.any?
        result["dfc-b:geographicalOrigin"] = @geographical_origin if @geographical_origin
        result
      end
    end
  end
end