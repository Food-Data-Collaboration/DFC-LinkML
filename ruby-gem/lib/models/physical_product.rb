# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalProduct
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class PhysicalProduct < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:PhysicalProduct".freeze

    end
  end
end
