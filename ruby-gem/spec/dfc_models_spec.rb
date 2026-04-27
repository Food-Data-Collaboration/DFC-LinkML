# frozen_string_literal: true

require 'spec_helper'

RSpec.describe DfcModels do
  describe ".root" do
    it "returns the gem root path" do
      expect(DfcModels.root).to be_a(String)
      expect(DfcModels.root).to include('dfc-models')
    end
  end

  describe "module structure" do
    it "loads Associations module" do
      expect(DfcModels::Associations).to be_a(Module)
    end

    it "defines product_associations method" do
      expect(DfcModels::Associations).to respond_to(:product_associations)
    end

    it "defines order_associations method" do
      expect(DfcModels::Associations).to respond_to(:order_associations)
    end

    it "defines agent_associations method" do
      expect(DfcModels::Associations).to respond_to(:agent_associations)
    end
  end
end
