# frozen_string_literal: true

# Class from DFC Business Ontology: #AsRealizedConsumptionFlow
require_relative 'semantic_object'
require_relative 'consumption_flow'


module DfcLinkmlConnector
  module Models
    class AsRealizedConsumptionFlow < Core::ConsumptionFlow
      SEMANTIC_TYPE = "dfc-b:AsRealizedConsumptionFlow".freeze

    end
  end
end
