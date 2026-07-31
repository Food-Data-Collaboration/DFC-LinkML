# frozen_string_literal: true

# Class from DFC Business Ontology: #FunctionalProduct
require_relative '../core/semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class FunctionalProduct < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:FunctionalProduct".freeze

      # @return [String]
      attr_accessor :requested_by

      # @return [String]
      attr_accessor :satisfied_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, requestedBy: nil, satisfiedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, requestedBy: nil, satisfiedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, image: image, url: url, brand: brand, claim: claim, percentageOfAlcoholByVolume: percentageOfAlcoholByVolume, lifetime: lifetime, physicalCharacteristics: physicalCharacteristics, quantity: quantity, specificCondition: specificCondition, composes: composes, consumedBy: consumedBy, allergenCharacteristic: allergenCharacteristic, certification: certification, characteristic: characteristic, containerInformation: containerInformation, geographicalOrigin: geographicalOrigin, ingredient: ingredient, labellingCharacteristic: labellingCharacteristic, natureOrigin: natureOrigin, nutrientCharacteristic: nutrientCharacteristic, partOrigin: partOrigin, physicalCharacteristic: physicalCharacteristic, type: type, unit: unit, variant: variant, processOf: processOf, referencedBy: referencedBy, referenceProductOption: referenceProductOption)
        @requested_by = requestedBy
        @satisfied_by = satisfiedBy
        self.semanticType = "dfc-b:FunctionalProduct"
        registerSemanticProperty("dfc-b:FunctionalProduct:requested_by", &method("requested_by")).valueSetter = method("requested_by=")
        registerSemanticProperty("dfc-b:FunctionalProduct:satisfied_by", &method("satisfied_by")).valueSetter = method("satisfied_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
