# frozen_string_literal: true

# Class from DFC Business Ontology: #Place
require_relative '../core/semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Place < WhereSubject
      SEMANTIC_TYPE = "dfc-b:Place".freeze

      # @return [String]
      attr_accessor :hosts

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @hosts = hosts
        self.semanticType = "dfc-b:Place"
        registerSemanticProperty("dfc-b:Place:hosts", &method("hosts")).valueSetter = method("hosts=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
