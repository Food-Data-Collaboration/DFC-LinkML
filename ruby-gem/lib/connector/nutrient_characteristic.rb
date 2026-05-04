# frozen_string_literal: true

# Class from DFC Business Ontology: #NutrientCharacteristic
require_relative '../semantic_object'


class NutrientCharacteristic < SemanticObject
  SEMANTIC_TYPE = "dfc-b:NutrientCharacteristic".freeze

  # @return [String]
  attr_accessor :nutrient_dimension

  # @param semanticId [String]
  # @param nutrientDimension: nil
  def initialize(semanticId, nutrientDimension: nil)
    super(semanticId)
    @nutrient_dimension = nutrientDimension
    self.semanticType = "dfc-b:NutrientCharacteristic"
    registerSemanticProperty("dfc-b:NutrientCharacteristic:hasNutrientDimension", &method("nutrient_dimension")).valueSetter = method("nutrient_dimension=")
  end

end
