# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalPlace
require_relative '../semantic_object'
require_relative 'place'


class PhysicalPlace < Place
  SEMANTIC_TYPE = "dfc-b:PhysicalPlace".freeze

  # @return [String]
  attr_accessor :accessibility_info

  # @param semanticId [String]
  # @param accessibilityInfo: nil
  def initialize(semanticId, accessibilityInfo: nil)
    super(semanticId)
    @accessibility_info = accessibilityInfo
    self.semanticType = "dfc-b:PhysicalPlace"
    registerSemanticProperty("dfc-b:PhysicalPlace:accessibilityInfo", &method("accessibility_info")).valueSetter = method("accessibility_info=")
  end

end
