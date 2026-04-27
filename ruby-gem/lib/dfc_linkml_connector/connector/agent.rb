# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Agent < RepresentedThing
      SEMANTIC_TYPE = "dfc-b:Agent"

      def initialize(semantic_id = nil, affiliated_to: nil, has_social_media: nil, is_member_of: nil, orders: nil, owns: nil, requests: nil, sells: nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:Agent"
        @affiliated_to = affiliated_to
        @has_social_media = has_social_media
        @is_member_of = is_member_of
        @orders = orders
        @owns = owns
        @requests = requests
        @sells = sells
      end
    end
  end
end