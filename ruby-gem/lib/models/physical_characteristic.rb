# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalCharacteristic
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class PhysicalCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:PhysicalCharacteristic".freeze

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

      # @return [Concept, String]
      attr_accessor :physical_dimension

      # @param semanticId [String]
      # @param physicalCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, physicalDimension: nil
      def initialize(semanticId, physicalCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, physicalDimension: nil)
        super(semanticId)
        @physical_characteristic_of = physicalCharacteristicOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @physical_dimension = physicalDimension
        self.semanticType = "dfc-b:PhysicalCharacteristic"
        registerSemanticProperty("dfc-b:physicalCharacteristicOf", &method("physical_characteristic_of")).valueSetter = method("physical_characteristic_of=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("dfc-b:hasPhysicalDimension", &method("physical_dimension")).valueSetter = method("physical_dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
