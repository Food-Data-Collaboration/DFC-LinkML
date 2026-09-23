# frozen_string_literal: true

# Class from DFC Business Ontology: #Enterprise
require_relative '../core/semantic_object'
require_relative 'organization'


module DfcLinkmlConnector
  module Models
    class Enterprise < Organization
      SEMANTIC_TYPE = "dfc-b:Enterprise".freeze

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, hasPhoneNumber: nil, socialMedia: nil, owns: nil, sells: nil, vatNumber: nil, vatStatus: nil, enterpriseId: nil, templateSaleSession: nil, isCertifiedBy: nil, affiliatedTo: nil, address: nil, isMemberOf: nil, orders: [], requests: [], affiliates: [], defines: [], mainContact: nil, maintains: [], manages: [], proposes: [], supplies: [], transforms: []
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, hasPhoneNumber: nil, socialMedia: nil, owns: nil, sells: nil, vatNumber: nil, vatStatus: nil, enterpriseId: nil, templateSaleSession: nil, isCertifiedBy: nil, affiliatedTo: nil, address: nil, isMemberOf: nil, orders: [], requests: [], affiliates: [], defines: [], mainContact: nil, maintains: [], manages: [], proposes: [], supplies: [], transforms: [])
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, email: email, logo: logo, websitePage: websitePage, hasPhoneNumber: hasPhoneNumber, socialMedia: socialMedia, owns: owns, sells: sells, vatNumber: vatNumber, vatStatus: vatStatus, enterpriseId: enterpriseId, templateSaleSession: templateSaleSession, isCertifiedBy: isCertifiedBy, affiliatedTo: affiliatedTo, address: address, isMemberOf: isMemberOf, orders: orders, requests: requests, affiliates: affiliates, defines: defines, mainContact: mainContact, maintains: maintains, manages: manages, proposes: proposes, supplies: supplies, transforms: transforms)

        self.semanticType = "dfc-b:Enterprise"

      end

      # Official DFC v2 API aliases (see config/dfc-official-api.yaml).
      alias_method :vatNumber, :vat_number
      alias_method :vatNumber=, :vat_number=

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
