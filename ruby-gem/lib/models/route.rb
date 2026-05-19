# frozen_string_literal: true

# Class from DFC Business Ontology: #Route
require_relative 'semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Route < Core::WhereSubject
      SEMANTIC_TYPE = "dfc-b:Route".freeze

      # @return [Step]
      attr_accessor :step

      # @param semanticId [String]
      # @param step: nil
      def initialize(semanticId, step: nil)
        super(semanticId)
        @step = step
        self.semanticType = "dfc-b:Route"
        registerSemanticProperty("dfc-b:Route:hasStep", &method("step")).valueSetter = method("step=")
      end

    end
  end
end
