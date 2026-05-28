# frozen_string_literal: true

# Class from DFC Business Ontology: #AsRealizedTransformation
require_relative '../core/semantic_object'
require_relative 'transformation'


module DfcLinkmlConnector
  module Models
    class AsRealizedTransformation < Transformation
      SEMANTIC_TYPE = "dfc-b:AsRealizedTransformation".freeze

    end
  end
end
