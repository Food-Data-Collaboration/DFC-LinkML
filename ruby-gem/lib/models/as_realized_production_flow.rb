# frozen_string_literal: true

# Class from DFC Business Ontology: #AsRealizedProductionFlow
require_relative '../core/semantic_object'
require_relative 'production_flow'


module DfcLinkmlConnector
  module Models
    class AsRealizedProductionFlow < ProductionFlow
      SEMANTIC_TYPE = "dfc-b:AsRealizedProductionFlow".freeze

    end
  end
end
