# frozen_string_literal: true

# Class from DFC Business Ontology: #TheoriticalStock
require_relative '../semantic_object'
require_relative 'stock'


class TheoriticalStock < Stock
  SEMANTIC_TYPE = "dfc-b:TheoriticalStock".freeze

end
