# frozen_string_literal: true

# Class from DFC Business Ontology: #Enterprise
require_relative 'semantic_object'
require_relative 'agent'


module DfcLinkmlConnector
  module Models
    class Enterprise < Core::Agent
      SEMANTIC_TYPE = "dfc-b:Enterprise".freeze

      # @return [String]
      attr_accessor :vat_number

      # @return [String]
      attr_accessor :enterprise_id

      # @return [Person]
      attr_accessor :main_contact

      # @param semanticId [String]
      # @param vatNumber: nil, enterpriseId: nil, mainContact: nil
      def initialize(semanticId, vatNumber: nil, enterpriseId: nil, mainContact: nil)
        super(semanticId)
        @vat_number = vatNumber
        @enterprise_id = enterpriseId
        @main_contact = mainContact
        self.semanticType = "dfc-b:Enterprise"
        registerSemanticProperty("dfc-b:Enterprise:VATnumber", &method("vat_number")).valueSetter = method("vat_number=")
        registerSemanticProperty("dfc-b:Enterprise:enterpriseID", &method("enterprise_id")).valueSetter = method("enterprise_id=")
        registerSemanticProperty("dfc-b:Enterprise:hasMainContact", &method("main_contact")).valueSetter = method("main_contact=")
      end

    end
  end
end
