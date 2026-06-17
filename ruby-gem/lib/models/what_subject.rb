# frozen_string_literal: true

# Class from DFC Business Ontology: #What_Subject
require_relative '../core/semantic_object'
require_relative 'subject'


module DfcLinkmlConnector
  module Models
    class WhatSubject < Subject
      SEMANTIC_TYPE = "dfc-b:What_Subject".freeze

    end
  end
end
