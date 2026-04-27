# frozen_string_literal: true

require "spec_helper"

RSpec.describe DFCLinkMLConnector::Connector::Connector do
  describe "singleton API" do
    it "provides instance singleton" do
      connector = described_class.instance
      expect(connector).to be_a(described_class)
    end

    it "has default context" do
      expect(described_class.instance.context).to eq("http://static.datafoodconsortium.org/ontologies/context.json")
    end
  end

  describe "#export" do
    it "exports single object to JSON-LD" do
      connector = described_class.instance
      product = DFCLinkMLConnector::Connector::SuppliedProduct.new(
        "https://myplatform.com/tomato",
        name: "Tomato",
        description: "Awesome tomato"
      )

      result = connector.export(product)

      expect(result["@context"]).to eq("http://static.datafoodconsortium.org/ontologies/context.json")
      expect(result["@id"]).to eq("https://myplatform.com/tomato")
      expect(result["@type"]).to eq("dfc-b:SuppliedProduct")
      expect(result["dfc-b:name"]).to eq("Tomato")
      expect(result["dfc-b:description"]).to eq("Awesome tomato")
    end

    it "exports multiple objects in graph" do
      connector = described_class.instance
      product = DFCLinkMLConnector::Connector::SuppliedProduct.new(
        "https://myplatform.com/tomato",
        name: "Tomato"
      )
      offer = DFCLinkMLConnector::Connector::Offer.new(
        "https://myplatform.com/offer",
        price: DFCLinkMLConnector::Connector::Price.new(value: 12.78, vat_rate: 5.22, unit: "EUR")
      )

      result = connector.export(product, offer)

      expect(result["@context"]).to eq("http://static.datafoodconsortium.org/ontologies/context.json")
      expect(result["@graph"]).to be_an(Array)
      expect(result["@graph"].length).to eq(2)
    end
  end

  describe "#loadFacets" do
    it "loads facets from JSON" do
      connector = described_class.instance
      json = {
        "@context" => "http://www.w3.org/2004/02/skos/core#",
        "@graph" => [
          { "@id" => "dfc-f:Demeter", "@type" => "skos:Concept", "skos:prefLabel" => "Demeter" }
        ]
      }

      result = connector.loadFacets(json)
      expect(connector.FACETS).to be_a(OpenStruct)
    end
  end
end

RSpec.describe DFCLinkMLConnector::Connector::SuppliedProduct do
  describe "#initialize" do
    it "creates product with semantic ID" do
      product = described_class.new("https://myplatform.com/tomato", name: "Tomato")
      expect(product.semantic_id).to eq("https://myplatform.com/tomato")
    end

    it "generates UUID ID when not provided" do
      product = described_class.new(name: "Tomato")
      expect(product.semantic_id).to match(/^urn:uuid:/)
    end
  end

  describe "#to_semantic" do
    it "converts to JSON-LD" do
      product = described_class.new(
        "https://myplatform.com/tomato",
        name: "Tomato",
        description: "Awesome tomato",
        total_theoretical_stock: 100
      )

      result = product.to_semantic

      expect(result["@id"]).to eq("https://myplatform.com/tomato")
      expect(result["@type"]).to eq("dfc-b:SuppliedProduct")
      expect(result["dfc-b:name"]).to eq("Tomato")
      expect(result["dfc-b:description"]).to eq("Awesome tomato")
      expect(result["dfc-b:totalTheoreticalStock"]).to eq(100)
    end
  end
end

RSpec.describe DFCLinkMLConnector::Connector::Offer do
  describe "#to_semantic" do
    it "exports offer with price" do
      price = DFCLinkMLConnector::Connector::Price.new(value: 12.78, vat_rate: 5.22, unit: "EUR")
      offer = described_class.new("https://myplatform.com/offer", price: price)

      result = offer.to_semantic

      expect(result["@id"]).to eq("https://myplatform.com/offer")
      expect(result["dfc-b:hasPrice"]["dfc-b:value"]).to eq(12.78)
      expect(result["dfc-b:hasPrice"]["dfc-b:vatRate"]).to eq(5.22)
    end
  end
end

RSpec.describe DFCLinkMLConnector::Connector::Enterprise do
  describe "#to_semantic" do
    it "exports enterprise with relationships" do
      cc = DFCLinkMLConnector::Connector::CustomerCategory.new(
        "https://myplatform.com/cc",
        description: "Wholesale buyers"
      )
      enterprise = described_class.new(
        "https://myplatform.com/enterprise",
        name: "Farm Co",
        vat_number: "FR12345678901",
        customer_categories: [cc]
      )

      result = enterprise.to_semantic

      expect(result["dfc-b:name"]).to eq("Farm Co")
      expect(result["dfc-b:VATnumber"]).to eq("FR12345678901")
      expect(result["dfc-b:hasCustomerCategory"]).to include("https://myplatform.com/cc")
    end
  end
end