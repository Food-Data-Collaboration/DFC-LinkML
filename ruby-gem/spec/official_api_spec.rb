# frozen_string_literal: true

require_relative "spec_helper"

# Official DFC v2 API aliases (migration aid).
# Mirrors config/dfc-official-api.yaml: official reader/writer names delegate
# to ours accessors. If an entry here fails, either the generator stopped
# emitting it or upstream renamed something — check the yaml + inventory docs.
RSpec.describe "Official API aliases" do
  let(:connector) { DfcLinkmlConnector::Core::Connector.new }

  # official reader/writer => ours accessor, per model
  ALIASES = {
    DfcLinkmlConnector::Models::Order => {
      number: :order_number, :number= => :order_number=,
      lines: :part, :lines= => :part=,
      client: :ordered_by, :client= => :ordered_by=,
    },
    DfcLinkmlConnector::Models::OrderLine => {
      offer: :concerns, :offer= => :concerns=,
    },
    DfcLinkmlConnector::Models::CatalogItem => {
      product: :references, :product= => :references=,
      offers: :offered_through, :offers= => :offered_through=,
    },
    DfcLinkmlConnector::Models::Organization => {
      vatNumber: :vat_number, :vatNumber= => :vat_number=,
    },
    DfcLinkmlConnector::Models::Enterprise => {
      vatNumber: :vat_number, :vatNumber= => :vat_number=,
    },
  }.freeze

  it "exposes every official alias" do
    ALIASES.each do |klass, pairs|
      obj = klass.new("http://example.com/probe")
      pairs.each_key do |official|
        expect(obj).to respond_to(official), "#{klass}##{official}"
      end
    end
  end

  it "reads and writes through the alias" do
    order = DfcLinkmlConnector::Models::Order.new("http://example.com/order1")
    order.number = "ORD-1"
    expect(order.order_number).to eq("ORD-1")
    expect(order.number).to eq("ORD-1")

    org = DfcLinkmlConnector::Models::Organization.new("http://example.com/org1")
    org.vatNumber = "FR1"
    expect(org.vat_number).to eq("FR1")
  end

  it "round-trips official-style access through export" do
    order = DfcLinkmlConnector::Models::Order.new("http://example.com/order1")
    order.number = "ORD-1"
    doc = JSON.parse(connector.export(order))
    expect(doc["dfc-b:orderNumber"]).to eq("ORD-1")
  end

  it "provides the official-style singleton" do
    a = DfcLinkmlConnector::Core::Connector.instance
    b = DfcLinkmlConnector::Core::Connector.instance
    expect(a).to be(b)
    expect(a).to be_a(DfcLinkmlConnector::Core::Connector)
  end
end
