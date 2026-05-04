# frozen_string_literal: true

# Class from DFC Business Ontology: #Offer
require_relative '../semantic_object'
require_relative 'relation'


class Offer < Relation
  SEMANTIC_TYPE = "dfc-b:Offer".freeze

  # @return [String]
  attr_accessor :availability_date

  # @return [String]
  attr_accessor :discount

  # @return [String]
  attr_accessor :margin_percent

  # @return [Price]
  attr_accessor :price

  # @param semanticId [String]
  # @param availabilityDate: nil, discount: nil, marginPercent: nil, price: nil
  def initialize(semanticId, availabilityDate: nil, discount: nil, marginPercent: nil, price: nil)
    super(semanticId)
    @availability_date = availabilityDate
    @discount = discount
    @margin_percent = marginPercent
    @price = price
    self.semanticType = "dfc-b:Offer"
    registerSemanticProperty("dfc-b:Offer:availabilityDate", &method("availability_date")).valueSetter = method("availability_date=")
    registerSemanticProperty("dfc-b:Offer:discount", &method("discount")).valueSetter = method("discount=")
    registerSemanticProperty("dfc-b:Offer:marginPercent", &method("margin_percent")).valueSetter = method("margin_percent=")
    registerSemanticProperty("dfc-b:Offer:hasPrice", &method("price")).valueSetter = method("price=")
  end

end
