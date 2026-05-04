# frozen_string_literal: true

# Class from DFC Business Ontology: #PhoneNumber
require_relative '../semantic_object'
require_relative 'what_subject'


class PhoneNumber < WhatSubject
  SEMANTIC_TYPE = "dfc-b:PhoneNumber".freeze

end
