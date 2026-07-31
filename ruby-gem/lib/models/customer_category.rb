# frozen_string_literal: true

# Class from DFC Business Ontology: #CustomerCategory
require_relative '../core/semantic_object'
require_relative 'who_subject'


module DfcLinkmlConnector
  module Models
    class CustomerCategory < WhoSubject
      SEMANTIC_TYPE = "dfc-b:CustomerCategory".freeze

      # @return [String]
      attr_accessor :defined_by

      # @return [String]
      attr_accessor :member

      # @return [String]
      attr_accessor :offer

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, definedBy: nil, member: nil, offer: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, definedBy: nil, member: nil, offer: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @defined_by = definedBy
        @member = member
        @offer = offer
        self.semanticType = "dfc-b:CustomerCategory"
        registerSemanticProperty("dfc-b:CustomerCategory:defined_by", &method("defined_by")).valueSetter = method("defined_by=")
        registerSemanticProperty("dfc-b:CustomerCategory:has_member", &method("member")).valueSetter = method("member=")
        registerSemanticProperty("dfc-b:CustomerCategory:has_offer", &method("offer")).valueSetter = method("offer=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
