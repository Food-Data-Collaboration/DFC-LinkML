# frozen_string_literal: true

# Class from DFC Business Ontology: #Volume
require_relative '../semantic_object'
require_relative 'quantitative_value'


class Volume < QuantitativeValue
  SEMANTIC_TYPE = "dfc-b:Volume".freeze

end
