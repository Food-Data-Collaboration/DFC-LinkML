# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductBatch
require_relative '../semantic_object'
require_relative 'what_subject'


class ProductBatch < WhatSubject
  SEMANTIC_TYPE = "dfc-b:ProductBatch".freeze

  # @return [String]
  attr_accessor :batch_number

  # @param semanticId [String]
  # @param batchNumber: nil
  def initialize(semanticId, batchNumber: nil)
    super(semanticId)
    @batch_number = batchNumber
    self.semanticType = "dfc-b:ProductBatch"
    registerSemanticProperty("dfc-b:ProductBatch:batchNumber", &method("batch_number")).valueSetter = method("batch_number=")
  end

end
