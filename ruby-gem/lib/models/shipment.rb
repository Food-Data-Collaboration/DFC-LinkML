# frozen_string_literal: true

# Class from DFC Business Ontology: #Shipment
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class Shipment < Core::Relation
      SEMANTIC_TYPE = "dfc-b:Shipment".freeze

    end
  end
end
