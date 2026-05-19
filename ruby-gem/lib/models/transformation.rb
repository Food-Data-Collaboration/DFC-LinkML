# frozen_string_literal: true

# Class from DFC Business Ontology: #Transformation
require_relative 'semantic_object'
require_relative 'how_subject'


module DfcLinkmlConnector
  module Models
    class Transformation < Core::HowSubject
      SEMANTIC_TYPE = "dfc-b:Transformation".freeze

    end
  end
end
