# frozen_string_literal: true

# Class from DFC Business Ontology: #Weight
require_relative '../semantic_object'
require_relative 'quantitative_value'


class Weight < QuantitativeValue
  SEMANTIC_TYPE = "dfc-b:Weight".freeze

end
