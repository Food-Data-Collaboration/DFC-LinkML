# frozen_string_literal: true

# Class from DFC Business Ontology: #Variant
require_relative '../core/semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class Variant < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:Variant".freeze

      # @return [String]
      attr_accessor :is_variant_of

      # @return [VariantCaracteristic]
      attr_accessor :variant_caracteristic

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, isVariantOf: nil, variantCaracteristic: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, isVariantOf: nil, variantCaracteristic: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, image: image, url: url, brand: brand, claim: claim, percentageOfAlcoholByVolume: percentageOfAlcoholByVolume, lifetime: lifetime, physicalCharacteristics: physicalCharacteristics, quantity: quantity, specificCondition: specificCondition, composes: composes, consumedBy: consumedBy, allergenCharacteristic: allergenCharacteristic, certification: certification, characteristic: characteristic, containerInformation: containerInformation, geographicalOrigin: geographicalOrigin, ingredient: ingredient, labellingCharacteristic: labellingCharacteristic, natureOrigin: natureOrigin, nutrientCharacteristic: nutrientCharacteristic, partOrigin: partOrigin, physicalCharacteristic: physicalCharacteristic, type: type, unit: unit, variant: variant, processOf: processOf, referencedBy: referencedBy, referenceProductOption: referenceProductOption)
        @is_variant_of = isVariantOf
        @variant_caracteristic = variantCaracteristic
        self.semanticType = "dfc-b:Variant"
        registerSemanticProperty("dfc-b:isVariantOf", &method("is_variant_of")).valueSetter = method("is_variant_of=")
        registerSemanticProperty("dfc-b:hasVariantCaracteristic", &method("variant_caracteristic")).valueSetter = method("variant_caracteristic=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
