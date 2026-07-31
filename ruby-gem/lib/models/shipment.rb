# frozen_string_literal: true

# Class from DFC Business Ontology: #Shipment
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Shipment < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Shipment".freeze

      # @return [String]
      attr_accessor :end_date

      # @return [String]
      attr_accessor :start_date

      # @return [String]
      attr_accessor :is_shipped_in

      # @return [String]
      attr_accessor :transports

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

      # @return [PhysicalPlace]
      attr_accessor :ends_at

      # @return [PhysicalPlace]
      attr_accessor :starts_at

      # @param semanticId [String]
      # @param endDate: nil, startDate: nil, isShippedIn: nil, transports: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endsAt: nil, startsAt: nil
      def initialize(semanticId, endDate: nil, startDate: nil, isShippedIn: nil, transports: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, endsAt: nil, startsAt: nil)
        super(semanticId)
        @end_date = endDate
        @start_date = startDate
        @is_shipped_in = isShippedIn
        @transports = transports
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        @ends_at = endsAt
        @starts_at = startsAt
        self.semanticType = "dfc-b:Shipment"
        registerSemanticProperty("dfc-b:Shipment:end_date", &method("end_date")).valueSetter = method("end_date=")
        registerSemanticProperty("dfc-b:Shipment:start_date", &method("start_date")).valueSetter = method("start_date=")
        registerSemanticProperty("dfc-b:Shipment:is_shipped_in", &method("is_shipped_in")).valueSetter = method("is_shipped_in=")
        registerSemanticProperty("dfc-b:Shipment:transports", &method("transports")).valueSetter = method("transports=")
        registerSemanticProperty("dfc-b:Shipment:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Shipment:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Shipment:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Shipment:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Shipment:has_dimension", &method("dimension")).valueSetter = method("dimension=")
        registerSemanticProperty("dfc-b:Shipment:ends_at", &method("ends_at")).valueSetter = method("ends_at=")
        registerSemanticProperty("dfc-b:Shipment:starts_at", &method("starts_at")).valueSetter = method("starts_at=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
