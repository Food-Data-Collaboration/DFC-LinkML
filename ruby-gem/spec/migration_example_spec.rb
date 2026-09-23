# frozen_string_literal: true

require_relative "spec_helper"

# Worked example from docs/migration-guide.md ("Ruby after").
# Keep in sync with the guide: this is the executed version of it.
RSpec.describe "Migration example" do
  it "builds an order graph with original-style access" do
    connector = DfcLinkmlConnector::Core::Connector.new
    org = DfcLinkmlConnector::Models::Organization.new(
      "http://example.com/org1", name: "Farm Org", vatNumber: "FR12345678901"
    )
    # Original-v2 setter names work through aliases.
    org.vatNumber = "FR12345678901"
    tomato = DfcLinkmlConnector::Models::SuppliedProduct.new(
      "http://example.com/tomato", name: "Tomato", description: "Fresh tomato"
    )
    line = DfcLinkmlConnector::Models::OrderLine.new(
      "http://example.com/line1", name: "Line 1", quantity: 5,
      concerns: tomato.semanticId
    )
    order = DfcLinkmlConnector::Models::Order.new(
      "http://example.com/order1", orderNumber: "ORD-001"
    )
    # Original-v2 writer names, also aliased.
    order.number = "ORD-001"
    order.client = org
    order.lines = line

    doc = JSON.parse(connector.export(org, tomato, line, order))
    by_id = doc["@graph"].to_h { |e| [e["@id"], e] }
    expect(by_id["http://example.com/org1"]["dfc-b:VATnumber"]).to eq(
      "FR12345678901"
    )
    expect(by_id["http://example.com/order1"]["dfc-b:orderNumber"]).to eq(
      "ORD-001"
    )
    expect(by_id["http://example.com/order1"]["dfc-b:orderedBy"]).to eq(
      "http://example.com/org1"
    )

    # Import always returns an array.
    back = connector.import(doc)
    expect(back.length).to eq(4)
  end
end
