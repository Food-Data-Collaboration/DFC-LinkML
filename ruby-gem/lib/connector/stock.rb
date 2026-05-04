# frozen_string_literal: true

# Class from DFC Business Ontology: #Stock
require_relative '../semantic_object'
require_relative 'relation'


class Stock < Relation
  SEMANTIC_TYPE = "dfc-b:Stock".freeze

end
