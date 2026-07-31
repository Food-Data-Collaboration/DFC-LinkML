# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalCharacteristic
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class PhysicalCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:PhysicalCharacteristic".freeze

      # @return [String]
      attr_accessor :physical_dimension

      # @return [String]
      attr_accessor :physical_characteristic_of

      # @return [String]
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @param semanticId [String]
      # @param physicalDimension: nil, physicalCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, physicalDimension: nil, physicalCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @physical_dimension = physicalDimension
        @physical_characteristic_of = physicalCharacteristicOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:PhysicalCharacteristic"
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:has_physical_dimension", &method("physical_dimension")).valueSetter = method("physical_dimension=")
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:physical_characteristic_of", &method("physical_characteristic_of")).valueSetter = method("physical_characteristic_of=")
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:PhysicalCharacteristic:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
