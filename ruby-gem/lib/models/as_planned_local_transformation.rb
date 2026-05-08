# frozen_string_literal: true

# Class from DFC Business Ontology: #AsPlannedLocalTransformation
require_relative 'semantic_object'
require_relative 'transformation'


module DfcLinkmlConnector
  module Models
    class AsPlannedLocalTransformation < Core::Transformation
      SEMANTIC_TYPE = "dfc-b:AsPlannedLocalTransformation".freeze

    end
  end
end
