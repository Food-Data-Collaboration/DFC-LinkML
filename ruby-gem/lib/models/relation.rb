# frozen_string_literal: true

# Class from DFC Business Ontology: #DFC_BusinessOntology_Relation
require_relative 'semantic_object'
require_relative 'represented_thing'


module DfcLinkmlConnector
  module Models
    class Relation < Core::RepresentedThing
      SEMANTIC_TYPE = "dfc-b:DFC_BusinessOntology_Relation".freeze

    end
  end
end
