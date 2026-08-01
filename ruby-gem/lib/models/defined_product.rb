# frozen_string_literal: true

# Class from DFC Business Ontology: #DefinedProduct
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class DefinedProduct < WhatSubject
      SEMANTIC_TYPE = "dfc-b:DefinedProduct".freeze

      # @return [String]
      attr_accessor :image

      # @return [String]
      attr_accessor :url

      # @return [String]
      attr_accessor :brand

      # @return [String]
      attr_accessor :claim

      # @return [Float]
      attr_accessor :percentage_of_alcohol_by_volume

      # @return [Float]
      attr_accessor :lifetime

      # @return [String]
      attr_accessor :physical_characteristics

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :specific_condition

      # @return [String]
      attr_accessor :composes

      # @return [String]
      attr_accessor :consumed_by

      # @return [String]
      attr_accessor :allergen_characteristic

      # @return [String]
      attr_accessor :certification

      # @return [String]
      attr_accessor :characteristic

      # @return [String]
      attr_accessor :container_information

      # @return [String]
      attr_accessor :geographical_origin

      # @return [String]
      attr_accessor :ingredient

      # @return [String]
      attr_accessor :labelling_characteristic

      # @return [String]
      attr_accessor :nature_origin

      # @return [String]
      attr_accessor :nutrient_characteristic

      # @return [String]
      attr_accessor :part_origin

      # @return [String]
      attr_accessor :physical_characteristic

      # @return [String]
      attr_accessor :type

      # @return [String]
      attr_accessor :unit

      # @return [String]
      attr_accessor :variant

      # @return [String]
      attr_accessor :process_of

      # @return [String]
      attr_accessor :referenced_by

      # @return [ProductOption]
      attr_accessor :reference_product_option

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @image = image
        @url = url
        @brand = brand
        @claim = claim
        @percentage_of_alcohol_by_volume = percentageOfAlcoholByVolume
        @lifetime = lifetime
        @physical_characteristics = physicalCharacteristics
        @quantity = quantity
        @specific_condition = specificCondition
        @composes = composes
        @consumed_by = consumedBy
        @allergen_characteristic = allergenCharacteristic
        @certification = certification
        @characteristic = characteristic
        @container_information = containerInformation
        @geographical_origin = geographicalOrigin
        @ingredient = ingredient
        @labelling_characteristic = labellingCharacteristic
        @nature_origin = natureOrigin
        @nutrient_characteristic = nutrientCharacteristic
        @part_origin = partOrigin
        @physical_characteristic = physicalCharacteristic
        @type = type
        @unit = unit
        @variant = variant
        @process_of = processOf
        @referenced_by = referencedBy
        @reference_product_option = referenceProductOption
        self.semanticType = "dfc-b:DefinedProduct"
        registerSemanticProperty("dfc-b:Image", &method("image")).valueSetter = method("image=")
        registerSemanticProperty("dfc-b:URL", &method("url")).valueSetter = method("url=")
        registerSemanticProperty("dfc-b:brand", &method("brand")).valueSetter = method("brand=")
        registerSemanticProperty("dfc-b:claim", &method("claim")).valueSetter = method("claim=")
        registerSemanticProperty("dfc-b:hasPercentageOfAlcoholByVolume", &method("percentage_of_alcohol_by_volume")).valueSetter = method("percentage_of_alcohol_by_volume=")
        registerSemanticProperty("dfc-b:lifetime", &method("lifetime")).valueSetter = method("lifetime=")
        registerSemanticProperty("dfc-b:physicalCharacteristics", &method("physical_characteristics")).valueSetter = method("physical_characteristics=")
        registerSemanticProperty("dfc-b:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:specificCondition", &method("specific_condition")).valueSetter = method("specific_condition=")
        registerSemanticProperty("dfc-b:composes", &method("composes")).valueSetter = method("composes=")
        registerSemanticProperty("dfc-b:consumedBy", &method("consumed_by")).valueSetter = method("consumed_by=")
        registerSemanticProperty("dfc-b:hasAllergenCharacteristic", &method("allergen_characteristic")).valueSetter = method("allergen_characteristic=")
        registerSemanticProperty("dfc-b:hasCertification", &method("certification")).valueSetter = method("certification=")
        registerSemanticProperty("dfc-b:hasCharacteristic", &method("characteristic")).valueSetter = method("characteristic=")
        registerSemanticProperty("dfc-b:hasContainerInformation", &method("container_information")).valueSetter = method("container_information=")
        registerSemanticProperty("dfc-b:hasGeographicalOrigin", &method("geographical_origin")).valueSetter = method("geographical_origin=")
        registerSemanticProperty("dfc-b:hasIngredient", &method("ingredient")).valueSetter = method("ingredient=")
        registerSemanticProperty("dfc-b:hasLabellingCharacteristic", &method("labelling_characteristic")).valueSetter = method("labelling_characteristic=")
        registerSemanticProperty("dfc-b:hasNatureOrigin", &method("nature_origin")).valueSetter = method("nature_origin=")
        registerSemanticProperty("dfc-b:hasNutrientCharacteristic", &method("nutrient_characteristic")).valueSetter = method("nutrient_characteristic=")
        registerSemanticProperty("dfc-b:hasPartOrigin", &method("part_origin")).valueSetter = method("part_origin=")
        registerSemanticProperty("dfc-b:hasPhysicalCharacteristic", &method("physical_characteristic")).valueSetter = method("physical_characteristic=")
        registerSemanticProperty("dfc-b:hasType", &method("type")).valueSetter = method("type=")
        registerSemanticProperty("dfc-b:hasUnit", &method("unit")).valueSetter = method("unit=")
        registerSemanticProperty("dfc-b:hasVariant", &method("variant")).valueSetter = method("variant=")
        registerSemanticProperty("dfc-b:processOf", &method("process_of")).valueSetter = method("process_of=")
        registerSemanticProperty("dfc-b:referencedBy", &method("referenced_by")).valueSetter = method("referenced_by=")
        registerSemanticProperty("dfc-b:hasReferenceProductOption", &method("reference_product_option")).valueSetter = method("reference_product_option=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
