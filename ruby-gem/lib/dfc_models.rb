# frozen_string_literal: true

require 'active_record'

# DFC Models
module DfcModels
  def self.root
    File.expand_path('..', __dir__)
  end
end

require_relative 'dfc_models/associations'
