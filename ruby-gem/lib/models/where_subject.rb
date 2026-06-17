# frozen_string_literal: true

# Class from DFC Business Ontology: #Where_Subject
require_relative '../core/semantic_object'
require_relative 'subject'


module DfcLinkmlConnector
  module Models
    class WhereSubject < Subject
      SEMANTIC_TYPE = "dfc-b:Where_Subject".freeze

    end
  end
end
