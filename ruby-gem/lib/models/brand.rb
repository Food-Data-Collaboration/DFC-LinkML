# frozen_string_literal: true

# Class from DFC Business Ontology: #Brand
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Brand < WhatSubject
      SEMANTIC_TYPE = "dfc-b:Brand".freeze

      # @return [String]
      attr_accessor :brand_of

      # @return [String]
      attr_accessor :owned_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, brandOf: nil, ownedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, brandOf: nil, ownedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @brand_of = brandOf
        @owned_by = ownedBy
        self.semanticType = "dfc-b:Brand"
        registerSemanticProperty("dfc-b:brandOf", &method("brand_of")).valueSetter = method("brand_of=")
        registerSemanticProperty("dfc-b:ownedBy", &method("owned_by")).valueSetter = method("owned_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
