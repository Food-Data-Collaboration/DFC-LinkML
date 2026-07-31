# frozen_string_literal: true

# Class from DFC Business Ontology: #RealStock
require_relative '../core/semantic_object'
require_relative 'stock'


module DfcLinkmlConnector
  module Models
    class RealStock < Stock
      SEMANTIC_TYPE = "dfc-b:RealStock".freeze

      # @return [String]
      attr_accessor :constitutes

      # @return [String]
      attr_accessor :identified_by

      # @return [String]
      attr_accessor :stored_in

      # @param semanticId [String]
      # @param availabilityDate: nil, quantity: nil, transportedBy: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, constitutes: nil, identifiedBy: nil, storedIn: nil
      def initialize(semanticId, availabilityDate: nil, quantity: nil, transportedBy: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, constitutes: nil, identifiedBy: nil, storedIn: nil)
        super(semanticId, availabilityDate: availabilityDate, quantity: quantity, transportedBy: transportedBy, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @constitutes = constitutes
        @identified_by = identifiedBy
        @stored_in = storedIn
        self.semanticType = "dfc-b:RealStock"
        registerSemanticProperty("dfc-b:RealStock:constitutes", &method("constitutes")).valueSetter = method("constitutes=")
        registerSemanticProperty("dfc-b:RealStock:identified_by", &method("identified_by")).valueSetter = method("identified_by=")
        registerSemanticProperty("dfc-b:RealStock:stored_in", &method("stored_in")).valueSetter = method("stored_in=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
