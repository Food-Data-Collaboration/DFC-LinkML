# frozen_string_literal: true

require 'spec_helper'

RSpec.describe "LinkML Serialization" do
  describe "#to_linkml" do
    it "converts defined product to LinkML hash" do
      product = DefinedProduct.create!(
        facet: :france,
        product_type: :apple
      )
      linkml = product.to_linkml

      expect(linkml).to be_a(Hash)
      expect(linkml[:facet]).to eq('france')
      expect(linkml[:product_type]).to eq('apple')
    end

    it "includes all model attributes" do
      product = DefinedProduct.create!(facet: :france, product_type: :apple)
      linkml = product.to_linkml

      DefinedProduct.column_names.each do |col|
        expect(linkml).to have_key(col.to_sym)
      end
    end

    it "includes timestamp fields" do
      product = DefinedProduct.create!
      linkml = product.to_linkml

      expect(linkml).to have_key(:created_at)
      expect(linkml).to have_key(:updated_at)
    end

    it "returns only model-specific attributes (not methods)" do
      product = DefinedProduct.create!(facet: :france, product_type: :apple)
      linkml = product.to_linkml

      expect(linkml).not_to have_key(:id)
      expect(linkml).not_to have_key(:persisted?)
    end
  end

  describe "Order serialization" do
    it "serializes order with enums" do
      order = Order.create!(
        facet: :france,
        has_order_status: :draft
      )
      linkml = order.to_linkml

      expect(linkml[:facet]).to eq('france')
      expect(linkml[:has_order_status]).to eq('draft')
    end
  end

  describe "Agent serialization" do
    it "serializes organization" do
      org = Organization.create!
      linkml = org.to_linkml

      expect(linkml).to be_a(Hash)
      expect(linkml).to have_key(:created_at)
    end
  end

  describe "Quantitative value serialization" do
    it "serializes weight" do
      weight = Weight.create!
      linkml = weight.to_linkml

      expect(linkml).to be_a(Hash)
      expect(linkml).to have_key(:created_at)
    end

    it "serializes volume" do
      volume = Volume.create!
      linkml = volume.to_linkml

      expect(linkml).to be_a(Hash)
    end

    it "serializes temperature" do
      temp = Temperature.create!
      linkml = temp.to_linkml

      expect(linkml).to be_a(Hash)
    end
  end

  describe "DFC ID lookup" do
    it "responds to find_or_create_by_dfc_id via uri" do
      expect(DefinedProduct).to respond_to(:find_or_create_by_dfc_id)
    end

    it "finds existing record by uri" do
      product = DefinedProduct.create!(facet: :france, product_type: :apple)
      found = DefinedProduct.find_or_create_by_dfc_id(product.id)

      expect(found.id).to eq(product.id)
    end

    it "creates new record if not found" do
      new_id = SecureRandom.uuid
      product = DefinedProduct.find_or_create_by_dfc_id(new_id)

      expect(product.id).to eq(new_id)
      expect(product).to be_persisted
    end
  end
end
