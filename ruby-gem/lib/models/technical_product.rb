# frozen_string_literal: true

# Class from DFC Business Ontology: #TechnicalProduct
require_relative 'semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class TechnicalProduct < Core::DefinedProduct
      SEMANTIC_TYPE = "dfc-b:TechnicalProduct".freeze

    end
  end
end
