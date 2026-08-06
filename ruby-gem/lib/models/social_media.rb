# frozen_string_literal: true

# Class from DFC Business Ontology: #SocialMedia
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class SocialMedia < WhatSubject
      SEMANTIC_TYPE = "dfc-b:SocialMedia".freeze

      # @return [String]
      attr_accessor :website_page

      # @return [String]
      attr_accessor :social_media_of

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, websitePage: nil, socialMediaOf: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, websitePage: nil, socialMediaOf: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @website_page = websitePage
        @social_media_of = socialMediaOf
        self.semanticType = "dfc-b:SocialMedia"
        registerSemanticProperty("dfc-b:websitePage", &method("website_page")).valueSetter = method("website_page=")
        registerSemanticProperty("dfc-b:socialMediaOf", &method("social_media_of")).valueSetter = method("social_media_of=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
