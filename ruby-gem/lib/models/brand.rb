# frozen_string_literal: true

# Class from DFC Business Ontology: #Brand
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Brand < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:Brand".freeze

      # @return [String]
      attr_accessor :brand

      # @param semanticId [String]
      # @param brand: nil
      def initialize(semanticId, brand: nil)
        super(semanticId)
        @brand = brand
        self.semanticType = "dfc-b:Brand"
        registerSemanticProperty("dfc-b:Brand:brand", &method("brand")).valueSetter = method("brand=")
      end

    end
  end
end
