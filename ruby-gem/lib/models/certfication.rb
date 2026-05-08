# frozen_string_literal: true

# Class from DFC Business Ontology: #Certfication
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Certfication < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:Certfication".freeze

      # @return [String]
      attr_accessor :certifer_reference

      # @return [String]
      attr_accessor :certification_score

      # @param semanticId [String]
      # @param certiferReference: nil, certificationScore: nil
      def initialize(semanticId, certiferReference: nil, certificationScore: nil)
        super(semanticId)
        @certifer_reference = certiferReference
        @certification_score = certificationScore
        self.semanticType = "dfc-b:Certfication"
        registerSemanticProperty("dfc-b:Certfication:certiferReference", &method("certifer_reference")).valueSetter = method("certifer_reference=")
        registerSemanticProperty("dfc-b:Certfication:certificationScore", &method("certification_score")).valueSetter = method("certification_score=")
      end

    end
  end
end
