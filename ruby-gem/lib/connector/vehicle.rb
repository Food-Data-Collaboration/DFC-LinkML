# frozen_string_literal: true

# Class from DFC Business Ontology: #Vehicle
require_relative '../semantic_object'
require_relative 'what_subject'


class Vehicle < WhatSubject
  SEMANTIC_TYPE = "dfc-b:Vehicle".freeze

end
