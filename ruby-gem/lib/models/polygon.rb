# frozen_string_literal: true

# Class from DFC Business Ontology: #Polygon
require_relative '../core/semantic_object'
require_relative 'geometry'


module DfcLinkmlConnector
  module Models
    class Polygon < Geometry
      SEMANTIC_TYPE = "dfc-b:Polygon".freeze

      # @param semanticId [String]
      # @param coordinates: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, coordinates: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId, coordinates: coordinates, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)

        self.semanticType = "dfc-b:Polygon"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
