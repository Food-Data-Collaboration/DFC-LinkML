# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Organization < Agent
      SEMANTIC_TYPE = "dfc-b:Organization"

      def initialize(semantic_id = nil, name: nil, description: nil, vat_number: nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:Organization"
        @name = name
        @description = description
        @vat_number = vat_number
      end

      def to_semantic
        result = super
        result["dfc-b:name"] = @name if @name
        result["dfc-b:description"] = @description if @description
        result["dfc-b:VATnumber"] = @vat_number if @vat_number
        result
      end
    end
  end
end