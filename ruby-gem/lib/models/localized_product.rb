# frozen_string_literal: true

# Class from DFC Business Ontology: #LocalizedProduct
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class LocalizedProduct < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:LocalizedProduct".freeze

      # @return [DefinedProduct]
      attr_accessor :reference

      # @param semanticId [String]
      # @param reference: nil
      def initialize(semanticId, reference: nil)
        super(semanticId)
        @reference = reference
        self.semanticType = "dfc-b:LocalizedProduct"
        registerSemanticProperty("dfc-b:LocalizedProduct:hasReference", &method("reference")).valueSetter = method("reference=")
      end

    end
  end
end
