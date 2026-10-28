# frozen_string_literal: true

module DfcLinkmlConnector
  module Dpm
    # The scopes assigned to one platform or organisation.
    #
    # This is the assignment *relation* — "this platform may do these six
    # things" — not an authorisation decision. Scope is a coarse API gate: an
    # assignment is necessary but never sufficient (see ADR-0009 and ADR-0014),
    # and the grant layer that decides individual operations is separate from
    # this data.
    #
    # The assignment table is deployment state, differing per installation and
    # per consent decision, which is why it is a hand-written model rather than
    # a class generated from the LinkML schema.
    class ScopeAssignment
      # @return [String] +@id+ of the platform or organisation holding the scopes.
      attr_reader :subject

      # @return [Array<Scope>] the assigned scopes, in the order given.
      attr_reader :scopes

      # @param subject [String] +@id+ of the platform or organisation
      # @param scopes [Array<Scope>] the scopes assigned to it
      def initialize(subject, scopes)
        if subject.nil? || subject.to_s.empty?
          raise ArgumentError, 'ScopeAssignment subject must be a non-empty @id'
        end

        @subject = subject.to_s
        @scopes = scopes.dup.freeze
        freeze
      end

      # Whether this assignment includes a scope.
      #
      # @param scope [Scope, String] a scope, or its +skos:notation+
      # @return [Boolean]
      def has?(scope)
        notation = scope.is_a?(Scope) ? scope.notation : scope.to_s
        scopes.any? { |assigned| assigned.notation == notation }
      end

      # The scopes this assignment carries that the catalogue does not recognise.
      #
      # Assignment import never drops what it does not understand — silently
      # discarding a scope would be an authorisation decision made invisibly.
      # This reports the same data so a caller can reject it, warn, or forward it
      # to a newer DPM.
      #
      # @param catalogue [ScopeCatalogue]
      # @return [Array<Scope>]
      def unknown(catalogue)
        scopes.reject { |scope| catalogue.contains?(scope.notation) }
      end

      # This assignment as the JSON-LD the DPM reads and writes.
      #
      # @return [Hash] {"@id" => …, "dfc-t:hasAssignedScopes" => {"@type" => "rdf:List", "@list" => […]}}
      def to_h
        { '@id' => subject,
          DfcTerms::HAS_ASSIGNED_SCOPES => {
            '@type' => DfcTerms::RDF_LIST,
            '@list' => scopes.map(&:to_h)
          } }
      end

      # Reads an assignment from a DPM document.
      #
      # Tolerant of the shapes that occur in practice: the whole document, the
      # +dfc-t:hasAssignedScopes+ value on its own, the +@list+ wrapper, and a
      # bare array (which is what the DPM serves for +requestedScopes+).
      #
      # Nothing is dropped on the way in. An element the catalogue does not
      # recognise is kept as-is and reported by #unknown.
      #
      # @param node [Hash, Array] the document, list wrapper or array to read
      # @param subject [String, nil] +@id+ to use when +node+ carries none
      # @param catalogue [ScopeCatalogue, nil] used to resolve an element that
      #   carries only a +dfc-t:scope+ literal and no +@id+
      # @return [ScopeAssignment]
      # @raise [ArgumentError] when no subject is available, or an element is
      #   malformed
      def self.from_json(node, subject = nil, catalogue = nil)
        id, list = unwrap_list(node)
        resolved = id || subject
        raise ArgumentError, SCOPE_SUBJECT_ERROR unless resolved

        new(resolved, list.map { |element| from_element(element, catalogue) })
      end

      def to_s
        "ScopeAssignment(#{subject}[#{scopes.length} scopes])"
      end

      SCOPE_SUBJECT_ERROR =
        'ScopeAssignment.from_json needs the platform @id: pass it explicitly ' \
        'when the document carries none'.freeze

      def self.from_element(element, catalogue)
        unless element.is_a?(Hash)
          raise ArgumentError, "DPM scope node is not a Hash: #{element.inspect}"
        end

        notation = element[DfcTerms::SCOPE_TERM]
        if notation.nil? || notation.to_s.empty?
          raise ArgumentError,
                "DPM scope node carries no #{DfcTerms::SCOPE_TERM.inspect} literal: #{element.inspect}"
        end

        id = element['@id']
        return Scope.new(notation.to_s, id.to_s) unless id.nil? || id.to_s.empty?

        known = catalogue && catalogue.by_notation(notation)
        Scope.new(notation.to_s, known ? known.iri : notation.to_s)
      end
      private_class_method :from_element

      # Peels the document down to its +@list+ and +@id+, at whatever nesting.
      def self.unwrap_list(node)
        return [nil, node] if node.is_a?(Array)

        unless node.is_a?(Hash)
          raise ArgumentError, "Not a DPM assignment: #{node.inspect}"
        end

        id = node['@id']
        id = nil if id.nil? || id.to_s.empty?

        relation = node[DfcTerms::HAS_ASSIGNED_SCOPES]
        if relation.nil?
          list = node['@list']
          return [id, list] if list.is_a?(Array)

          raise ArgumentError,
                "DPM assignment carries no #{DfcTerms::HAS_ASSIGNED_SCOPES.inspect} and no @list: #{node.inspect}"
        end
        return [id, relation] if relation.is_a?(Array)

        unless relation.is_a?(Hash)
          raise ArgumentError,
                "#{DfcTerms::HAS_ASSIGNED_SCOPES.inspect} is not a list: #{relation.inspect}"
        end

        list = relation['@list']
        unless list.is_a?(Array)
          raise ArgumentError,
                "#{DfcTerms::HAS_ASSIGNED_SCOPES.inspect} carries no @list"
        end

        [id, list]
      end
      private_class_method :unwrap_list
    end
  end
end
