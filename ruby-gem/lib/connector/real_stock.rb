# frozen_string_literal: true

# Class from DFC Business Ontology: #RealStock
require_relative '../semantic_object'
require_relative 'stock'


class RealStock < Stock
  SEMANTIC_TYPE = "dfc-b:RealStock".freeze

end
