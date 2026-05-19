# frozen_string_literal: true

# Class from DFC Business Ontology: #Who_Subject
require_relative 'semantic_object'
require_relative 'subject'


module DfcLinkmlConnector
  module Models
    class WhoSubject < Core::Subject
      SEMANTIC_TYPE = "dfc-b:Who_Subject".freeze

    end
  end
end
