# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalPlace
require_relative '../core/semantic_object'
require_relative 'place'


module DfcLinkmlConnector
  module Models
    class PhysicalPlace < Place
      SEMANTIC_TYPE = "dfc-b:PhysicalPlace".freeze

      # @return [String]
      attr_accessor :has_phone_number

      # @return [Address, String]
      attr_accessor :address

      # @return [Feature, String]
      attr_accessor :geo_json_feature

      # @return [Person, String]
      attr_accessor :main_contact

      # @return [OpeningHoursSpecification, String]
      attr_accessor :is_open_during

      # @return [Array<TheoriticalStock, String>]
      attr_accessor :localizes

      # @return [Array<RealStock, String>]
      attr_accessor :stores

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: [], hasPhoneNumber: nil, address: nil, geoJsonFeature: nil, mainContact: nil, isOpenDuring: nil, localizes: [], stores: []
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: [], hasPhoneNumber: nil, address: nil, geoJsonFeature: nil, mainContact: nil, isOpenDuring: nil, localizes: [], stores: [])
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, hosts: hosts)
        @has_phone_number = hasPhoneNumber
        @address = address
        @geo_json_feature = geoJsonFeature
        @main_contact = mainContact
        @is_open_during = isOpenDuring
        @localizes = localizes
        @stores = stores
        self.semanticType = "dfc-b:PhysicalPlace"
        registerSemanticProperty("dfc-b:hasPhoneNumber", &method("has_phone_number")).valueSetter = method("has_phone_number=")
        registerSemanticProperty("dfc-b:hasAddress", &method("address")).valueSetter = method("address=")
        registerSemanticProperty("dfc-b:hasGeoJsonFeature", &method("geo_json_feature")).valueSetter = method("geo_json_feature=")
        registerSemanticProperty("dfc-b:hasMainContact", &method("main_contact")).valueSetter = method("main_contact=")
        registerSemanticProperty("dfc-b:isOpenDuring", &method("is_open_during")).valueSetter = method("is_open_during=")
        registerSemanticProperty("dfc-b:localizes", &method("localizes")).valueSetter = method("localizes=")
        registerSemanticProperty("dfc-b:stores", &method("stores")).valueSetter = method("stores=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
