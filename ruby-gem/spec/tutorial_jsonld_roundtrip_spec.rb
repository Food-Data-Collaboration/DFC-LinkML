# frozen_string_literal: true

require_relative "spec_helper"

# Executed version of docs/getting-started/jsonld-roundtrip.md (Ruby).
RSpec.describe "Tutorial: JSON-LD round trip (Ruby)" do
  it "exported documents re-import with all properties intact" do
    connector = DfcLinkmlConnector::Core::Connector.new
    org = DfcLinkmlConnector::Models::Organization.new(
      "https://example.org/organization/farm-1",
      name: "Example Farm", vatNumber: "FR12345678901", description: "A test farm"
    )
    carrots = DfcLinkmlConnector::Models::SuppliedProduct.new(
      "https://example.org/product/carrots-1",
      name: "Organic carrots", description: "Fresh carrots"
    )
    org.supplies = [carrots]

    exported = JSON.parse(connector.export(org, carrots))
    imported = connector.import(exported)
    expect(imported.length).to eq(2)
    back_org = imported.find { |o| o.semanticId == "https://example.org/organization/farm-1" }
    back_carrots = imported.find { |o| o.semanticId == "https://example.org/product/carrots-1" }
    expect(back_org).to be_a(DfcLinkmlConnector::Models::Organization)
    expect(back_org.vat_number).to eq("FR12345678901")
    expect(back_carrots.name).to eq("Organic carrots")

    # A single-object export is a bare object, still an array on import.
    single = JSON.parse(connector.export(org))
    expect(single).not_to be_a(Array)
    back_single = connector.import(single)
    expect(back_single.length).to eq(1)
    expect(back_single.first.semanticType).to eq("dfc-b:Organization")
  end
end
