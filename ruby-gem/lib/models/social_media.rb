# frozen_string_literal: true

# Class from DFC Business Ontology: #SocialMedia
require_relative 'semantic_object'
require_relative 'what_subject'


module DfcLinkmlConnector
  module Models
    class SocialMedia < Core::WhatSubject
      SEMANTIC_TYPE = "dfc-b:SocialMedia".freeze

    end
  end
end
