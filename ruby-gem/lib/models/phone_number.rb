# frozen_string_literal: true

# Class from DFC Business Ontology: #PhoneNumber
require_relative '../core/semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class PhoneNumber < WhatSubject
      SEMANTIC_TYPE = "dfc-b:PhoneNumber".freeze

    end
  end
end
