# frozen_string_literal: true

# Class from DFC Business Ontology: #AsRealizedProductionFlow
require_relative 'semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsRealizedProductionFlow < Core::ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsRealizedProductionFlow".freeze

    end
  end
end
