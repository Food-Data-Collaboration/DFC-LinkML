# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedProductionFlow
require_relative 'semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedProductionFlow < Core::ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedProductionFlow".freeze

    end
  end
end
