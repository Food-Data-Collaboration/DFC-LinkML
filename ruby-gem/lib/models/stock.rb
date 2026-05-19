# frozen_string_literal: true

# Class from DFC Business Ontology: #Stock
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class Stock < Core::Relation
      SEMANTIC_TYPE = "dfc-b:Stock".freeze

    end
  end
end
