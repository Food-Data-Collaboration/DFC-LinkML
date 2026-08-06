# frozen_string_literal: true

# Class from DFC Business Ontology: #Concept
require_relative '../core/semantic_object'


module DfcLinkmlConnector
  module Models
    class Concept < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:Concept".freeze

      # @return [String]
      attr_accessor :certificate_of

      # @return [String]
      attr_accessor :claim_of

      # @return [String]
      attr_accessor :container_information_of

      # @return [String]
      attr_accessor :geographical_origin_of

      # @return [String]
      attr_accessor :nature_origin_of

      # @return [String]
      attr_accessor :part_origin_of

      # @return [String]
      attr_accessor :type_of

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
      # @param certificateOf: nil, claimOf: nil, containerInformationOf: nil, geographicalOriginOf: nil, natureOriginOf: nil, partOriginOf: nil, typeOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil
      def initialize(semanticId, certificateOf: nil, claimOf: nil, containerInformationOf: nil, geographicalOriginOf: nil, natureOriginOf: nil, partOriginOf: nil, typeOf: nil, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil)
        super(semanticId)
        @certificate_of = certificateOf
        @claim_of = claimOf
        @container_information_of = containerInformationOf
        @geographical_origin_of = geographicalOriginOf
        @nature_origin_of = natureOriginOf
        @part_origin_of = partOriginOf
        @type_of = typeOf
        @date = date
        @description = description
        @name = name
        @characteristic_of = characteristicOf
        @dimension = dimension
        self.semanticType = "dfc-b:Concept"
        registerSemanticProperty("dfc-b:certificateOf", &method("certificate_of")).valueSetter = method("certificate_of=")
        registerSemanticProperty("dfc-b:claimOf", &method("claim_of")).valueSetter = method("claim_of=")
        registerSemanticProperty("dfc-b:containerInformationOf", &method("container_information_of")).valueSetter = method("container_information_of=")
        registerSemanticProperty("dfc-b:geographicalOriginOf", &method("geographical_origin_of")).valueSetter = method("geographical_origin_of=")
        registerSemanticProperty("dfc-b:natureOriginOf", &method("nature_origin_of")).valueSetter = method("nature_origin_of=")
        registerSemanticProperty("dfc-b:partOriginOf", &method("part_origin_of")).valueSetter = method("part_origin_of=")
        registerSemanticProperty("dfc-b:typeOf", &method("type_of")).valueSetter = method("type_of=")
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
