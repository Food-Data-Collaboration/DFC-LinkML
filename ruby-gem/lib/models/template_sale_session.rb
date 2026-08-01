# frozen_string_literal: true

# Class from DFC Business Ontology: #TemplateSaleSession
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class TemplateSaleSession < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:TemplateSaleSession".freeze

      # @return [String]
      attr_accessor :hosted_at

      # @return [String]
      attr_accessor :is_template_sale_session_of

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
      # @param hostedAt: nil, isTemplateSaleSessionOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, hostedAt: nil, isTemplateSaleSessionOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @hosted_at = hostedAt
        @is_template_sale_session_of = isTemplateSaleSessionOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:TemplateSaleSession"
        registerSemanticProperty("dfc-b:hostedAt", &method("hosted_at")).valueSetter = method("hosted_at=")
        registerSemanticProperty("dfc-b:isTemplateSaleSessionOf", &method("is_template_sale_session_of")).valueSetter = method("is_template_sale_session_of=")
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
