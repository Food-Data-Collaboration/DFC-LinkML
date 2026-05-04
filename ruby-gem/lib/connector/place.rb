# frozen_string_literal: true

# Class from DFC Business Ontology: #Place
require_relative '../semantic_object'
require_relative 'where_subject'


class Place < WhereSubject
  SEMANTIC_TYPE = "dfc-b:Place".freeze

end
