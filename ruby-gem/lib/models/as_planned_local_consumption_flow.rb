# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedLocalConsumptionFlow
require_relative 'semantic_object'
require_relative 'consumption_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedLocalConsumptionFlow < Core::ConsumptionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedLocalConsumptionFlow".freeze

    end
  end
end
