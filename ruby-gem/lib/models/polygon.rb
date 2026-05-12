# frozen_string_literal: true

# Class from DFC Business Ontology: #Polygon
require_relative 'semantic_object'
require_relative 'geometry'


module DfcLinkmlConnector
  module Models
    class Polygon < Core::Geometry
      SEMANTIC_TYPE = "dfc-b:Polygon".freeze

    end
  end
end
