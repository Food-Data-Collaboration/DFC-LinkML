# frozen_string_literal: true

# Class from DFC Business Ontology: #Ingredient
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class Ingredient < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:Ingredient".freeze

    end
  end
end
