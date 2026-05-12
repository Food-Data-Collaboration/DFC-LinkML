# frozen_string_literal: true

# Class from DFC Business Ontology: #Properties
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class Properties < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Properties".freeze

    end
  end
end
