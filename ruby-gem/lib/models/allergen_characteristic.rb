# frozen_string_literal: true

# Class from DFC Business Ontology: #AllergenCharacteristic
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class AllergenCharacteristic < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:AllergenCharacteristic".freeze

      # @return [String]
      attr_accessor :allergen_characteristic_of

      # @return [String]
      attr_accessor :allergen_dimension

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
      # @param allergenCharacteristicOf: nil, allergenDimension: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, allergenCharacteristicOf: nil, allergenDimension: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @allergen_characteristic_of = allergenCharacteristicOf
        @allergen_dimension = allergenDimension
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:AllergenCharacteristic"
        registerSemanticProperty("dfc-b:AllergenCharacteristic:allergen_characteristic_of", &method("allergen_characteristic_of")).valueSetter = method("allergen_characteristic_of=")
        registerSemanticProperty("dfc-b:AllergenCharacteristic:has_allergen_dimension", &method("allergen_dimension")).valueSetter = method("allergen_dimension=")
        registerSemanticProperty("dfc-b:AllergenCharacteristic:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:AllergenCharacteristic:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:AllergenCharacteristic:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:AllergenCharacteristic:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:AllergenCharacteristic:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
