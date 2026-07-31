# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductBatch
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class ProductBatch < WhatSubject
      SEMANTIC_TYPE = "dfc-b:ProductBatch".freeze

      # @return [String]
      attr_accessor :batch_number

      # @return [String]
      attr_accessor :best_before_date

      # @return [String]
      attr_accessor :expiry_date

      # @return [String]
      attr_accessor :production_date

      # @return [String]
      attr_accessor :identifies

      # @return [String]
      attr_accessor :traces

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, batchNumber: nil, bestBeforeDate: nil, expiryDate: nil, productionDate: nil, identifies: nil, traces: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, batchNumber: nil, bestBeforeDate: nil, expiryDate: nil, productionDate: nil, identifies: nil, traces: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @batch_number = batchNumber
        @best_before_date = bestBeforeDate
        @expiry_date = expiryDate
        @production_date = productionDate
        @identifies = identifies
        @traces = traces
        self.semanticType = "dfc-b:ProductBatch"
        registerSemanticProperty("dfc-b:ProductBatch:batch_number", &method("batch_number")).valueSetter = method("batch_number=")
        registerSemanticProperty("dfc-b:ProductBatch:best_before_date", &method("best_before_date")).valueSetter = method("best_before_date=")
        registerSemanticProperty("dfc-b:ProductBatch:expiry_date", &method("expiry_date")).valueSetter = method("expiry_date=")
        registerSemanticProperty("dfc-b:ProductBatch:production_date", &method("production_date")).valueSetter = method("production_date=")
        registerSemanticProperty("dfc-b:ProductBatch:identifies", &method("identifies")).valueSetter = method("identifies=")
        registerSemanticProperty("dfc-b:ProductBatch:traces", &method("traces")).valueSetter = method("traces=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
