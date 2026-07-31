# frozen_string_literal: true

# Class from DFC Business Ontology: #TechnicalProduct
require_relative '../core/semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class TechnicalProduct < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:TechnicalProduct".freeze

      # @return [String]
      attr_accessor :industrialized_by

      # @return [String]
      attr_accessor :proposed_by

      # @return [String]
      attr_accessor :satisfies

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, industrializedBy: nil, proposedBy: nil, satisfies: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, industrializedBy: nil, proposedBy: nil, satisfies: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, image: image, url: url, brand: brand, claim: claim, percentageOfAlcoholByVolume: percentageOfAlcoholByVolume, lifetime: lifetime, physicalCharacteristics: physicalCharacteristics, quantity: quantity, specificCondition: specificCondition, composes: composes, consumedBy: consumedBy, allergenCharacteristic: allergenCharacteristic, certification: certification, characteristic: characteristic, containerInformation: containerInformation, geographicalOrigin: geographicalOrigin, ingredient: ingredient, labellingCharacteristic: labellingCharacteristic, natureOrigin: natureOrigin, nutrientCharacteristic: nutrientCharacteristic, partOrigin: partOrigin, physicalCharacteristic: physicalCharacteristic, type: type, unit: unit, variant: variant, processOf: processOf, referencedBy: referencedBy, referenceProductOption: referenceProductOption)
        @industrialized_by = industrializedBy
        @proposed_by = proposedBy
        @satisfies = satisfies
        self.semanticType = "dfc-b:TechnicalProduct"
        registerSemanticProperty("dfc-b:TechnicalProduct:industrialized_by", &method("industrialized_by")).valueSetter = method("industrialized_by=")
        registerSemanticProperty("dfc-b:TechnicalProduct:proposed_by", &method("proposed_by")).valueSetter = method("proposed_by=")
        registerSemanticProperty("dfc-b:TechnicalProduct:satisfies", &method("satisfies")).valueSetter = method("satisfies=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
