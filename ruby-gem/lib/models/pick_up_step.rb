# frozen_string_literal: true

# Class from DFC Business Ontology: #PickUpStep
require_relative 'semantic_object'
require_relative 'step'


module DfcLinkmlConnector
  module Models
    class PickUpStep < Core::Step
      SEMANTIC_TYPE = "dfc-b:PickUpStep".freeze

    end
  end
end
