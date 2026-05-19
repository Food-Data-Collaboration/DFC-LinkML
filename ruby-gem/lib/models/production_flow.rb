# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductionFlow
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class ProductionFlow < Core::Relation
      SEMANTIC_TYPE = "dfc-b:ProductionFlow".freeze

    end
  end
end
