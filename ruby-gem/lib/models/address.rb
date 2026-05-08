# frozen_string_literal: true

# Class from DFC Business Ontology: #Address
require_relative 'semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Address < Core::WhereSubject
      SEMANTIC_TYPE = "dfc-b:Address".freeze

      # @return [String]
      attr_accessor :country

      # @return [String]
      attr_accessor :city

      # @return [String]
      attr_accessor :country_code

      # @return [String]
      attr_accessor :postcode

      # @return [String]
      attr_accessor :region

      # @return [String]
      attr_accessor :street

      # @param semanticId [String]
      # @param country: nil, city: nil, countryCode: nil, postcode: nil, region: nil, street: nil
      def initialize(semanticId, country: nil, city: nil, countryCode: nil, postcode: nil, region: nil, street: nil)
        super(semanticId)
        @country = country
        @city = city
        @country_code = countryCode
        @postcode = postcode
        @region = region
        @street = street
        self.semanticType = "dfc-b:Address"
        registerSemanticProperty("dfc-b:Address:hasCountry", &method("country")).valueSetter = method("country=")
        registerSemanticProperty("dfc-b:Address:city", &method("city")).valueSetter = method("city=")
        registerSemanticProperty("dfc-b:Address:countryCode", &method("country_code")).valueSetter = method("country_code=")
        registerSemanticProperty("dfc-b:Address:postcode", &method("postcode")).valueSetter = method("postcode=")
        registerSemanticProperty("dfc-b:Address:region", &method("region")).valueSetter = method("region=")
        registerSemanticProperty("dfc-b:Address:street", &method("street")).valueSetter = method("street=")
      end

    end
  end
end
