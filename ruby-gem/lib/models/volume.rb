# frozen_string_literal: true

# Class from DFC Business Ontology: #Volume
require_relative '../core/semantic_object'
require_relative 'quantitative_value'


module DfcLinkmlConnector
  module Models
    class Volume < QuantitativeValue
      SEMANTIC_TYPE = "dfc-b:Volume".freeze

    end
  end
end
