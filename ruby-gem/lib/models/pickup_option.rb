# frozen_string_literal: true

# Class from DFC Business Ontology: #PickupOption
require_relative 'semantic_object'
require_relative 'shipping_option'


module DfcLinkmlConnector
  module Models
    class PickupOption < Core::ShippingOption
      SEMANTIC_TYPE = "dfc-b:PickupOption".freeze

    end
  end
end
