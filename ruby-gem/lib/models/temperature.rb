# frozen_string_literal: true

# Class from DFC Business Ontology: #Temperature
require_relative 'semantic_object'
require_relative 'quantitative_value'


module DfcLinkmlConnector
  module Models
    class Temperature < Core::QuantitativeValue
      SEMANTIC_TYPE = "dfc-b:Temperature".freeze

    end
  end
end
