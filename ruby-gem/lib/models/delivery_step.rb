# frozen_string_literal: true

# Class from DFC Business Ontology: #DeliveryStep
require_relative 'semantic_object'
require_relative 'step'


module DfcLinkmlConnector
  module Models
    class DeliveryStep < Core::Step
      SEMANTIC_TYPE = "dfc-b:DeliveryStep".freeze

    end
  end
end
