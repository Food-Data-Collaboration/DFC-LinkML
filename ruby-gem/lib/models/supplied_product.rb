# frozen_string_literal: true

# Class from DFC Business Ontology: #SuppliedProduct
require_relative '../core/semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class SuppliedProduct < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:SuppliedProduct".freeze

      # @return [String]
      attr_accessor :availability_time

      # @return [String]
      attr_accessor :delivery_condition

      # @return [Boolean]
      attr_accessor :frozen

      # @return [Boolean]
      attr_accessor :refrigerated

      # @return [Float]
      attr_accessor :total_theoritical_stock

      # @return [String]
      attr_accessor :temperature

      # @return [String]
      attr_accessor :industrializes

      # @return [String]
      attr_accessor :produced_by

      # @return [String]
      attr_accessor :reference_of

      # @return [String]
      attr_accessor :supplied_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, availabilityTime: nil, deliveryCondition: nil, frozen: nil, refrigerated: nil, totalTheoriticalStock: nil, temperature: nil, industrializes: nil, producedBy: nil, referenceOf: nil, suppliedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, certification: nil, characteristic: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, referencedBy: nil, referenceProductOption: nil, availabilityTime: nil, deliveryCondition: nil, frozen: nil, refrigerated: nil, totalTheoriticalStock: nil, temperature: nil, industrializes: nil, producedBy: nil, referenceOf: nil, suppliedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, image: image, url: url, brand: brand, claim: claim, percentageOfAlcoholByVolume: percentageOfAlcoholByVolume, lifetime: lifetime, physicalCharacteristics: physicalCharacteristics, quantity: quantity, specificCondition: specificCondition, composes: composes, consumedBy: consumedBy, allergenCharacteristic: allergenCharacteristic, certification: certification, characteristic: characteristic, containerInformation: containerInformation, geographicalOrigin: geographicalOrigin, ingredient: ingredient, labellingCharacteristic: labellingCharacteristic, natureOrigin: natureOrigin, nutrientCharacteristic: nutrientCharacteristic, partOrigin: partOrigin, physicalCharacteristic: physicalCharacteristic, type: type, unit: unit, variant: variant, processOf: processOf, referencedBy: referencedBy, referenceProductOption: referenceProductOption)
        @availability_time = availabilityTime
        @delivery_condition = deliveryCondition
        @frozen = frozen
        @refrigerated = refrigerated
        @total_theoritical_stock = totalTheoriticalStock
        @temperature = temperature
        @industrializes = industrializes
        @produced_by = producedBy
        @reference_of = referenceOf
        @supplied_by = suppliedBy
        self.semanticType = "dfc-b:SuppliedProduct"
        registerSemanticProperty("dfc-b:SuppliedProduct:availability_time", &method("availability_time")).valueSetter = method("availability_time=")
        registerSemanticProperty("dfc-b:SuppliedProduct:delivery_condition", &method("delivery_condition")).valueSetter = method("delivery_condition=")
        registerSemanticProperty("dfc-b:SuppliedProduct:frozen", &method("frozen")).valueSetter = method("frozen=")
        registerSemanticProperty("dfc-b:SuppliedProduct:refrigerated", &method("refrigerated")).valueSetter = method("refrigerated=")
        registerSemanticProperty("dfc-b:SuppliedProduct:total_theoritical_stock", &method("total_theoritical_stock")).valueSetter = method("total_theoritical_stock=")
        registerSemanticProperty("dfc-b:SuppliedProduct:has_temperature", &method("temperature")).valueSetter = method("temperature=")
        registerSemanticProperty("dfc-b:SuppliedProduct:industrializes", &method("industrializes")).valueSetter = method("industrializes=")
        registerSemanticProperty("dfc-b:SuppliedProduct:produced_by", &method("produced_by")).valueSetter = method("produced_by=")
        registerSemanticProperty("dfc-b:SuppliedProduct:reference_of", &method("reference_of")).valueSetter = method("reference_of=")
        registerSemanticProperty("dfc-b:SuppliedProduct:supplied_by", &method("supplied_by")).valueSetter = method("supplied_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
