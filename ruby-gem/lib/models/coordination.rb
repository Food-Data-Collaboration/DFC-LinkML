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
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @return [Organization, String]
      attr_accessor :coordinated_by

      # @return [SaleSession, String]
      attr_accessor :object

      # @param semanticId [String]
      # @param marginPercent: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, coordinatedBy: nil, object: nil
      def initialize(semanticId, marginPercent: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, coordinatedBy: nil, object: nil)
        super(semanticId)
        @margin_percent = marginPercent
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @coordinated_by = coordinatedBy
        @object = object
        self.semanticType = "dfc-b:Coordination"
        registerSemanticProperty("dfc-b:marginPercent", &method("margin_percent")).valueSetter = method("margin_percent=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("dfc-b:coordinatedBy", &method("coordinated_by")).valueSetter = method("coordinated_by=")
        registerSemanticProperty("dfc-b:hasObject", &method("object")).valueSetter = method("object=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
