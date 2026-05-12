# frozen_string_literal: true

# Class from DFC Business Ontology: #VirtualPlace
require_relative 'semantic_object'
require_relative 'place'


module DfcLinkmlConnector
  module Models
    class VirtualPlace < Core::Place
      SEMANTIC_TYPE = "dfc-b:VirtualPlace".freeze

    end
  end
end
