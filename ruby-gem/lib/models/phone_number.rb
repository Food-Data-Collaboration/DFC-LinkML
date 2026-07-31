# frozen_string_literal: true

# Class from DFC Business Ontology: #PhoneNumber
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class PhoneNumber < WhatSubject
      SEMANTIC_TYPE = "dfc-b:PhoneNumber".freeze

      # @return [String]
      attr_accessor :country_code

      # @return [String]
      attr_accessor :phone_number

      # @return [String]
      attr_accessor :phone_number_of

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, countryCode: nil, phoneNumber: nil, phoneNumberOf: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, countryCode: nil, phoneNumber: nil, phoneNumberOf: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @country_code = countryCode
        @phone_number = phoneNumber
        @phone_number_of = phoneNumberOf
        self.semanticType = "dfc-b:PhoneNumber"
        registerSemanticProperty("dfc-b:PhoneNumber:country_code", &method("country_code")).valueSetter = method("country_code=")
        registerSemanticProperty("dfc-b:PhoneNumber:phone_number", &method("phone_number")).valueSetter = method("phone_number=")
        registerSemanticProperty("dfc-b:PhoneNumber:phone_number_of", &method("phone_number_of")).valueSetter = method("phone_number_of=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
