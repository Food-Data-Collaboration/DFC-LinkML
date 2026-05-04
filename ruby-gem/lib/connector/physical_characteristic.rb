# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalCharacteristic
require_relative '../semantic_object'


class PhysicalCharacteristic < SemanticObject
  SEMANTIC_TYPE = "dfc-b:PhysicalCharacteristic".freeze

  # @return [String]
  attr_accessor :physical_dimension

  # @param semanticId [String]
  # @param physicalDimension: nil
  def initialize(semanticId, physicalDimension: nil)
    super(semanticId)
    @physical_dimension = physicalDimension
    self.semanticType = "dfc-b:PhysicalCharacteristic"
    registerSemanticProperty("dfc-b:PhysicalCharacteristic:hasPhysicalDimension", &method("physical_dimension")).valueSetter = method("physical_dimension=")
  end

end
