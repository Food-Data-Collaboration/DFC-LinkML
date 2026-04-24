# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  # Shared behavior across all models
  
  # Convert model to LinkML-compatible hash
  def to_linkml
    attributes.slice(*self.class.column_names.map(&:to_sym))
  end
  
  # Find or create by external ID
  def self.find_or_create_by_dfc_id(dfc_id)
    find_or_create_by(uri: dfc_id)
  end
end
