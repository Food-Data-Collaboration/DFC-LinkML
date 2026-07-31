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
        registerSemanticProperty("dfc-b:Concept:certificate_of", &method("certificate_of")).valueSetter = method("certificate_of=")
        registerSemanticProperty("dfc-b:Concept:claim_of", &method("claim_of")).valueSetter = method("claim_of=")
        registerSemanticProperty("dfc-b:Concept:container_information_of", &method("container_information_of")).valueSetter = method("container_information_of=")
        registerSemanticProperty("dfc-b:Concept:geographical_origin_of", &method("geographical_origin_of")).valueSetter = method("geographical_origin_of=")
        registerSemanticProperty("dfc-b:Concept:nature_origin_of", &method("nature_origin_of")).valueSetter = method("nature_origin_of=")
        registerSemanticProperty("dfc-b:Concept:part_origin_of", &method("part_origin_of")).valueSetter = method("part_origin_of=")
        registerSemanticProperty("dfc-b:Concept:type_of", &method("type_of")).valueSetter = method("type_of=")
        registerSemanticProperty("dfc-b:Concept:date", &method("date")).valueSetter = method("date=")
        registerSemanticProperty("dfc-b:Concept:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:Concept:name", &method("name")).valueSetter = method("name=")
        registerSemanticProperty("dfc-b:Concept:characteristic_of", &method("characteristic_of")).valueSetter = method("characteristic_of=")
        registerSemanticProperty("dfc-b:Concept:has_dimension", &method("dimension")).valueSetter = method("dimension=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
