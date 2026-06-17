# frozen_string_literal: true

# Class from DFC Business Ontology: #Who_Subject
require_relative '../core/semantic_object'
require_relative 'subject'


module DfcLinkmlConnector
  module Models
    class WhoSubject < Subject
      SEMANTIC_TYPE = "dfc-b:Who_Subject".freeze

    end
  end
end
