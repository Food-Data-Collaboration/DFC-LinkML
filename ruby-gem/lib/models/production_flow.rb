# frozen_string_literal: true

# Class from DFC Business Ontology: #ProductionFlow
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class ProductionFlow < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:ProductionFlow".freeze

      # @return [Float]
      attr_accessor :quantity

      # @return [String]
      attr_accessor :output_of

      # @return [String]
      attr_accessor :produces

      # @return [String]
      attr_accessor :date

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @return [String]
      attr_accessor :characteristic_of

      # @return [String]
      attr_accessor :dimension

      # @param semanticId [String]
      # @param quantity: nil, outputOf: nil, produces: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, quantity: nil, outputOf: nil, produces: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @quantity = quantity
        @output_of = outputOf
        @produces = produces
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:ProductionFlow"
        registerSemanticProperty("dfc-b:quantity", &method("quantity")).valueSetter = method("quantity=")
        registerSemanticProperty("dfc-b:outputOf", &method("output_of")).valueSetter = method("output_of=")
        registerSemanticProperty("dfc-b:produces", &method("produces")).valueSetter = method("produces=")
        registerSemanticProperty("dfc-b:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:characteristicOf", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:hasDimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
