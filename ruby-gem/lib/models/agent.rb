# frozen_string_literal: true

# Class from DFC Business Ontology: #Agent
require_relative 'semantic_object'
require_relative 'who_subject'


module DfcLinkmlConnector
  module Models
    class Agent < Core::WhoSubject
      SEMANTIC_TYPE = "dfc-b:Agent".freeze

      # @return [String]
      attr_accessor :email

      # @return [String]
      attr_accessor :logo

      # @return [String]
      attr_accessor :phone_number

      # @return [String]
      attr_accessor :website_page

      # @return [Address]
      attr_accessor :address

      # @return [SocialMedia]
      attr_accessor :social_media

      # @param semanticId [String]
      # @param email: nil, logo: nil, phoneNumber: nil, websitePage: nil, address: nil, socialMedia: nil
      def initialize(semanticId, email: nil, logo: nil, phoneNumber: nil, websitePage: nil, address: nil, socialMedia: nil)
        super(semanticId)
        @email = email
        @logo = logo
        @phone_number = phoneNumber
        @website_page = websitePage
        @address = address
        @social_media = socialMedia
        self.semanticType = "dfc-b:Agent"
        registerSemanticProperty("dfc-b:Agent:email", &method("email")).valueSetter = method("email=")
        registerSemanticProperty("dfc-b:Agent:logo", &method("logo")).valueSetter = method("logo=")
        registerSemanticProperty("dfc-b:Agent:phoneNumber", &method("phone_number")).valueSetter = method("phone_number=")
        registerSemanticProperty("dfc-b:Agent:websitePage", &method("website_page")).valueSetter = method("website_page=")
        registerSemanticProperty("dfc-b:Agent:hasAddress", &method("address")).valueSetter = method("address=")
        registerSemanticProperty("dfc-b:Agent:hasSocialMedia", &method("social_media")).valueSetter = method("social_media=")
      end

    end
  end
end
