# frozen_string_literal: true

# Class from DFC Business Ontology: #DFC_BusinessOntology_Characteristic
require_relative '../semantic_object'
require_relative 'represented_thing'


class Characteristic < RepresentedThing
  SEMANTIC_TYPE = "dfc-b:DFC_BusinessOntology_Characteristic".freeze

  # @return [String]
  attr_accessor :dimension

  # @param semanticId [String]
  # @param dimension: nil
  def initialize(semanticId, dimension: nil)
    super(semanticId)
    @dimension = dimension
    self.semanticType = "dfc-b:DFC_BusinessOntology_Characteristic"
    registerSemanticProperty("dfc-b:DFC_BusinessOntology_Characteristic:hasDimension", &method("dimension")).valueSetter = method("dimension=")
  end

end
