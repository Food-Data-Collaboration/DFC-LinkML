# frozen_string_literal: true

# Class from DFC Business Ontology: #Step
require_relative '../core/semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Step < WhereSubject
      SEMANTIC_TYPE = "dfc-b:Step".freeze

      # @return [String]
      attr_accessor :arrival_date

      # @return [String]
      attr_accessor :duration

      # @return [String]
      attr_accessor :is_step_of

      # @return [Shipment]
      attr_accessor :delivery

      # @return [Shipment]
      attr_accessor :pick_up

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, arrivalDate: nil, duration: nil, isStepOf: nil, delivery: nil, pickUp: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, arrivalDate: nil, duration: nil, isStepOf: nil, delivery: nil, pickUp: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @arrival_date = arrivalDate
        @duration = duration
        @is_step_of = isStepOf
        @delivery = delivery
        @pick_up = pickUp
        self.semanticType = "dfc-b:Step"
        registerSemanticProperty("dfc-b:Step:arrival_date", &method("arrival_date")).valueSetter = method("arrival_date=")
        registerSemanticProperty("dfc-b:Step:duration", &method("duration")).valueSetter = method("duration=")
        registerSemanticProperty("dfc-b:Step:is_step_of", &method("is_step_of")).valueSetter = method("is_step_of=")
        registerSemanticProperty("dfc-b:Step:delivery", &method("delivery")).valueSetter = method("delivery=")
        registerSemanticProperty("dfc-b:Step:pick_up", &method("pick_up")).valueSetter = method("pick_up=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
