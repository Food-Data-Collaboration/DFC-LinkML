# frozen_string_literal: true

# Class from DFC Business Ontology: #Temperature
require_relative '../semantic_object'
require_relative 'quantitative_value'


class Temperature < QuantitativeValue
  SEMANTIC_TYPE = "dfc-b:Temperature".freeze

end
