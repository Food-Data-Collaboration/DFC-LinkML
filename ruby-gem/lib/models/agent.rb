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
      attr_accessor :affiliated_to

      # @return [String]
      attr_accessor :address

      # @return [String]
      attr_accessor :phone_number

      # @return [String]
      attr_accessor :social_media

      # @return [String]
      attr_accessor :is_member_of

      # @return [String]
      attr_accessor :orders

      # @return [String]
      attr_accessor :owns

      # @return [String]
      attr_accessor :requests

      # @return [String]
      attr_accessor :sells

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @email = email
        @logo = logo
        @website_page = websitePage
        @affiliated_to = affiliatedTo
        @address = address
        @phone_number = phoneNumber
        @social_media = socialMedia
        @is_member_of = isMemberOf
        @orders = orders
        @owns = owns
        @requests = requests
        @sells = sells
        self.semanticType = "dfc-b:Agent"
        registerSemanticProperty("dfc-b:email", &method("email")).valueSetter = method("email=")
        registerSemanticProperty("dfc-b:logo", &method("logo")).valueSetter = method("logo=")
        registerSemanticProperty("dfc-b:websitePage", &method("website_page")).valueSetter = method("website_page=")
        registerSemanticProperty("dfc-b:affiliatedTo", &method("affiliated_to")).valueSetter = method("affiliated_to=")
        registerSemanticProperty("dfc-b:hasAddress", &method("address")).valueSetter = method("address=")
        registerSemanticProperty("dfc-b:hasPhoneNumber", &method("phone_number")).valueSetter = method("phone_number=")
        registerSemanticProperty("dfc-b:hasSocialMedia", &method("social_media")).valueSetter = method("social_media=")
        registerSemanticProperty("dfc-b:isMemberOf", &method("is_member_of")).valueSetter = method("is_member_of=")
        registerSemanticProperty("dfc-b:orders", &method("orders")).valueSetter = method("orders=")
        registerSemanticProperty("dfc-b:owns", &method("owns")).valueSetter = method("owns=")
        registerSemanticProperty("dfc-b:requests", &method("requests")).valueSetter = method("requests=")
        registerSemanticProperty("dfc-b:sells", &method("sells")).valueSetter = method("sells=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
