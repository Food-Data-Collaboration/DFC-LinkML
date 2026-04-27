# frozen_string_literal: true

require 'spec_helper'

RSpec.describe "DFC Enumerations" do
  FACET_COUNT = 351
  PRODUCT_TYPE_COUNT = 490
  MEASURE_COUNT = 224
  SCOPE_COUNT = 14
  VOCABULARY_TERM_COUNT = 31

  CRITICAL_FACETS = %i[
    france germany spain italy united_kingdom belgium
    organic_label biodynamic_label label_rouge fairtrade_max_haavelar
    gluten_free vegan vegetarian
    agriculture_biologique agriculture_biologique_eu
    label_biologique label_local label_thique
    demeter nature_et_progrs paysannes_de_nature
    protected_geographical_status appellation_dorigine_protge
  ].freeze

  CRITICAL_PRODUCT_TYPES = %i[
    apple tomato milk cheese yogurt butter
    beef pork lamb chicken fish
    bread wine beer
    vegetable fruit egg
  ].freeze

  describe "Facet enumeration" do
    subject { DefinedProduct.facets }

    it "has expected facet count (#{FACET_COUNT})" do
      expect(subject.values.count).to eq(FACET_COUNT)
    end

    it "contains critical facets" do
      CRITICAL_FACETS.each do |facet|
        expect(subject).to include(facet), "Missing facet: #{facet}"
      end
    end

    it "validates facet values from LinkML facet taxonomy" do
      CRITICAL_FACETS.each do |facet|
        model = DefinedProduct.new(facet: facet)
        expect(model.valid?).to be true, "#{model.errors.full_messages}"
      end
    end
  end

  describe "ProductType enumeration" do
    subject { DefinedProduct.product_types }

    it "has expected product_type count (#{PRODUCT_TYPE_COUNT})" do
      expect(subject.values.count).to eq(PRODUCT_TYPE_COUNT)
    end

    it "contains critical product types" do
      CRITICAL_PRODUCT_TYPES.each do |type|
        expect(subject).to include(type), "Missing product type: #{type}"
      end
    end

    it "validates product_type values from LinkML product types taxonomy" do
      CRITICAL_PRODUCT_TYPES.each do |type|
        model = DefinedProduct.new(product_type: type)
        expect(model.valid?).to be true, "#{model.errors.full_messages}"
      end
    end
  end

  describe "Models with facet enum" do
    [DefinedProduct, SuppliedProduct].each do |model_class|
      context model_class do
        it "has facet enum defined" do
          expect(model_class.facets).to be_a(Hash)
          expect(model_class.facets.keys.count).to eq(FACET_COUNT)
        end
      end
    end
  end

  describe "Models with product_type enum" do
    [DefinedProduct, SuppliedProduct].each do |model_class|
      context model_class do
        it "has product_type enum defined" do
          expect(model_class.product_types).to be_a(Hash)
          expect(model_class.product_types.keys.count).to eq(PRODUCT_TYPE_COUNT)
        end
      end
    end
  end

  describe "Order enums" do
    subject { Order.scopes }

    it "has scope enum with expected count (#{SCOPE_COUNT})" do
      expect(subject.values.count).to eq(SCOPE_COUNT)
    end

    it "includes critical scope values" do
      expect(subject).to include(:read_enterprise_products)
      expect(subject).to include(:write_enterprise_orders)
    end
  end

  describe "Order vocabulary_term enum" do
    subject { Order.vocabulary_terms }

    it "has vocabulary_term enum with expected count (#{VOCABULARY_TERM_COUNT})" do
      expect(subject.values.count).to eq(VOCABULARY_TERM_COUNT)
    end

    it "includes critical vocabulary terms" do
      expect(subject).to include(:draft, :complete, :cancelled)
      expect(subject).to include(:paid, :unpaid, :fulfilled, :unfulfilled)
    end
  end
end
