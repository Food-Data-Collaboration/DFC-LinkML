# frozen_string_literal: true

# Class from DFC Business Ontology: #NutrientCharacteristic
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class NutrientCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:NutrientCharacteristic".freeze

      # @return [String]
      attr_accessor :nutrient_dimension

      # @return [String]
      attr_accessor :nutrient_characteristic_of

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
      # @param nutrientDimension: nil, nutrientCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, nutrientDimension: nil, nutrientCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @nutrient_dimension = nutrientDimension
        @nutrient_characteristic_of = nutrientCharacteristicOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:NutrientCharacteristic"
        registerSemanticProperty("dfc-b:NutrientCharacteristic:has_nutrient_dimension", &method("nutrient_dimension")).valueSetter = method("nutrient_dimension=")
        registerSemanticProperty("dfc-b:NutrientCharacteristic:nutrient_characteristic_of", &method("nutrient_characteristic_of")).valueSetter = method("nutrient_characteristic_of=")
        registerSemanticProperty("dfc-b:NutrientCharacteristic:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:NutrientCharacteristic:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:NutrientCharacteristic:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:NutrientCharacteristic:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:NutrientCharacteristic:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
