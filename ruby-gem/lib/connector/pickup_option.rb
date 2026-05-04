# frozen_string_literal: true

# Class from DFC Business Ontology: #PickupOption
require_relative '../semantic_object'
require_relative 'shipping_option'


class PickupOption < ShippingOption
  SEMANTIC_TYPE = "dfc-b:PickupOption".freeze

end
