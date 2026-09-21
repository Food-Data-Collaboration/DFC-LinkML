# frozen_string_literal: true

# Class from DFC Business Ontology: #OpeningHoursSpecification
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class OpeningHoursSpecification < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:OpeningHoursSpecification".freeze

      # @return [String]
      attr_accessor :day_of_week

      # @return [String]
      attr_accessor :opens

      # @return [String]
      attr_accessor :closes

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
      # @param dayOfWeek: nil, opens: nil, closes: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, dayOfWeek: nil, opens: nil, closes: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @day_of_week = dayOfWeek
        @opens = opens
        @closes = closes
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:OpeningHoursSpecification"
        registerSemanticProperty("https://schema.org/dayOfWeek", &method("day_of_week")).valueSetter = method("day_of_week=")
        registerSemanticProperty("https://schema.org/opens", &method("opens")).valueSetter = method("opens=")
        registerSemanticProperty("dfc-b:closes", &method("closes")).valueSetter = method("closes=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
