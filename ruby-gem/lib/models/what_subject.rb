# frozen_string_literal: true

# Class from DFC Business Ontology: #What_Subject
require_relative 'semantic_object'
require_relative 'subject'


module DfcLinkmlConnector
  module Models
    class WhatSubject < Core::Subject
      SEMANTIC_TYPE = "dfc-b:What_Subject".freeze

    end
  end
end
