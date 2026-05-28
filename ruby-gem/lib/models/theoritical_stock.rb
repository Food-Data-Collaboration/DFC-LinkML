# frozen_string_literal: true

# Class from DFC Business Ontology: #TheoriticalStock
require_relative '../core/semantic_object'
require_relative 'stock'


module DfcLinkmlConnector
  module Models
    class TheoriticalStock < Stock
      SEMANTIC_TYPE = "dfc-b:TheoriticalStock".freeze

    end
  end
end
