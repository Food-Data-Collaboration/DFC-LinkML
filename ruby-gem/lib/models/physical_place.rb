# frozen_string_literal: true

# Class from DFC Business Ontology: #PhysicalPlace
require_relative '../core/semantic_object'
require_relative 'place'


module DfcLinkmlConnector
  module Models
    class PhysicalPlace < Place
      SEMANTIC_TYPE = "dfc-b:PhysicalPlace".freeze

      # @return [String]
      attr_accessor :address

      # @return [String]
      attr_accessor :main_contact

      # @return [String]
      attr_accessor :phone_number

      # @return [String]
      attr_accessor :localizes

      # @return [String]
      attr_accessor :stores

      # @return [Feature]
      attr_accessor :geo_json_feature

      # @return [OpeningHoursSpecification]
      attr_accessor :is_open_during

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: nil, address: nil, mainContact: nil, phoneNumber: nil, localizes: nil, stores: nil, geoJsonFeature: nil, isOpenDuring: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: nil, address: nil, mainContact: nil, phoneNumber: nil, localizes: nil, stores: nil, geoJsonFeature: nil, isOpenDuring: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, hosts: hosts)
        @address = address
        @main_contact = mainContact
        @phone_number = phoneNumber
        @localizes = localizes
        @stores = stores
        @geo_json_feature = geoJsonFeature
        @is_open_during = isOpenDuring
        self.semanticType = "dfc-b:PhysicalPlace"
        registerSemanticProperty("dfc-b:hasAddress", &method("address")).valueSetter = method("address=")
        registerSemanticProperty("dfc-b:hasMainContact", &method("main_contact")).valueSetter = method("main_contact=")
        registerSemanticProperty("dfc-b:hasPhoneNumber", &method("phone_number")).valueSetter = method("phone_number=")
        registerSemanticProperty("dfc-b:localizes", &method("localizes")).valueSetter = method("localizes=")
        registerSemanticProperty("dfc-b:stores", &method("stores")).valueSetter = method("stores=")
        registerSemanticProperty("dfc-b:hasGeoJsonFeature", &method("geo_json_feature")).valueSetter = method("geo_json_feature=")
        registerSemanticProperty("dfc-b:isOpenDuring", &method("is_open_during")).valueSetter = method("is_open_during=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
