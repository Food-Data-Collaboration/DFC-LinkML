# frozen_string_literal: true

# Class from DFC Business Ontology: #Variant
require_relative 'semantic_object'
require_relative 'defined_product'


module DfcLinkmlConnector
  module Models
    class Variant < Core::DefinedProduct
      SEMANTIC_TYPE = "dfc-b:Variant".freeze

      # @return [VariantCaracteristic]
      attr_accessor :variant_caracteristic

      # @param semanticId [String]
      # @param variantCaracteristic: nil
      def initialize(semanticId, variantCaracteristic: nil)
        super(semanticId)
        @variant_caracteristic = variantCaracteristic
        self.semanticType = "dfc-b:Variant"
        registerSemanticProperty("dfc-b:Variant:hasVariantCaracteristic", &method("variant_caracteristic")).valueSetter = method("variant_caracteristic=")
      end

    end
  end
end
