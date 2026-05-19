# frozen_string_literal: true

# Class from DFC Business Ontology: #SaleSession
require_relative 'semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class SaleSession < Core::Relation
      SEMANTIC_TYPE = "dfc-b:SaleSession".freeze

      # @return [String]
      attr_accessor :arrival_date

      # @return [String]
      attr_accessor :end_date

      # @return [String]
      attr_accessor :start_date

      # @return [ShippingOption]
      attr_accessor :option

      # @param semanticId [String]
      # @param arrivalDate: nil, endDate: nil, startDate: nil, option: nil
      def initialize(semanticId, arrivalDate: nil, endDate: nil, startDate: nil, option: nil)
        super(semanticId)
        @arrival_date = arrivalDate
        @end_date = endDate
        @start_date = startDate
        @option = option
        self.semanticType = "dfc-b:SaleSession"
        registerSemanticProperty("dfc-b:SaleSession:arrivalDate", &method("arrival_date")).valueSetter = method("arrival_date=")
        registerSemanticProperty("dfc-b:SaleSession:endDate", &method("end_date")).valueSetter = method("end_date=")
        registerSemanticProperty("dfc-b:SaleSession:startDate", &method("start_date")).valueSetter = method("start_date=")
        registerSemanticProperty("dfc-b:SaleSession:hasOption", &method("option")).valueSetter = method("option=")
      end

    end
  end
end
