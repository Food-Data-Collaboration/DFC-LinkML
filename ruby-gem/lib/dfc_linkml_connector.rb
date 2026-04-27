# frozen_string_literal: true

require "securerandom"
require "ostruct"

module DFCLinkMLConnector
end

require_relative "dfc_linkml_connector/version"
require_relative "dfc_linkml_connector/vocabulary/loader"
require_relative "dfc_linkml_connector/connector/connector"

module DFCLinkMLConnector
  module Connector
    class RepresentedThing
      attr_reader :semantic_id
      attr_accessor :semantic_type

      def initialize(semantic_id = nil, **attributes)
        @semantic_id = semantic_id || "urn:uuid:#{SecureRandom.uuid}"
        @attributes = attributes
        @semantic_type = self.class.to_s.split("::").last
      end

      def ==(other)
        other.is_a?(RepresentedThing) && other.semantic_id == @semantic_id
      end

      def hash
        @semantic_id.hash
      end

      def to_semantic
        result = { "@id" => @semantic_id, "@type" => @semantic_type }
        @attributes.each do |key, value|
          next if value.nil?
          prefix_key = "dfc-b#{key.to_s.split('_').map(&:capitalize).join}"
          result[prefix_key] = serialize_value(value)
        end
        result
      end

      private

      def serialize_value(val)
        case val
        when RepresentedThing
          val.to_semantic
        when Array
          val.map { |v| serialize_value(v) }
        else
          val
        end
      end
    end
  end
end

require_relative "dfc_linkml_connector/connector/address"
require_relative "dfc_linkml_connector/connector/agent"
require_relative "dfc_linkml_connector/connector/catalog_item"
require_relative "dfc_linkml_connector/connector/customer_category"
require_relative "dfc_linkml_connector/connector/defined_product"
require_relative "dfc_linkml_connector/connector/enterprise"
require_relative "dfc_linkml_connector/connector/offer"
require_relative "dfc_linkml_connector/connector/organization"
require_relative "dfc_linkml_connector/connector/person"
require_relative "dfc_linkml_connector/connector/price"
require_relative "dfc_linkml_connector/connector/quantitative_value"
require_relative "dfc_linkml_connector/connector/supplied_product"