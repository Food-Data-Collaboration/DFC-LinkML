# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedLocalProductionFlow
require_relative '../core/semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedLocalProductionFlow < ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedLocalProductionFlow".freeze

    end
  end
end
