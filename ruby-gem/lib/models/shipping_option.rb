# frozen_string_literal: true

# Class from DFC Business Ontology: #ShippingOption
require_relative 'semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class ShippingOption < Core::HowSubject
      SEMANTIC_TYPE = "dfc-b:ShippingOption".freeze

      # @return [String]
      attr_accessor :fee

      # @param semanticId [String]
      # @param fee: nil
      def initialize(semanticId, fee: nil)
        super(semanticId)
        @fee = fee
        self.semanticType = "dfc-b:ShippingOption"
        registerSemanticProperty("dfc-b:ShippingOption:fee", &method("fee")).valueSetter = method("fee=")
      end

    end
  end
end
