# frozen_string_literal: true

# Class from DFC Business Ontology: #FunctionalProduct
require_relative '../core/semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class FunctionalProduct < DefinedProduct
      SEMANTIC_TYPE = "dfc-b:FunctionalProduct".freeze

    end
  end
end
