# frozen_string_literal: true

# Class from DFC Business Ontology: #Catalog
require_relative '../core/semantic_object'
require_relative 'where_subject'


module DfcLinkmlConnector
  module Models
    class Catalog < WhereSubject
      SEMANTIC_TYPE = "dfc-b:Catalog".freeze

      # @return [String]
      attr_accessor :end_date

      # @return [String]
      attr_accessor :start_date

      # @return [String]
      attr_accessor :lists

      # @return [String]
      attr_accessor :maintained_by

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, startDate: nil, lists: nil, maintainedBy: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endDate: nil, startDate: nil, lists: nil, maintainedBy: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension)
        @end_date = endDate
        @start_date = startDate
        @lists = lists
        @maintained_by = maintainedBy
        self.semanticType = "dfc-b:Catalog"
        registerSemanticProperty("dfc-b:endDate", &method("end_date")).valueSetter = method("end_date=")
        registerSemanticProperty("dfc-b:startDate", &method("start_date")).valueSetter = method("start_date=")
        registerSemanticProperty("dfc-b:lists", &method("lists")).valueSetter = method("lists=")
        registerSemanticProperty("dfc-b:maintainedBy", &method("maintained_by")).valueSetter = method("maintained_by=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
