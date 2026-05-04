# frozen_string_literal: true

# Class from DFC Business Ontology: #Shipment
require_relative '../semantic_object'
require_relative 'relation'


class Shipment < Relation
  SEMANTIC_TYPE = "dfc-b:Shipment".freeze

end
