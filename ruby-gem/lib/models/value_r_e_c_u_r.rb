# frozen_string_literal: true

# Class from DFC Business Ontology: #Value_RECUR
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class ValueRECUR < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Value_RECUR".freeze

      # @return [String]
      attr_accessor :byday

      # @return [String]
      attr_accessor :bymonth

      # @return [String]
      attr_accessor :freq

      # @return [Integer]
      attr_accessor :interval

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
      # @param byday: nil, bymonth: nil, freq: nil, interval: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, byday: nil, bymonth: nil, freq: nil, interval: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @byday = byday
        @bymonth = bymonth
        @freq = freq
        @interval = interval
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Value_RECUR"
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#byday", &method("byday")).valueSetter = method("byday=")
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#bymonth", &method("bymonth")).valueSetter = method("bymonth=")
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#freq", &method("freq")).valueSetter = method("freq=")
        registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#interval", &method("interval")).valueSetter = method("interval=")
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
