# frozen_string_literal: true

# Class from DFC Business Ontology: #TechnicalProduct
require_relative '../core/semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class TechnicalProduct < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:TechnicalProduct".freeze

    end
  end
end
