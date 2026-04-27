# frozen_string_literal: true

require_relative "../lib/dfc_linkml_connector"

RSpec.describe DFCLinkMLConnector do
  describe "VERSION" do
    it "matches expected version" do
      expect(DFCLinkMLConnector::VERSION).to eq("2.0.0")
    end
  end
end