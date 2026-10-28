require 'spec_helper'

# The DPM scope model.
#
# Scope is a coarse API gate (ADR-0009/ADR-0014): an assignment is necessary
# but never sufficient, and the grant layer that decides individual operations
# is separate. These examples cover the assignment relation only — what a
# platform is allowed to ask for — not whether any particular request is
# authorised.
#
# The wire shape is the one Food-Data-Collaboration/data-sharing-module reads
# and writes. Its `dfc-t:` prefix resolves to a GitHub blob URL in the
# Startinblox context, and `hasAssignedScopes` is undeclared in the published
# Technical Ontology, so these strings are matched literally.
RSpec.describe DfcLinkmlConnector::Dpm do
  let(:catalogue) { DfcLinkmlConnector::Dpm::ScopeCatalogue.bundled }
  let(:subject_id) { 'https://data.example.com/platform/p1' }
  let(:read_enterprise_iri) do
    'http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise'
  end

  # The reference client's payload shape, as it appears on the wire. The
  # surrounding document also carries
  # "@context": "https://cdn.startinblox.com/owl/context-bis.jsonld"; the model
  # deliberately does not own that — the context belongs to whatever document
  # the relation is attached to.
  def wire_payload(id, entries)
    {
      '@id' => id,
      'dfc-t:hasAssignedScopes' => { '@type' => 'rdf:List', '@list' => entries }
    }
  end

  def read_enterprise(iri)
    { '@id' => iri, 'dfc-t:scope' => 'ReadEnterprise',
      '@type' => 'dfc-t:Scope' }
  end

  describe '.bundled' do
    it 'derives its notion set from the bundled v2.0.0 taxonomy' do
      expect(catalogue.all.map(&:notation).sort).to eq(
        %w[ReadEnterprise ReadOrders ReadProducts
           WriteEnterprise WriteOrders WriteProducts]
      )
    end

    it 'gives unversioned concept IRIs, matching what dereferences' do
      # The bundled JSON-LD prefixes dfc-s: with the versioned directory, so
      # expanding it would yield …/v2.0.0/scopes.rdf#…, which does not resolve.
      expect(catalogue.fetch('ReadEnterprise').iri).to eq(read_enterprise_iri)
    end

    it 'refuses a notation the taxonomy does not declare' do
      expect { catalogue.fetch('ReadEverything') }
        .to raise_error(ArgumentError, /Unknown DFC scope/)
    end
  end

  describe DfcLinkmlConnector::Dpm::ScopeAssignment do
    it "exports the reference client's list shape verbatim" do
      assignment = described_class.new(
        subject_id, [catalogue.fetch('ReadEnterprise')]
      )

      expect(assignment.to_h).to eq(
        wire_payload(subject_id, [read_enterprise(read_enterprise_iri)])
      )
    end

    it 'survives a construct → export → import → re-export round trip' do
      original = described_class.new(
        subject_id,
        [catalogue.fetch('ReadEnterprise'), catalogue.fetch('WriteOrders')]
      )

      exported = original.to_h
      imported = described_class.from_json(exported, nil, catalogue)

      expect(imported.subject).to eq(subject_id)
      expect(imported.scopes.map(&:notation)).to eq(%w[ReadEnterprise WriteOrders])
      # Both halves of scope identity survive: the IRI the UI matches on and
      # the notation that is authoritative.
      expect(imported.scopes.first.iri).to eq(read_enterprise_iri)
      expect(imported.to_h).to eq(exported)
    end

    it 'keeps a scope it does not recognise, rather than dropping it' do
      # Discarding it would be an authorisation decision made invisibly.
      payload = wire_payload(subject_id, [
                               read_enterprise(read_enterprise_iri),
                               { '@id' => 'http://example.org/scopes#ReadEverything',
                                 'dfc-t:scope' => 'ReadEverything',
                                 '@type' => 'dfc-t:Scope' }
                             ])

      assignment = described_class.from_json(payload, nil, catalogue)

      expect(assignment.scopes.length).to eq(2)
      expect(assignment.unknown(catalogue).map(&:notation))
        .to eq(['ReadEverything'])
    end

    it 'accepts the bare array the DPM serves for requestedScopes' do
      assignment = described_class.from_json(
        [read_enterprise(read_enterprise_iri)], subject_id, catalogue
      )

      expect(assignment.subject).to eq(subject_id)
      expect(assignment.has?('ReadEnterprise')).to be true
    end

    it 'needs a subject from somewhere' do
      expect { described_class.from_json([], nil, catalogue) }
        .to raise_error(ArgumentError, /platform @id/)
    end

    it 'answers by notation, not by IRI' do
      assignment = described_class.new(
        subject_id,
        [DfcLinkmlConnector::Dpm::Scope.new('ReadEnterprise',
                                            'https://elsewhere.example/scopes#ReadEnterprise')]
      )

      expect(assignment.has?('ReadEnterprise')).to be true
      expect(assignment.has?(catalogue.fetch('ReadEnterprise'))).to be true
      expect(assignment.has?('WriteOrders')).to be false
    end
  end
end
