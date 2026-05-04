# frozen_string_literal: true

# Class from DFC Business Ontology: #Person
require_relative '../semantic_object'
require_relative 'agent'


class Person < Agent
  SEMANTIC_TYPE = "dfc-b:Person".freeze

  # @return [String]
  attr_accessor :family_name

  # @return [String]
  attr_accessor :first_name

  # @param semanticId [String]
  # @param familyName: nil, firstName: nil
  def initialize(semanticId, familyName: nil, firstName: nil)
    super(semanticId)
    @family_name = familyName
    @first_name = firstName
    self.semanticType = "dfc-b:Person"
    registerSemanticProperty("dfc-b:Person:familyName", &method("family_name")).valueSetter = method("family_name=")
    registerSemanticProperty("dfc-b:Person:firstName", &method("first_name")).valueSetter = method("first_name=")
  end

end
