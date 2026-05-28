# frozen_string_literal: true

# Class from DFC Business Ontology: #Step
require_relative '../core/semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Step < WhereSubject
      SEMANTIC_TYPE = "dfc-b:Step".freeze

    end
  end
end
