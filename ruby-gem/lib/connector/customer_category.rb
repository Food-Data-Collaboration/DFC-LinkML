# frozen_string_literal: true

# Class from DFC Business Ontology: #CustomerCategory
require_relative '../semantic_object'
require_relative 'who_subject'


class CustomerCategory < WhoSubject
  SEMANTIC_TYPE = "dfc-b:CustomerCategory".freeze

  # @return [Agent]
  attr_accessor :member

  # @return [Offer]
  attr_accessor :offer

  # @param semanticId [String]
  # @param member: nil, offer: nil
  def initialize(semanticId, member: nil, offer: nil)
    super(semanticId)
    @member = member
    @offer = offer
    self.semanticType = "dfc-b:CustomerCategory"
    registerSemanticProperty("dfc-b:CustomerCategory:hasMember", &method("member")).valueSetter = method("member=")
    registerSemanticProperty("dfc-b:CustomerCategory:hasOffer", &method("offer")).valueSetter = method("offer=")
  end

end
