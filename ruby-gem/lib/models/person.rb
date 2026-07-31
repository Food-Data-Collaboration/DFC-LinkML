# frozen_string_literal: true

# Class from DFC Business Ontology: #Person
require_relative '../core/semantic_object'
require_relative 'agent'


module DfcLinkmlConnector
  module Models
    class Person < Agent
      SEMANTIC_TYPE = "dfc-b:Person".freeze

      # @return [String]
      attr_accessor :family_name

      # @return [String]
      attr_accessor :first_name

      # @return [String]
      attr_accessor :main_contact_of

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil, familyName: nil, firstName: nil, mainContactOf: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil, familyName: nil, firstName: nil, mainContactOf: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, email: email, logo: logo, websitePage: websitePage, affiliatedTo: affiliatedTo, address: address, phoneNumber: phoneNumber, socialMedia: socialMedia, isMemberOf: isMemberOf, orders: orders, owns: owns, requests: requests, sells: sells)
        @family_name = familyName
        @first_name = firstName
        @main_contact_of = mainContactOf
        self.semanticType = "dfc-b:Person"
        registerSemanticProperty("dfc-b:Person:family_name", &method("family_name")).valueSetter = method("family_name=")
        registerSemanticProperty("dfc-b:Person:first_name", &method("first_name")).valueSetter = method("first_name=")
        registerSemanticProperty("dfc-b:Person:main_contact_of", &method("main_contact_of")).valueSetter = method("main_contact_of=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
