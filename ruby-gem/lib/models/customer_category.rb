# frozen_string_literal: true

# Class from DFC Business Ontology: #CustomerCategory
require_relative '../core/semantic_object'
require_relative 'who_subject'


module DfcLinkmlConnector
  module Models
    class CustomerCategory < WhoSubject
      SEMANTIC_TYPE = "dfc-b:CustomerCategory".freeze

      # @return [String]
      attr_accessor :member

      # @return [String]
      attr_accessor :offer

      # @return [Organization, String]
      attr_accessor :defined_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, member: nil, offer: nil, definedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, member: nil, offer: nil, definedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @member = member
        @offer = offer
        @defined_by = definedBy
        self.semanticType = "dfc-b:CustomerCategory"
        registerSemanticProperty("dfc-b:hasMember", &method("member")).valueSetter = method("member=")
        registerSemanticProperty("dfc-b:hasOffer", &method("offer")).valueSetter = method("offer=")
        registerSemanticProperty("dfc-b:definedBy", &method("defined_by")).valueSetter = method("defined_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
