# frozen_string_literal: true

# Class from DFC Business Ontology: #Agent
require_relative '../core/semantic_object'
require_relative 'who_subject'


module DfcLinkmlConnector
  module Models
    class Agent < WhoSubject
      SEMANTIC_TYPE = "dfc-b:Agent".freeze

      # @return [String]
      attr_accessor :email

      # @return [String]
      attr_accessor :logo

      # @return [String]
      attr_accessor :website_page

      # @return [String]
      attr_accessor :has_phone_number

      # @return [String]
      attr_accessor :social_media

      # @return [String]
      attr_accessor :owns

      # @return [String]
      attr_accessor :sells

      # @return [Person, String]
      attr_accessor :affiliated_to

      # @return [Address, String]
      attr_accessor :address

      # @return [CustomerCategory, String]
      attr_accessor :is_member_of

      # @return [Array<Order, String>]
      attr_accessor :orders

      # @return [Array<FunctionalProduct, String>]
      attr_accessor :requests

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, hasPhoneNumber: nil, socialMedia: nil, owns: nil, sells: nil, affiliatedTo: nil, address: nil, isMemberOf: nil, orders: [], requests: []
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, hasPhoneNumber: nil, socialMedia: nil, owns: nil, sells: nil, affiliatedTo: nil, address: nil, isMemberOf: nil, orders: [], requests: [])
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @email = email
        @logo = logo
        @website_page = websitePage
        @has_phone_number = hasPhoneNumber
        @social_media = socialMedia
        @owns = owns
        @sells = sells
        @affiliated_to = affiliatedTo
        @address = address
        @is_member_of = isMemberOf
        @orders = orders
        @requests = requests
        self.semanticType = "dfc-b:Agent"
        registerSemanticProperty("dfc-b:email", &method("email")).valueSetter = method("email=")
        registerSemanticProperty("dfc-b:logo", &method("logo")).valueSetter = method("logo=")
        registerSemanticProperty("dfc-b:websitePage", &method("website_page")).valueSetter = method("website_page=")
        registerSemanticProperty("dfc-b:hasPhoneNumber", &method("has_phone_number")).valueSetter = method("has_phone_number=")
        registerSemanticProperty("dfc-b:hasSocialMedia", &method("social_media")).valueSetter = method("social_media=")
        registerSemanticProperty("dfc-b:owns", &method("owns")).valueSetter = method("owns=")
        registerSemanticProperty("dfc-b:sells", &method("sells")).valueSetter = method("sells=")
        registerSemanticProperty("dfc-b:affiliatedTo", &method("affiliated_to")).valueSetter = method("affiliated_to=")
        registerSemanticProperty("dfc-b:hasAddress", &method("address")).valueSetter = method("address=")
        registerSemanticProperty("dfc-b:isMemberOf", &method("is_member_of")).valueSetter = method("is_member_of=")
        registerSemanticProperty("dfc-b:orders", &method("orders")).valueSetter = method("orders=")
        registerSemanticProperty("dfc-b:requests", &method("requests")).valueSetter = method("requests=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
