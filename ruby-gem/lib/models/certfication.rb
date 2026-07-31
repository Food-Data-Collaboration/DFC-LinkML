# frozen_string_literal: true

# Class from DFC Business Ontology: #Certfication
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Certfication < WhatSubject
      SEMANTIC_TYPE = "dfc-b:Certfication".freeze

      # @return [String]
      attr_accessor :certifer_reference

      # @return [String]
      attr_accessor :certification_score

      # @return [String]
      attr_accessor :operator_id

      # @return [String]
      attr_accessor :certifies

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, certiferReference: nil, certificationScore: nil, operatorId: nil, certifies: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, certiferReference: nil, certificationScore: nil, operatorId: nil, certifies: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @certifer_reference = certiferReference
        @certification_score = certificationScore
        @operator_id = operatorId
        @certifies = certifies
        self.semanticType = "dfc-b:Certfication"
        registerSemanticProperty("dfc-b:Certfication:certifer_reference", &method("certifer_reference")).valueSetter = method("certifer_reference=")
        registerSemanticProperty("dfc-b:Certfication:certification_score", &method("certification_score")).valueSetter = method("certification_score=")
        registerSemanticProperty("dfc-b:Certfication:operator_id", &method("operator_id")).valueSetter = method("operator_id=")
        registerSemanticProperty("dfc-b:Certfication:certifies", &method("certifies")).valueSetter = method("certifies=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
