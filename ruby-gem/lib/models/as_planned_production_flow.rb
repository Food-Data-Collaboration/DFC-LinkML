# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedProductionFlow
require_relative '../core/semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedProductionFlow < ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedProductionFlow".freeze

    end
  end
end
