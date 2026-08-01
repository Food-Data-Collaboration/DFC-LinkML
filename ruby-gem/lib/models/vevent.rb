# frozen_string_literal: true

# Class from DFC Business Ontology: #Vevent
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Vevent < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Vevent".freeze

      # @return [String]
      attr_accessor :dtend

      # @return [String]
      attr_accessor :dtstart

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

      # @return [ValueRECUR]
      attr_accessor :rrule

      # @param semanticId [String]
      # @param dtend: nil, dtstart: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, rrule: nil
      def initialize(semanticId, dtend: nil, dtstart: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, rrule: nil)
        super(semanticId)
        @dtend = dtend
        @dtstart = dtstart
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @rrule = rrule
        self.semanticType = "dfc-b:Vevent"
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtend", &method("dtend")).valueSetter = method("dtend=")
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtstart", &method("dtstart")).valueSetter = method("dtstart=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#rrule", &method("rrule")).valueSetter = method("rrule=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
