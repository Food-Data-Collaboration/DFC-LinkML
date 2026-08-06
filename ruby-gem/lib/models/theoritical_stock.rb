# frozen_string_literal: true

# Class from DFC Business Ontology: #TheoriticalStock
require_relative '../core/semantic_object'
require_relative 'stock'


module DfcLinkmlConnector
  module Models
    class TheoriticalStock < Stock
      SEMANTIC_TYPE = "dfc-b:TheoriticalStock".freeze

      # @return [String]
      attr_accessor :constitutes

      # @return [String]
      attr_accessor :localized_by

      # @param semanticId [String]
      # @param availabilityDate: nil, quantity: nil, transportedBy: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, constitutes: nil, localizedBy: nil
      def initialize(semanticId, availabilityDate: nil, quantity: nil, transportedBy: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, constitutes: nil, localizedBy: nil)
        super(semanticId, availabilityDate: availabilityDate, quantity: quantity, transportedBy: transportedBy, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @constitutes = constitutes
        @localized_by = localizedBy
        self.semanticType = "dfc-b:TheoriticalStock"
        registerSemanticProperty("dfc-b:constitutes", &method("constitutes")).valueSetter = method("constitutes=")
        registerSemanticProperty("dfc-b:localizedBy", &method("localized_by")).valueSetter = method("localized_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
