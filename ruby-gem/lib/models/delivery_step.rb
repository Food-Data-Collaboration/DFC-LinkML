# frozen_string_literal: true

# Class from DFC Business Ontology: #DeliveryStep
require_relative '../core/semantic_object'
require_relative 'step'


module DfcLinkmlConnector
  module Models
    class DeliveryStep < Step
      SEMANTIC_TYPE = "dfc-b:DeliveryStep".freeze

    end
  end
end
