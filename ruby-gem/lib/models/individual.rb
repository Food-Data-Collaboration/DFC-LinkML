# frozen_string_literal: true

# Class from DFC Business Ontology: #Individual
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class Individual < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Individual".freeze

    end
  end
end
