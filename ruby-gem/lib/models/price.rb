# frozen_string_literal: true

# Class from DFC Business Ontology: #Price
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class Price < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Price".freeze

      # @return [String]
      attr_accessor :vat_rate

      # @return [String]
      attr_accessor :vat_status

      # @return [String]
      attr_accessor :cost

      # @param semanticId [String]
      # @param vatRate: nil, vatStatus: nil, cost: nil
      def initialize(semanticId, vatRate: nil, vatStatus: nil, cost: nil)
        super(semanticId)
        @vat_rate = vatRate
        @vat_status = vatStatus
        @cost = cost
        self.semanticType = "dfc-b:Price"
        registerSemanticProperty("dfc-b:Price:VATrate", &method("vat_rate")).valueSetter = method("vat_rate=")
        registerSemanticProperty("dfc-b:Price:VATstatus", &method("vat_status")).valueSetter = method("vat_status=")
        registerSemanticProperty("dfc-b:Price:cost", &method("cost")).valueSetter = method("cost=")
      end

    end
  end
end
