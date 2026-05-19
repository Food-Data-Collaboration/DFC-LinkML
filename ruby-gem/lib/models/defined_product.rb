# frozen_string_literal: true

# Class from DFC Business Ontology: #DefinedProduct
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class DefinedProduct < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:DefinedProduct".freeze

      # @return [String]
      attr_accessor :claim

      # @return [String]
      attr_accessor :container_information

      # @return [String]
      attr_accessor :geographical_origin

      # @return [String]
      attr_accessor :nature_origin

      # @return [String]
      attr_accessor :part_origin

      # @return [String]
      attr_accessor :type

      # @return [String]
      attr_accessor :percentage_of_alcohol_by_volume

      # @return [String]
      attr_accessor :lifetime

      # @return [String]
      attr_accessor :physical_characteristics

      # @return [String]
      attr_accessor :sku

      # @return [AllergenCharacteristic]
      attr_accessor :allergen_characteristic

      # @return [Brand]
      attr_accessor :brand

      # @return [Certfication]
      attr_accessor :certification

      # @return [Characteristic]
      attr_accessor :characteristic

      # @return [DefinedProduct]
      attr_accessor :ingredient

      # @return [LabellingCharacteristic]
      attr_accessor :labelling_characteristic

      # @return [NutrientCharacteristic]
      attr_accessor :nutrient_characteristic

      # @return [PhysicalCharacteristic]
      attr_accessor :physical_characteristic

      # @return [QuantitativeValue]
      attr_accessor :quantity

      # @return [ProductOption]
      attr_accessor :reference_product_option

      # @return [DefinedProduct]
      attr_accessor :variant

      # @param semanticId [String]
      # @param claim: nil, containerInformation: nil, geographicalOrigin: nil, natureOrigin: nil, partOrigin: nil, type: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, sku: nil, allergenCharacteristic: nil, brand: nil, certification: nil, characteristic: nil, ingredient: nil, labellingCharacteristic: nil, nutrientCharacteristic: nil, physicalCharacteristic: nil, quantity: nil, referenceProductOption: nil, variant: nil
      def initialize(semanticId, claim: nil, containerInformation: nil, geographicalOrigin: nil, natureOrigin: nil, partOrigin: nil, type: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, sku: nil, allergenCharacteristic: nil, brand: nil, certification: nil, characteristic: nil, ingredient: nil, labellingCharacteristic: nil, nutrientCharacteristic: nil, physicalCharacteristic: nil, quantity: nil, referenceProductOption: nil, variant: nil)
        super(semanticId)
        @claim = claim
        @container_information = containerInformation
        @geographical_origin = geographicalOrigin
        @nature_origin = natureOrigin
        @part_origin = partOrigin
        @type = type
        @percentage_of_alcohol_by_volume = percentageOfAlcoholByVolume
        @lifetime = lifetime
        @physical_characteristics = physicalCharacteristics
        @sku = sku
        @allergen_characteristic = allergenCharacteristic
        @brand = brand
        @certification = certification
        @characteristic = characteristic
        @ingredient = ingredient
        @labelling_characteristic = labellingCharacteristic
        @nutrient_characteristic = nutrientCharacteristic
        @physical_characteristic = physicalCharacteristic
        @quantity = quantity
        @reference_product_option = referenceProductOption
        @variant = variant
        self.semanticType = "dfc-b:DefinedProduct"
        registerSemanticProperty("dfc-b:DefinedProduct:hasClaim", &method("claim")).valueSetter = method("claim=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasContainerInformation", &method("container_information")).valueSetter = method("container_information=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasGeographicalOrigin", &method("geographical_origin")).valueSetter = method("geographical_origin=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasNatureOrigin", &method("nature_origin")).valueSetter = method("nature_origin=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasPartOrigin", &method("part_origin")).valueSetter = method("part_origin=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasType", &method("type")).valueSetter = method("type=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasPercentageOfAlcoholByVolume", &method("percentage_of_alcohol_by_volume")).valueSetter = method("percentage_of_alcohol_by_volume=")
        registerSemanticProperty("dfc-b:DefinedProduct:lifetime", &method("lifetime")).valueSetter = method("lifetime=")
        registerSemanticProperty("dfc-b:DefinedProduct:physicalCharacteristics", &method("physical_characteristics")).valueSetter = method("physical_characteristics=")
        registerSemanticProperty("dfc-b:DefinedProduct:sku", &method("sku")).valueSetter = method("sku=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasAllergenCharacteristic", &method("allergen_characteristic")).valueSetter = method("allergen_characteristic=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasBrand", &method("brand")).valueSetter = method("brand=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasCertification", &method("certification")).valueSetter = method("certification=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasCharacteristic", &method("characteristic")).valueSetter = method("characteristic=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasIngredient", &method("ingredient")).valueSetter = method("ingredient=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasLabellingCharacteristic", &method("labelling_characteristic")).valueSetter = method("labelling_characteristic=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasNutrientCharacteristic", &method("nutrient_characteristic")).valueSetter = method("nutrient_characteristic=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasPhysicalCharacteristic", &method("physical_characteristic")).valueSetter = method("physical_characteristic=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasQuantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasReferenceProductOption", &method("reference_product_option")).valueSetter = method("reference_product_option=")
        registerSemanticProperty("dfc-b:DefinedProduct:hasVariant", &method("variant")).valueSetter = method("variant=")
      end

    end
  end
end
