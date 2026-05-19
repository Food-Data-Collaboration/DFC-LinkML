# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedConsumptionFlow
require_relative 'semantic_object'
require_relative 'consumption_flow'


module DfcLinkmlConnector
  module Models
    class AsPlannedConsumptionFlow < Core::ConsumptionFlow
      SEMANTIC_TYPE = "dfc-b:AsPlannedConsumptionFlow".freeze

    end
  end
end
