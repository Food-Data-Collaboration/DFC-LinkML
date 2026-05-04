# frozen_string_literal: true

# Class from DFC Business Ontology: #OrderLine
require_relative '../semantic_object'
require_relative 'relation'


class OrderLine < Relation
  SEMANTIC_TYPE = "dfc-b:OrderLine".freeze

end
