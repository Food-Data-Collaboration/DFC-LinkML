# frozen_string_literal: true

# Class from DFC Business Ontology: #RealStock
require_relative '../core/semantic_object'
require_relative 'stock'


module DfcLinkmlConnector
  module Models
    class RealStock < Stock
      SEMANTIC_TYPE = "dfc-b:RealStock".freeze

    end
  end
end
