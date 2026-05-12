# frozen_string_literal: true

# Class from DFC Business Ontology: #Geometry
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class Geometry < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Geometry".freeze

    end
  end
end
