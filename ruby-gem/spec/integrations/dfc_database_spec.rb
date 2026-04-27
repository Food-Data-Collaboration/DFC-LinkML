# frozen_string_literal: true

require 'spec_helper'

RSpec.describe "DFC Database Schema" do
  EXPECTED_TABLES = %w[
    addresses agents allergen_characteristics as_planned_consumption_flows
    as_planned_local_consumption_flows as_planned_local_production_flows
    as_planned_local_transformations as_planned_production_flows as_planned_transformations
    as_realized_consumption_flows as_realized_production_flows as_realized_transformations
    brands catalogs catalog_items certfications consumption_flows coordinations
    customer_categorys d_f_c__business_ontology__characteristics
    d_f_c__business_ontology__relations d_f_c__business_ontology__subjects
    defined_products delivery_options delivery_steps enterprises features
    functional_products geometrys how__subjects individuals ingredients
    labelling_characteristics lengths localized_products nutrient_characteristics
    offers orders order_lines organizations payment_methods persons phone_numbers
    physical_characteristics physical_places physical_products pick_up_steps
    pickup_options places points polygons prices product_batches product_options
    product_option_values production_flows propertieses quantitative_values
    real_stocks represented_things routes sale_sessions shipments shipping_options
    social_medias steps stocks supplied_products technical_products temperatures
    template_sale_sessions theoritical_stocks transactions transformations
    value__r_e_c_u_rs variants variant_caracteristics vehicles vevents
    virtual_places volumes weights what__subjects where__subjects who__subjects
  ].freeze

  describe "table existence" do
    EXPECTED_TABLES.each do |table|
      it "creates table: #{table}" do
        expect(ActiveRecord::Base.connection.table_exists?(table)).to be true
      end
    end
  end

  describe "UUID primary keys" do
    EXPECTED_TABLES.each do |table|
      it "#{table} has UUID primary key" do
        columns = ActiveRecord::Base.connection.columns(table)
        id_column = columns.find { |c| c.name == 'id' }
        expect(id_column).not_to be_nil
        expect(id_column.sql_type).to match(/uuid/)
      end
    end
  end

  describe "timestamp columns" do
    EXPECTED_TABLES.each do |table|
      it "#{table} has created_at and updated_at" do
        columns = ActiveRecord::Base.connection.columns(table).map(&:name)
        expect(columns).to include('created_at', 'updated_at')
      end
    end
  end

  describe "defined_products table columns" do
    let(:columns) { DefinedProduct.column_names }

    it "has all required DFC properties" do
      expected_columns = %w[composes has_allergen_characteristic has_brand has_certification
        has_characteristic has_ingredient has_labelling_characteristic
        has_nutrient_characteristic has_physical_characteristic has_variant]
      
      expected_columns.each do |col|
        expect(columns).to include(col), "Missing column: #{col}"
      end
    end
  end

  describe "orders table columns" do
    let(:columns) { Order.column_names }

    it "has all required DFC order properties" do
      expected_columns = %w[belongs_to has_fulfilment_status has_order_status
        has_payment_method has_payment_status ordered_by sells selects]
      
      expected_columns.each do |col|
        expect(columns).to include(col), "Missing column: #{col}"
      end
    end
  end

  describe "CRUD operations" do
    it "creates a defined product" do
      product = DefinedProduct.create!(
        facet: :france,
        product_type: :apple
      )
      expect(product.id).to be_present
      expect(product.facet).to eq('france')
      expect(product.product_type).to eq('apple')
    end

    it "updates a product" do
      product = DefinedProduct.create!(facet: :france, product_type: :apple)
      product.update!(facet: :germany)
      product.reload
      expect(product.facet).to eq('germany')
    end

    it "destroys a product" do
      product = DefinedProduct.create!(facet: :france, product_type: :apple)
      id = product.id
      product.destroy!
      expect(DefinedProduct.find_by(id: id)).to be_nil
    end
  end
end
