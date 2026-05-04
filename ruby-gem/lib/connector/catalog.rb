# frozen_string_literal: true

# Class from DFC Business Ontology: #Catalog
require_relative '../semantic_object'
require_relative 'where_subject'


class Catalog < WhereSubject
  SEMANTIC_TYPE = "dfc-b:Catalog".freeze

end
