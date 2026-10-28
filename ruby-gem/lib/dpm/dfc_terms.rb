# frozen_string_literal: true

module DfcLinkmlConnector
  module Dpm
    # The JSON-LD terms the DPM wire contract uses.
    #
    # +hasAssignedScopes+, +Scope+ and +scope+ are a de-facto extension: they
    # are absent from the published DFC Technical Ontology, and their +dfc-t:+
    # prefix resolves to a GitHub blob URL rather than the w3id namespace the
    # rest of the DFC vocabulary uses. They are pinned here as exact strings
    # because the reference client in Food-Data-Collaboration/data-sharing-module
    # matches on them literally.
    module DfcTerms
      # The namespace +dfc-t:+ resolves to in the DPM's JSON-LD context.
      NAMESPACE =
        'https://github.com/datafoodconsortium/ontology/blob/master/' \
        'src/DFC_TechnicalOntology.owl#'.freeze

      # Compact form of NAMESPACE.
      PREFIX = 'dfc-t:'.freeze

      # The relation from a platform to its scopes.
      HAS_ASSIGNED_SCOPES = 'dfc-t:hasAssignedScopes'.freeze

      # The +@type+ each element of that relation carries.
      SCOPE_TYPE = 'dfc-t:Scope'.freeze

      # The +skos:notation+ literal inside each list element.
      SCOPE_TERM = 'dfc-t:scope'.freeze

      # The +@type+ of the list wrapper itself.
      RDF_LIST = 'rdf:List'.freeze
    end
  end
end
