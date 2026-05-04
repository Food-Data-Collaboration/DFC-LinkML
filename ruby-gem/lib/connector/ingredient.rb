# frozen_string_literal: true

# Class from DFC Business Ontology: #Ingredient
require_relative '../semantic_object'
require_relative 'what_subject'


class Ingredient < WhatSubject
  SEMANTIC_TYPE = "dfc-b:Ingredient".freeze

end
