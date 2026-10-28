# frozen_string_literal: true

module DfcLinkmlConnector
  module Dpm
    # One DFC authorisation scope, such as +ReadEnterprise+.
    #
    # A scope is identified by its +skos:notation+, and that literal is the only
    # canonical key. The taxonomy's term IRIs are unversioned
    # (…/taxonomies/scopes.rdf#ReadEnterprise) even when fetched through the
    # /v2.0.0/ URL, so keying on the IRI would make a taxonomy version bump look
    # like a revocation of every grant the platform has ever been given.
    class Scope
      # +skos:notation+. The stable identity of this scope.
      attr_reader :notation

      # The concept IRI, in the form the DPM stores and the wire carries.
      attr_reader :iri

      # @param notation [String] +skos:notation+, e.g. "ReadEnterprise".
      # @param iri [String] the concept IRI, e.g. "…/scopes.rdf#ReadEnterprise".
      def initialize(notation, iri)
        if notation.nil? || notation.to_s.empty?
          raise ArgumentError, 'Scope notation must be a non-empty string'
        end

        @notation = notation.to_s
        @iri = iri.to_s
        freeze
      end

      # Whether two scopes denote the same scope.
      #
      # Compares the notation, not the IRI, so a scope read off the wire matches
      # its catalogue entry even when the payload carries a differently
      # namespaced IRI.
      def ==(other)
        other.is_a?(Scope) && other.notation == notation
      end
      alias eql? ==

      def hash
        notation.hash
      end

      # This scope as one element of a DPM assignment list.
      #
      # @return [Hash] {"@id" => …, "dfc-t:scope" => …, "@type" => "dfc-t:Scope"}
      def to_h
        { '@id' => iri, DfcTerms::SCOPE_TERM => notation,
          '@type' => DfcTerms::SCOPE_TYPE }
      end

      # Reads one element of a DPM assignment list.
      #
      # A missing +@id+ is tolerated: the notation is authoritative, so the IRI
      # can be derived from it by the catalogue.
      #
      # @param node [Hash, String] a JSON-LD scope node, or the notation literal
      # @param iri [String, nil] IRI to use when the node carries none
      # @return [Scope]
      def self.from_json(node, iri = nil)
        return new(node, iri || node) if node.is_a?(String)
        unless node.is_a?(Hash)
          raise ArgumentError, "Not a DPM scope node: #{node.inspect}"
        end

        notation = node[DfcTerms::SCOPE_TERM]
        if notation.nil? || notation.to_s.empty?
          raise ArgumentError,
                "DPM scope node carries no #{DfcTerms::SCOPE_TERM.inspect} literal: #{node.inspect}"
        end

        id = node['@id']
        new(notation, id.nil? || id.to_s.empty? ? (iri || notation) : id)
      end

      def to_s
        "Scope(#{notation})"
      end
    end
  end
end
