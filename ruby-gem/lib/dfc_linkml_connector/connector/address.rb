# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Address < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:Address"

      def initialize(semantic_id = nil, address_of: nil, has_country: nil, street: nil, postal_code: nil, city: nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:Address"
        @address_of = address_of
        @has_country = has_country
        @street = street
        @postal_code = postal_code
        @city = city
      end

      def to_semantic
        result = super
        result["dfc-b:addressOf"] = @address_of if @address_of
        result["dfc-b:hasCountry"] = @has_country if @has_country
        result["dfc-b:street"] = @street if @street
        result["dfc-b:postalCode"] = @postal_code if @postal_code
        result["dfc-b:city"] = @city if @city
        result
      end
    end
  end
end