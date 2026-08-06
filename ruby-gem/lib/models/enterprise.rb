# frozen_string_literal: true

# Class from DFC Business Ontology: #Enterprise
require_relative '../core/semantic_object'
require_relative 'agent'


module DfcLinkmlConnector
  module Models
    class Enterprise < Agent
      SEMANTIC_TYPE = "dfc-b:Enterprise".freeze

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, email: nil, logo: nil, websitePage: nil, affiliatedTo: nil, address: nil, phoneNumber: nil, socialMedia: nil, isMemberOf: nil, orders: nil, owns: nil, requests: nil, sells: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, email: email, logo: logo, websitePage: websitePage, affiliatedTo: affiliatedTo, address: address, phoneNumber: phoneNumber, socialMedia: socialMedia, isMemberOf: isMemberOf, orders: orders, owns: owns, requests: requests, sells: sells)

        self.semanticType = "dfc-b:Enterprise"

      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
