# frozen_string_literal: true

require 'json'

module DfcLinkmlConnector
  module Dpm
    # The DFC authorisation scopes the connector knows about.
    #
    # The notation set is derived from the bundled v2.0.0 +scopes+ taxonomy, so
    # adding a scope upstream is picked up by regeneration rather than by editing
    # this file. The concept IRIs are deliberately *not* derived from that data:
    # the bundled JSON-LD context prefixes +dfc-s:+ with the versioned
    # directory, so expanding it yields …/v2.0.0/scopes.rdf#ReadEnterprise,
    # whereas the RDF that actually dereferences — and the IRI the DPM stores and
    # the reference client compares — is the unversioned
    # …/scopes.rdf#ReadEnterprise. Hence the fixed template below.
    class ScopeCatalogue
      # Namespace the taxonomy's scope concept IRIs live in. Unversioned.
      IRI_BASE = 'http://w3id.org/dfc/taxonomies/scopes.rdf#'.freeze

      # Compact and expanded forms, since the bundled JSON-LD uses the former.
      SKOS_CONCEPT = ['skos:Concept',
                      'http://www.w3.org/2004/02/skos/core#Concept'].freeze
      SKOS_NOTATION = ['skos:notation',
                       'http://www.w3.org/2004/02/skos/core#notation'].freeze

      # @return [Array<Scope>] every scope, in taxonomy order.
      attr_reader :all

      # The taxonomy shipped with the gem, as JSON-LD. Offline: nothing is fetched.
      def self.bundled_path
        File.expand_path('../../vocabularies/scope.jsonld', __dir__)
      end

      # The catalogue built from the taxonomy shipped with the gem.
      #
      # @return [ScopeCatalogue]
      # @raise [RuntimeError] when the bundled taxonomy is missing or empty
      def self.bundled
        graph = JSON.parse(File.read(bundled_path))['@graph']
        raise 'Bundled scope taxonomy has no @graph' unless graph.is_a?(Array)

        scopes = graph.select { |entry| concept?(entry) }
                      .map { |entry| from_concept(entry) }
                      .compact
        raise 'Bundled scope taxonomy declares no skos:Concept' if scopes.empty?

        new(scopes)
      end

      # @param scopes [Array<Scope>] every scope the catalogue should offer
      def initialize(scopes)
        @all = scopes.dup.freeze
        @by_notation = {}
        @by_iri = {}
        scopes.each do |scope|
          @by_notation[scope.notation] = scope
          @by_iri[scope.iri] = scope
        end
        @by_notation.freeze
        @by_iri.freeze
        freeze
      end

      # Looks a scope up by its +skos:notation+.
      #
      # @param notation [String]
      # @return [Scope, nil]
      def by_notation(notation)
        @by_notation[notation.to_s]
      end

      # Looks a scope up by concept IRI.
      #
      # @param iri [String]
      # @return [Scope, nil]
      def by_iri(iri)
        @by_iri[iri.to_s]
      end

      # Whether the catalogue recognises this notation.
      #
      # @param notation [String]
      # @return [Boolean]
      def contains?(notation)
        @by_notation.key?(notation.to_s)
      end

      # The scope for this notation.
      #
      # @param notation [String]
      # @return [Scope]
      # @raise [ArgumentError] when the notation is not in the taxonomy
      def fetch(notation)
        by_notation(notation) or
          raise ArgumentError,
                "Unknown DFC scope #{notation.to_s.inspect}. " \
                "Known scopes: #{@by_notation.keys.join(', ')}"
      end

      def self.concept?(entry)
        entry.is_a?(Hash) &&
          Array(entry['@type']).any? { |type| SKOS_CONCEPT.include?(type) }
      end

      def self.from_concept(entry)
        notation = SKOS_NOTATION.map { |key| entry[key] }.compact.first
        return nil if notation.nil? || notation.to_s.empty?

        Scope.new(notation.to_s, IRI_BASE + notation.to_s)
      end
      private_class_method :concept?, :from_concept
    end
  end
end
