# frozen_string_literal: true

# Class from DFC Business Ontology: #DeliveryStep
require_relative '../core/semantic_object'
require_relative 'step'


module DfcLinkmlConnector
  module Models
    class DeliveryStep < Step
      SEMANTIC_TYPE = "dfc-b:DeliveryStep".freeze

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, arrivalDate: nil, duration: nil, isStepOf: nil, delivery: nil, pickUp: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, arrivalDate: nil, duration: nil, isStepOf: nil, delivery: nil, pickUp: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, arrivalDate: arrivalDate, duration: duration, isStepOf: isStepOf, delivery: delivery, pickUp: pickUp)

        self.semanticType = "dfc-b:DeliveryStep"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
