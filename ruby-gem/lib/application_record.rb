# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  # Shared behavior across all models
  def to_linkml
    {{}}
  end
end
