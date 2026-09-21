# frozen_string_literal: true

# Class from DFC Business Ontology: #NutrientCharacteristic
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class NutrientCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:NutrientCharacteristic".freeze

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

      # @return [Concept, String]
      attr_accessor :nutrient_dimension

      # @param semanticId [String]
      # @param nutrientCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, nutrientDimension: nil
      def initialize(semanticId, nutrientCharacteristicOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, nutrientDimension: nil)
        super(semanticId)
        @nutrient_characteristic_of = nutrientCharacteristicOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @nutrient_dimension = nutrientDimension
        self.semanticType = "dfc-b:NutrientCharacteristic"
        registerSemanticProperty("dfc-b:nutrientCharacteristicOf", &method("nutrient_characteristic_of")).valueSetter = method("nutrient_characteristic_of=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("dfc-b:hasNutrientDimension", &method("nutrient_dimension")).valueSetter = method("nutrient_dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
