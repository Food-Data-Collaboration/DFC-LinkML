# frozen_string_literal: true

# Class from DFC Business Ontology: #Organization
require_relative '../core/semantic_object'
require_relative 'agent'


module DfcLinkmlConnector
  module Models
    class Organization < Agent
      SEMANTIC_TYPE = "dfc-b:Organization".freeze

      # @return [String]
      attr_accessor :vat_number

      # @return [Boolean]
      attr_accessor :vat_status

      # @return [String]
      attr_accessor :enterprise_id

      # @return [String]
      attr_accessor :affiliates

      # @return [String]
      attr_accessor :defines

      # @return [String]
      attr_accessor :main_contact

      # @return [String]
      attr_accessor :template_sale_session

      # @return [String]
      attr_accessor :is_certified_by

      # @return [String]
      attr_accessor :maintains

      # @return [String]
      attr_accessor :manages

      # @return [String]
      attr_accessor :proposes

      # @return [String]
      attr_accessor :supplies

      # @return [String]
      attr_accessor :transforms

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil, vatNumber: nil, vatStatus: nil, enterpriseId: nil, affiliates: nil, defines: nil, mainContact: nil, templateSaleSession: nil, isCertifiedBy: nil, maintains: nil, manages: nil, proposes: nil, supplies: nil, transforms: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil, vatNumber: nil, vatStatus: nil, enterpriseId: nil, affiliates: nil, defines: nil, mainContact: nil, templateSaleSession: nil, isCertifiedBy: nil, maintains: nil, manages: nil, proposes: nil, supplies: nil, transforms: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, email: email, logo: logo, websitePage: websitePage, affiliatedTo: affiliatedTo, address: address, phoneNumber: phoneNumber, socialMedia: socialMedia, isMemberOf: isMemberOf, orders: orders, owns: owns, requests: requests, sells: sells)
        @vat_number = vatNumber
        @vat_status = vatStatus
        @enterprise_id = enterpriseId
        @affiliates = affiliates
        @defines = defines
        @main_contact = mainContact
        @template_sale_session = templateSaleSession
        @is_certified_by = isCertifiedBy
        @maintains = maintains
        @manages = manages
        @proposes = proposes
        @supplies = supplies
        @transforms = transforms
        self.semanticType = "dfc-b:Organization"
        registerSemanticProperty("dfc-b:VATnumber", &method("vat_number")).valueSetter = method("vat_number=")
        registerSemanticProperty("dfc-b:VATstatus", &method("vat_status")).valueSetter = method("vat_status=")
        registerSemanticProperty("dfc-b:enterpriseID", &method("enterprise_id")).valueSetter = method("enterprise_id=")
        registerSemanticProperty("dfc-b:affiliates", &method("affiliates")).valueSetter = method("affiliates=")
        registerSemanticProperty("dfc-b:defines", &method("defines")).valueSetter = method("defines=")
        registerSemanticProperty("dfc-b:hasMainContact", &method("main_contact")).valueSetter = method("main_contact=")
        registerSemanticProperty("dfc-b:hasTemplateSaleSession", &method("template_sale_session")).valueSetter = method("template_sale_session=")
        registerSemanticProperty("dfc-b:isCertifiedBy", &method("is_certified_by")).valueSetter = method("is_certified_by=")
        registerSemanticProperty("dfc-b:maintains", &method("maintains")).valueSetter = method("maintains=")
        registerSemanticProperty("dfc-b:manages", &method("manages")).valueSetter = method("manages=")
        registerSemanticProperty("dfc-b:proposes", &method("proposes")).valueSetter = method("proposes=")
        registerSemanticProperty("dfc-b:supplies", &method("supplies")).valueSetter = method("supplies=")
        registerSemanticProperty("dfc-b:transforms", &method("transforms")).valueSetter = method("transforms=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
