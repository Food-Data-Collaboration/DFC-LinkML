# frozen_string_literal: true

# Class from DFC Business Ontology: #Address
require_relative '../core/semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Address < WhereSubject
      SEMANTIC_TYPE = "dfc-b:Address".freeze

      # @return [String]
      attr_accessor :city

      # @return [String]
      attr_accessor :country

      # @return [Float]
      attr_accessor :latitude

      # @return [Float]
      attr_accessor :longitude

      # @return [String]
      attr_accessor :postcode

      # @return [String]
      attr_accessor :region

      # @return [String]
      attr_accessor :street

      # @return [String]
      attr_accessor :address_of

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, city: nil, country: nil, latitude: nil, longitude: nil, postcode: nil, region: nil, street: nil, addressOf: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, city: nil, country: nil, latitude: nil, longitude: nil, postcode: nil, region: nil, street: nil, addressOf: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @city = city
        @country = country
        @latitude = latitude
        @longitude = longitude
        @postcode = postcode
        @region = region
        @street = street
        @address_of = addressOf
        self.semanticType = "dfc-b:Address"
        registerSemanticProperty("dfc-b:city", &method("city")).valueSetter = method("city=")
        registerSemanticProperty("dfc-b:country", &method("country")).valueSetter = method("country=")
        registerSemanticProperty("dfc-b:latitude", &method("latitude")).valueSetter = method("latitude=")
        registerSemanticProperty("dfc-b:longitude", &method("longitude")).valueSetter = method("longitude=")
        registerSemanticProperty("dfc-b:postcode", &method("postcode")).valueSetter = method("postcode=")
        registerSemanticProperty("dfc-b:region", &method("region")).valueSetter = method("region=")
        registerSemanticProperty("dfc-b:street", &method("street")).valueSetter = method("street=")
        registerSemanticProperty("dfc-b:addressOf", &method("address_of")).valueSetter = method("address_of=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
