# frozen_string_literal: true

# Class from DFC Business Ontology: #VirtualPlace
require_relative '../core/semantic_object'
require_relative 'place'


module DfcLinkmlConnector
  module Models
    class VirtualPlace < Place
      SEMANTIC_TYPE = "dfc-b:VirtualPlace".freeze

      # @return [String]
      attr_accessor :url

      # @return [String]
      attr_accessor :website_page

      # @param semanticId [String]
      # @param date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: nil, url: nil, websitePage: nil
      def initialize(semanticId, date: nil, description: nil, name: nil, characteristicOf: nil, dimension: nil, hosts: nil, url: nil, websitePage: nil)
        super(semanticId, date: date, description: description, name: name, characteristicOf: characteristicOf, dimension: dimension, hosts: hosts)
        @url = url
        @website_page = websitePage
        self.semanticType = "dfc-b:VirtualPlace"
        registerSemanticProperty("dfc-b:URL", &method("url")).valueSetter = method("url=")
        registerSemanticProperty("dfc-b:websitePage", &method("website_page")).valueSetter = method("website_page=")
      end

      Core::SemanticObject.type_registry[SEMANTIC_TYPE] = self
    end
  end
end
