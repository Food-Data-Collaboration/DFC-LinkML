# frozen_string_literal: true

# Class from DFC Business Ontology: #TemplateSaleSession
require_relative '../core/semantic_object'
require_relative 'relation'


module DfcLinkmlConnector
  module Models
    class TemplateSaleSession < Relation
      SEMANTIC_TYPE = "dfc-b:TemplateSaleSession".freeze

    end
  end
end
