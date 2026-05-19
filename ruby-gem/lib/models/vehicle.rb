# frozen_string_literal: true

# Class from DFC Business Ontology: #Vehicle
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Vehicle < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:Vehicle".freeze

    end
  end
end
