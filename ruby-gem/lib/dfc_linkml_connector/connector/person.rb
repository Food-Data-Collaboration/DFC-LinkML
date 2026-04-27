# frozen_string_literal: true

require_relative "defined_product"

module DFCLinkMLConnector
  module Connector
    class Person < Agent
      SEMANTIC_TYPE = "dfc-b:Person"

      def initialize(semantic_id = nil, first_name: nil, last_name: nil, affiliated_organizations: [], localizations: [], **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "dfc-b:Person"
        @first_name = first_name
        @last_name = last_name
        @affiliated_organizations = affiliated_organizations
        @localizations = localizations
      end

      def to_semantic
        result = super
        result["dfc-b:firstName"] = @first_name if @first_name
        result["dfc-b:lastName"] = @last_name if @last_name
        result["dfc-b:affiliatedOrganizations"] = @affiliated_organizations.map(&:semantic_id) if @affiliated_organizations.any?
        result["dfc-b:hasLocalizations"] = @localizations.map(&:semantic_id) if @localizations.any?
        result
      end
    end
  end
end