# frozen_string_literal: true

# Class from DFC Business Ontology: #Organization
require_relative '../semantic_object'
require_relative 'agent'


class Organization < Agent
  SEMANTIC_TYPE = "dfc-b:Organization".freeze

  # @return [String]
  attr_accessor :operator_id

  # @return [TemplateSaleSession]
  attr_accessor :template_sale_session

  # @param semanticId [String]
  # @param operatorId: nil, templateSaleSession: nil
  def initialize(semanticId, operatorId: nil, templateSaleSession: nil)
    super(semanticId)
    @operator_id = operatorId
    @template_sale_session = templateSaleSession
    self.semanticType = "dfc-b:Organization"
    registerSemanticProperty("dfc-b:Organization:operatorId", &method("operator_id")).valueSetter = method("operator_id=")
    registerSemanticProperty("dfc-b:Organization:hasTemplateSaleSession", &method("template_sale_session")).valueSetter = method("template_sale_session=")
  end

end
