# frozen_string_literal: true

require_relative "spec_helper"

RSpec.describe DfcLinkmlConnector::Core::Connector do
  let(:connector) { described_class.new }

  let(:context_url) { "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json" }

  before do
    allow(connector).to receive(:context).and_return(
      {
        "@context" => {
          "dfc-b" => "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.owl#",
          "dfc-b:name" => { "@type" => "@id" },
          "dfc-b:VATnumber" => { "@type" => "http://www.w3.org/2001/XMLSchema#string" },
          "dfc-b:isCertifiedBy" => { "@type" => "@id" },
        },
      }
    )
  end

  def build_organization
    org = DfcLinkmlConnector::Models::Organization.new("http://example.com/org1")
    org.name = "My Org"
    org.vat_number = "12345"
    org
  end

  describe "#export" do
    it "returns a JSON string" do
      expect(connector.export(build_organization)).to be_a(String)
    end

    it "emits compacted official predicates" do
      json = connector.export(build_organization)
      parsed = JSON.parse(json)
      expect(parsed).to have_key("dfc-b:name")
      expect(parsed).to have_key("dfc-b:VATnumber")
      expect(parsed["@context"]).to eq(context_url)
    end

    it "does not wrap a single object in @graph" do
      parsed = JSON.parse(connector.export(build_organization))
      expect(parsed).not_to have_key("@graph")
    end

    it "wraps multiple objects in @graph" do
      json = connector.export(build_organization, DfcLinkmlConnector::Models::Organization.new("http://example.com/org2"))
      parsed = JSON.parse(json)
      expect(parsed["@graph"].length).to eq(2)
    end
  end

  describe "#import" do
    it "returns a single object when the graph has one entry" do
      data = connector.export(build_organization)
      result = connector.import(data)
      expect(result).to be_a(DfcLinkmlConnector::Models::Organization)
      expect(result.name).to eq("My Org")
    end

    it "resolves object references within the same document" do
      org = build_organization
      cert = DfcLinkmlConnector::Models::Certfication.new("http://example.com/cert1")
      cert.name = "Organic"
      org.is_certified_by = cert

      json = connector.export(org, cert)
      result = connector.import(json)
      org_obj = result.find { |o| o.semanticId == "http://example.com/org1" }
      expect(org_obj.is_certified_by).to be_a(DfcLinkmlConnector::Models::Certfication)
      expect(org_obj.is_certified_by.name).to eq("Organic")
    end

    it "round-trips a single object with compacted predicates" do
      imported = connector.import(connector.export(build_organization))
      expect(imported.name).to eq("My Org")
      expect(imported.vat_number).to eq("12345")
    end

    it "accepts legacy dfc-b:Class:snake_case predicate keys" do
      legacy = {
        "@context" => context_url,
        "@id" => "http://example.com/org1",
        "@type" => "dfc-b:Organization",
        "dfc-b:Organization:name" => "Legacy Org",
        "dfc-b:Organization:vat_number" => "999",
      }
      result = connector.import(JSON.generate(legacy))
      expect(result.name).to eq("Legacy Org")
      expect(result.vat_number).to eq("999")
    end

    it "imports JSON-LD with @type as an array" do
      data = {
        "@graph" => [
          {
            "@id" => "_:price1",
            "@type" => ["dfc-b:Price", "dfc-b:Price"],
            "dfc-b:VATrate" => ["5.5", "5.5"],
          },
        ],
      }
      result = connector.import(JSON.generate(data))
      expect(result).to be_a(DfcLinkmlConnector::Models::Price)
      expect(result.semanticId).to eq("_:price1")
      expect(result.vat_rate).to eq(["5.5", "5.5"])
    end

    it "imports legacy dfc-b:Enterprise as dfc-b:Organization" do
      data = {
        "@graph" => [
          {
            "@id" => "http://example.com/legacy-org",
            "@type" => "dfc-b:Enterprise",
            "dfc-b:VATnumber" => "FR12345678901",
            "dfc-b:name" => "Legacy Org",
          },
        ],
      }
      result = connector.import(JSON.generate(data))
      expect(result).to be_a(DfcLinkmlConnector::Models::Organization)
      expect(result.vat_number).to eq("FR12345678901")
      expect(result.name).to eq("Legacy Org")
    end

    it "accepts a Hash input as well as a JSON string" do
      data = JSON.parse(connector.export(build_organization))
      result = connector.import(data)
      expect(result.name).to eq("My Org")
    end
  end
end
