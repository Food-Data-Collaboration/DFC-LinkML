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
      attr_accessor :produced_by

      # @return [Array<TechnicalProduct, String>]
      attr_accessor :industrializes

      # @return [LocalizedProduct, String]
      attr_accessor :reference_of

      # @return [Organization, String]
      attr_accessor :supplied_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, hasBrand: nil, certification: nil, characteristic: nil, hasClaim: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, hasQuantity: nil, referenceProductOption: nil, referencedBy: nil, availabilityTime: nil, deliveryCondition: nil, frozen: nil, refrigerated: nil, totalTheoriticalStock: nil, temperature: nil, producedBy: nil, industrializes: [], referenceOf: nil, suppliedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, image: nil, url: nil, brand: nil, claim: nil, percentageOfAlcoholByVolume: nil, lifetime: nil, physicalCharacteristics: nil, quantity: nil, specificCondition: nil, composes: nil, consumedBy: nil, allergenCharacteristic: nil, hasBrand: nil, certification: nil, characteristic: nil, hasClaim: nil, containerInformation: nil, geographicalOrigin: nil, ingredient: nil, labellingCharacteristic: nil, natureOrigin: nil, nutrientCharacteristic: nil, partOrigin: nil, physicalCharacteristic: nil, type: nil, unit: nil, variant: nil, processOf: nil, hasQuantity: nil, referenceProductOption: nil, referencedBy: nil, availabilityTime: nil, deliveryCondition: nil, frozen: nil, refrigerated: nil, totalTheoriticalStock: nil, temperature: nil, producedBy: nil, industrializes: [], referenceOf: nil, suppliedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, image: image, url: url, brand: brand, claim: claim, percentageOfAlcoholByVolume: percentageOfAlcoholByVolume, lifetime: lifetime, physicalCharacteristics: physicalCharacteristics, quantity: quantity, specificCondition: specificCondition, composes: composes, consumedBy: consumedBy, allergenCharacteristic: allergenCharacteristic, hasBrand: hasBrand, certification: certification, characteristic: characteristic, hasClaim: hasClaim, containerInformation: containerInformation, geographicalOrigin: geographicalOrigin, ingredient: ingredient, labellingCharacteristic: labellingCharacteristic, natureOrigin: natureOrigin, nutrientCharacteristic: nutrientCharacteristic, partOrigin: partOrigin, physicalCharacteristic: physicalCharacteristic, type: type, unit: unit, variant: variant, processOf: processOf, hasQuantity: hasQuantity, referenceProductOption: referenceProductOption, referencedBy: referencedBy)
        @availability_time = availabilityTime
        @delivery_condition = deliveryCondition
        @frozen = frozen
        @refrigerated = refrigerated
        @total_theoritical_stock = totalTheoriticalStock
        @temperature = temperature
        @produced_by = producedBy
        @industrializes = industrializes
        @reference_of = referenceOf
        @supplied_by = suppliedBy
        self.semanticType = "dfc-b:SuppliedProduct"
        registerSemanticProperty("dfc-b:availabilityTime", &method("availability_time")).valueSetter = method("availability_time=")
        registerSemanticProperty("dfc-b:deliveryCondition", &method("delivery_condition")).valueSetter = method("delivery_condition=")
        registerSemanticProperty("dfc-b:frozen", &method("frozen")).valueSetter = method("frozen=")
        registerSemanticProperty("dfc-b:refrigerated", &method("refrigerated")).valueSetter = method("refrigerated=")
        registerSemanticProperty("dfc-b:totalTheoriticalStock", &method("total_theoritical_stock")).valueSetter = method("total_theoritical_stock=")
        registerSemanticProperty("dfc-b:hasTemperature", &method("temperature")).valueSetter = method("temperature=")
        registerSemanticProperty("dfc-b:producedBy", &method("produced_by")).valueSetter = method("produced_by=")
        registerSemanticProperty("dfc-b:industrializes", &method("industrializes")).valueSetter = method("industrializes=")
        registerSemanticProperty("dfc-b:referenceOf", &method("reference_of")).valueSetter = method("reference_of=")
        registerSemanticProperty("dfc-b:suppliedBy", &method("supplied_by")).valueSetter = method("supplied_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
