# frozen_string_literal: true

# Class from DFC Business Ontology: #Shipment
require_relative '../core/semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class Shipment < Relation
      SEMANTIC_TYPE = "dfc-b:Shipment".freeze

    end
  end
end
