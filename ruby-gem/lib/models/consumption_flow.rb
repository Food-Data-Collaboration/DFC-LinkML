# frozen_string_literal: true

# Class from DFC Business Ontology: #ConsumptionFlow
require_relative '../core/semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class ConsumptionFlow < Relation
      SEMANTIC_TYPE = "dfc-b:ConsumptionFlow".freeze

    end
  end
end
