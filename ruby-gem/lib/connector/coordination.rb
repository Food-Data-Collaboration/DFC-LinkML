# frozen_string_literal: true

# Class from DFC Business Ontology: #Coordination
require_relative '../semantic_object'
require_relative 'relation'


class Coordination < Relation
  SEMANTIC_TYPE = "dfc-b:Coordination".freeze

  # @return [String]
  attr_accessor :object

  # @param semanticId [String]
  # @param object: nil
  def initialize(semanticId, object: nil)
    super(semanticId)
    @object = object
    self.semanticType = "dfc-b:Coordination"
    registerSemanticProperty("dfc-b:Coordination:hasObject", &method("object")).valueSetter = method("object=")
  end

end
