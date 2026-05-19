# frozen_string_literal: true

# Class from DFC Business Ontology: #DFC_BusinessOntology_Subject
require_relative 'semantic_object'
require_relative 'represented_thing'


module DfcLinkmlConnector
  module Models
    class Subject < Core::RepresentedThing
      SEMANTIC_TYPE = "dfc-b:DFC_BusinessOntology_Subject".freeze

    end
  end
end
