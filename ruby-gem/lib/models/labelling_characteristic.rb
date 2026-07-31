# frozen_string_literal: true

# Class from DFC Business Ontology: #LabellingCharacteristic
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class LabellingCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:LabellingCharacteristic".freeze

      # @return [String]
      attr_accessor :labelling_dimension

      # @return [String]
      attr_accessor :labelling_characteristic_of

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
      # @param labellingDimension: nil, labellingCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, labellingDimension: nil, labellingCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @labelling_dimension = labellingDimension
        @labelling_characteristic_of = labellingCharacteristicOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:LabellingCharacteristic"
        registerSemanticProperty("dfc-b:LabellingCharacteristic:has_labelling_dimension", &method("labelling_dimension")).valueSetter = method("labelling_dimension=")
        registerSemanticProperty("dfc-b:LabellingCharacteristic:labelling_characteristic_of", &method("labelling_characteristic_of")).valueSetter = method("labelling_characteristic_of=")
        registerSemanticProperty("dfc-b:LabellingCharacteristic:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:LabellingCharacteristic:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:LabellingCharacteristic:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:LabellingCharacteristic:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:LabellingCharacteristic:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
