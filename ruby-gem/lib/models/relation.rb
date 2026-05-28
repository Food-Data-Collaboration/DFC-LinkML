# frozen_string_literal: true

# Class from DFC Business Ontology: #DFC_BusinessOntology_Relation
require_relative '../core/semantic_object'
require_relative 'represented_thing'


module DfcLinkmlConnector
  module Models
    class Relation < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:DFC_BusinessOntology_Relation".freeze

    end
  end
end
