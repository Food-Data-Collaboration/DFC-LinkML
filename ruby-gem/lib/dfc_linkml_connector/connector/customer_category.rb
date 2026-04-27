# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class CustomerCategory < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:CustomerCategory"

      def initialize(semantic_id = nil, description: nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:CustomerCategory"
        @description = description
      end

      def to_semantic
        result = super
        result["dfc-b:description"] = @description if @description
        result
      end
    end
  end
end
