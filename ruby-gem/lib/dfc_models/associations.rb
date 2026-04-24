# frozen_string_literal: true

module DfcModels
  module Associations
    # Helper module for common DFC associations
    
    # Products
    def product_associations
      {
        ingredients: -> { has_many :ingredients },
        allergens: -> { has_many :allergen_characteristics },
        nutrients: -> { has_many :nutrient_characteristics },
        labels: -> { has_many :labelling_characteristics },
        physical_properties: -> { has_many :physical_characteristics }
      }
    end
    
    # Orders
    def order_associations
      {
        lines: -> { has_many :order_lines },
        offers: -> { has_many :offers },
        payments: -> { has_many :payment_methods }
      }
    end
    
    # Agents
    def agent_associations
      {
        catalogs: -> { has_many :catalogs },
        orders: -> { has_many :orders },
        products: -> { has_many :supplied_products }
      }
    end
  end
end
