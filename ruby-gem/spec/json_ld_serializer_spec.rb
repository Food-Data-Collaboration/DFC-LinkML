# frozen_string_literal: true

require_relative "spec_helper"

RSpec.describe DfcLinkmlConnector::Core::JsonLdSerializer do
  let(:context_url) { "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json" }

  let(:context) do
    {
      "@context" => {
        "dfc-b" => "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.owl#",
        "dfc-b:name" => { "@type" => "@id" },
        "dfc-b:VATnumber" => { "@type" => "http://www.w3.org/2001/XMLSchema#string" },
        "dfc-b:isCertifiedBy" => { "@type" => "@id" },
        "name" => "dfc-b:name",
        "VATnumber" => "dfc-b:VATnumber",
        "isCertifiedBy" => { "@id" => "dfc-b:isCertifiedBy", "@type" => "@id" },
      },
    }
  end

  def build_organization
    org = DfcLinkmlConnector::Models::Organization.new("http://example.com/org1")
    org.name = "My Org"
    org.vat_number = "12345"
    org
  end

  describe "#serialize" do
    it "returns a single object without an @graph wrapper" do
      doc = described_class.new(context, context_url).serialize(build_organization)
      expect(doc).to have_key("@id")
      expect(doc).not_to have_key("@graph")
    end

    it "wraps multiple objects in an @graph" do
      doc = described_class.new(context, context_url).serialize(
        build_organization,
        DfcLinkmlConnector::Models::Organization.new("http://example.com/org2")
      )
      expect(doc).to have_key("@graph")
      expect(doc["@graph"].length).to eq(2)
    end

    it "emits official compacted predicates" do
      doc = described_class.new(context, context_url).serialize(build_organization)
      expect(doc).to have_key("dfc-b:name")
      expect(doc).to have_key("dfc-b:VATnumber")
      expect(doc).not_to have_key("dfc-b:Organization:name")
    end
  end

  describe "#to_json" do
    it "returns a JSON string" do
      json = described_class.new(context, context_url).to_json(build_organization)
      expect(json).to be_a(String)
      expect(JSON.parse(json)).to be_a(Hash)
    end

    it "keeps the context as a URL string after compaction" do
      json = described_class.new(context, context_url).to_json(build_organization)
      expect(JSON.parse(json)["@context"]).to eq(context_url)
    end

    it "falls back to plain serialization without a context" do
      json = described_class.new(nil, context_url).to_json(build_organization)
      expect(JSON.parse(json)["@id"]).to eq("http://example.com/org1")
    end
  end
end
