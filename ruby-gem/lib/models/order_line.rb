# frozen_string_literal: true

# Class from DFC Business Ontology: #OrderLine
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class OrderLine < Core::Relation
      SEMANTIC_TYPE = "dfc-b:OrderLine".freeze

    end
  end
end
