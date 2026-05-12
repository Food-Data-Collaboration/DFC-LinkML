# frozen_string_literal: true

# Class from DFC Business Ontology: #How_Subject
require_relative 'semantic_object'
require_relative 'subject'


module DfcLinkmlConnector
  module Models
    class HowSubject < Core::Subject
      SEMANTIC_TYPE = "dfc-b:How_Subject".freeze

    end
  end
end
