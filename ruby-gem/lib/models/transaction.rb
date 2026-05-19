# frozen_string_literal: true

# Class from DFC Business Ontology: #Transaction
require_relative 'semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class Transaction < Core::HowSubject
      SEMANTIC_TYPE = "dfc-b:Transaction".freeze

    end
  end
end
