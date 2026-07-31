# frozen_string_literal: true

# Class from DFC Business Ontology: #Coordination
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Coordination < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Coordination".freeze

      # @return [Float]
      attr_accessor :margin_percent

      # @return [String]
      attr_accessor :coordinated_by

      # @return [String]
      attr_accessor :object

      # @return [String]
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @param semanticId [String]
      # @param marginPercent: nil, coordinatedBy: nil, object: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, marginPercent: nil, coordinatedBy: nil, object: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @margin_percent = marginPercent
        @coordinated_by = coordinatedBy
        @object = object
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Coordination"
        registerSemanticProperty("dfc-b:Coordination:margin_percent", &method("margin_percent")).valueSetter = method("margin_percent=")
        registerSemanticProperty("dfc-b:Coordination:coordinated_by", &method("coordinated_by")).valueSetter = method("coordinated_by=")
        registerSemanticProperty("dfc-b:Coordination:has_object", &method("object")).valueSetter = method("object=")
        registerSemanticProperty("dfc-b:Coordination:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Coordination:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Coordination:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Coordination:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Coordination:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
