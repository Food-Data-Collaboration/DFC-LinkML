# frozen_string_literal: true

# Class from DFC Business Ontology: #Length
require_relative 'semantic_object'
require_relative 'quantitative_value'


module DfcLinkmlConnector
  module Models
    class Length < Core::QuantitativeValue
      SEMANTIC_TYPE = "dfc-b:Length".freeze

    end
  end
end
