# frozen_string_literal: true

# Class from DFC Business Ontology: #PickUpStep
require_relative '../core/semantic_object'
require_relative 'step'


module DfcLinkmlConnector
  module Models
    class PickUpStep < Step
      SEMANTIC_TYPE = "dfc-b:PickUpStep".freeze

    end
  end
end
