# frozen_string_literal: true

# Class from DFC Business Ontology: #RepresentedThing
require_relative 'semantic_object'


module DfcLinkmlConnector
  module Models
    class RepresentedThing < Core::SemanticObject
      SEMANTIC_TYPE = "dfc-b:RepresentedThing".freeze

      # @return [String]
      attr_accessor :image

      # @return [String]
      attr_accessor :url

      # @return [String]
      attr_accessor :description

      # @return [String]
      attr_accessor :name

      # @param semanticId [String]
      # @param image: nil, url: nil, description: nil, name: nil
      def initialize(semanticId, image: nil, url: nil, description: nil, name: nil)
        super(semanticId)
        @image = image
        @url = url
        @description = description
        @name = name
        self.semanticType = "dfc-b:RepresentedThing"
        registerSemanticProperty("dfc-b:RepresentedThing:Image", &method("image")).valueSetter = method("image=")
        registerSemanticProperty("dfc-b:RepresentedThing:URL", &method("url")).valueSetter = method("url=")
        registerSemanticProperty("dfc-b:RepresentedThing:description", &method("description")).valueSetter = method("description=")
        registerSemanticProperty("dfc-b:RepresentedThing:name", &method("name")).valueSetter = method("name=")
      end

    end
  end
end
