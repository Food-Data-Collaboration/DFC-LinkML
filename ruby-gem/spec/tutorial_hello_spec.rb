# frozen_string_literal: true

require_relative "spec_helper"

# Executed version of docs/getting-started/hello-dfc.md (Ruby).
RSpec.describe "Tutorial: hello-dfc (Ruby)" do
  it "installs, creates an organization, and exports JSON-LD" do
    connector = DfcLinkmlConnector::Core::Connector.new
    org = DfcLinkmlConnector::Models::Organization.new(
      "https://example.org/organization/farm-1", name: "Example Farm"
    )
    doc = JSON.parse(connector.export(org))
    expect(doc["@type"]).to eq("dfc-b:Organization")
    expect(doc["dfc-b:name"]).to eq("Example Farm")
    expect(doc["@context"]).to eq(connector.context_url)
  end

  it "creates a product and links it to the organization" do
    connector = DfcLinkmlConnector::Core::Connector.new
    org = DfcLinkmlConnector::Models::Organization.new(
      "https://example.org/organization/farm-1", name: "Example Farm"
    )
    carrots = DfcLinkmlConnector::Models::SuppliedProduct.new(
      "https://example.org/product/carrots-1", name: "Organic carrots"
    )
    org.supplies = [carrots]
    doc = JSON.parse(connector.export(org, carrots))
    by_id = doc["@graph"].to_h { |e| [e["@id"], e] }
    expect(by_id["https://example.org/organization/farm-1"]["dfc-b:supplies"]).to eq(
      "https://example.org/product/carrots-1"
    )
  end
end
