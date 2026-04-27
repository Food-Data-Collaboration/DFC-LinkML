# frozen_string_literal: true

require 'spec_helper'

RSpec.describe "DFC Model Structure" do
  EXPECTED_CLASSES = {
    'RepresentedThing' => { table: 'represented_things', parent: 'ApplicationRecord' },
    'DFC_BusinessOntology_Subject' => { table: 'd_f_c__business_ontology__subjects', parent: 'RepresentedThing' },
    'DFC_BusinessOntology_Relation' => { table: 'd_f_c__business_ontology__relations', parent: 'RepresentedThing' },
    'DFC_BusinessOntology_Characteristic' => { table: 'd_f_c__business_ontology__characteristics', parent: 'RepresentedThing' },
    'Who_Subject' => { table: 'who__subjects', parent: 'DFC_BusinessOntology_Subject' },
    'Where_Subject' => { table: 'where__subjects', parent: 'DFC_BusinessOntology_Subject' },
    'What_Subject' => { table: 'what__subjects', parent: 'DFC_BusinessOntology_Subject' },
    'How_Subject' => { table: 'how__subjects', parent: 'DFC_BusinessOntology_Subject' },
    'Agent' => { table: 'agents', parent: 'Who_Subject' },
    'Person' => { table: 'persons', parent: 'Agent' },
    'Organization' => { table: 'organizations', parent: 'Agent' },
    'Enterprise' => { table: 'enterprises', parent: 'Agent' },
    'CustomerCategory' => { table: 'customer_categorys', parent: 'Who_Subject' },
    'Place' => { table: 'places', parent: 'Where_Subject' },
    'PhysicalPlace' => { table: 'physical_places', parent: 'Place' },
    'VirtualPlace' => { table: 'virtual_places', parent: 'Place' },
    'Address' => { table: 'addresses', parent: 'Where_Subject' },
    'Catalog' => { table: 'catalogs', parent: 'Where_Subject' },
    'CatalogItem' => { table: 'catalog_items', parent: 'DFC_BusinessOntology_Relation' },
    'Route' => { table: 'routes', parent: 'Where_Subject' },
    'Step' => { table: 'steps', parent: 'Where_Subject' },
    'DeliveryStep' => { table: 'delivery_steps', parent: 'Step' },
    'PickUpStep' => { table: 'pick_up_steps', parent: 'Step' },
    'DefinedProduct' => { table: 'defined_products', parent: 'What_Subject' },
    'SuppliedProduct' => { table: 'supplied_products', parent: 'DefinedProduct' },
    'FunctionalProduct' => { table: 'functional_products', parent: 'DefinedProduct' },
    'TechnicalProduct' => { table: 'technical_products', parent: 'DefinedProduct' },
    'PhysicalProduct' => { table: 'physical_products', parent: 'What_Subject' },
    'LocalizedProduct' => { table: 'localized_products', parent: 'What_Subject' },
    'ProductBatch' => { table: 'product_batches', parent: 'What_Subject' },
    'Brand' => { table: 'brands', parent: 'What_Subject' },
    'Ingredient' => { table: 'ingredients', parent: 'What_Subject' },
    'Variant' => { table: 'variants', parent: 'DefinedProduct' },
    'VariantCaracteristic' => { table: 'variant_caracteristics', parent: 'What_Subject' },
    'ProductOption' => { table: 'product_options', parent: 'What_Subject' },
    'ProductOptionValue' => { table: 'product_option_values', parent: 'What_Subject' },
    'Certfication' => { table: 'certfications', parent: 'What_Subject' },
    'PhoneNumber' => { table: 'phone_numbers', parent: 'What_Subject' },
    'SocialMedia' => { table: 'social_medias', parent: 'What_Subject' },
    'Vehicle' => { table: 'vehicles', parent: 'What_Subject' },
    'Order' => { table: 'orders', parent: 'DFC_BusinessOntology_Relation' },
    'OrderLine' => { table: 'order_lines', parent: 'DFC_BusinessOntology_Relation' },
    'Offer' => { table: 'offers', parent: 'DFC_BusinessOntology_Relation' },
    'Shipment' => { table: 'shipments', parent: 'DFC_BusinessOntology_Relation' },
    'Price' => { table: 'prices', parent: 'ApplicationRecord' },
    'PaymentMethod' => { table: 'payment_methods', parent: 'How_Subject' },
    'ShippingOption' => { table: 'shipping_options', parent: 'How_Subject' },
    'DeliveryOption' => { table: 'delivery_options', parent: 'ShippingOption' },
    'PickupOption' => { table: 'pickup_options', parent: 'ShippingOption' },
    'Transaction' => { table: 'transactions', parent: 'How_Subject' },
    'Transformation' => { table: 'transformations', parent: 'How_Subject' },
    'AsPlannedTransformation' => { table: 'as_planned_transformations', parent: 'Transformation' },
    'AsPlannedLocalTransformation' => { table: 'as_planned_local_transformations', parent: 'Transformation' },
    'AsRealizedTransformation' => { table: 'as_realized_transformations', parent: 'Transformation' },
    'SaleSession' => { table: 'sale_sessions', parent: 'DFC_BusinessOntology_Relation' },
    'TemplateSaleSession' => { table: 'template_sale_sessions', parent: 'DFC_BusinessOntology_Relation' },
    'Stock' => { table: 'stocks', parent: 'DFC_BusinessOntology_Relation' },
    'RealStock' => { table: 'real_stocks', parent: 'Stock' },
    'TheoriticalStock' => { table: 'theoritical_stocks', parent: 'Stock' },
    'ConsumptionFlow' => { table: 'consumption_flows', parent: 'DFC_BusinessOntology_Relation' },
    'AsPlannedConsumptionFlow' => { table: 'as_planned_consumption_flows', parent: 'ConsumptionFlow' },
    'AsPlannedLocalConsumptionFlow' => { table: 'as_planned_local_consumption_flows', parent: 'ConsumptionFlow' },
    'AsRealizedConsumptionFlow' => { table: 'as_realized_consumption_flows', parent: 'ConsumptionFlow' },
    'ProductionFlow' => { table: 'production_flows', parent: 'DFC_BusinessOntology_Relation' },
    'AsPlannedProductionFlow' => { table: 'as_planned_production_flows', parent: 'ProductionFlow' },
    'AsPlannedLocalProductionFlow' => { table: 'as_planned_local_production_flows', parent: 'ProductionFlow' },
    'AsRealizedProductionFlow' => { table: 'as_realized_production_flows', parent: 'ProductionFlow' },
    'Coordination' => { table: 'coordinations', parent: 'DFC_BusinessOntology_Relation' },
    'QuantitativeValue' => { table: 'quantitative_values', parent: 'RepresentedThing' },
    'Weight' => { table: 'weights', parent: 'QuantitativeValue' },
    'Volume' => { table: 'volumes', parent: 'QuantitativeValue' },
    'Length' => { table: 'lengths', parent: 'QuantitativeValue' },
    'Temperature' => { table: 'temperatures', parent: 'QuantitativeValue' },
    'AllergenCharacteristic' => { table: 'allergen_characteristics', parent: 'ApplicationRecord' },
    'NutrientCharacteristic' => { table: 'nutrient_characteristics', parent: 'ApplicationRecord' },
    'LabellingCharacteristic' => { table: 'labelling_characteristics', parent: 'ApplicationRecord' },
    'PhysicalCharacteristic' => { table: 'physical_characteristics', parent: 'ApplicationRecord' },
    'Geometry' => { table: 'geometrys', parent: 'ApplicationRecord' },
    'Point' => { table: 'points', parent: 'Geometry' },
    'Polygon' => { table: 'polygons', parent: 'Geometry' },
    'Feature' => { table: 'features', parent: 'ApplicationRecord' },
    'Properties' => { table: 'propertieses', parent: 'ApplicationRecord' },
    'Individual' => { table: 'individuals', parent: 'ApplicationRecord' },
    'Vevent' => { table: 'vevents', parent: 'ApplicationRecord' },
    'Value_RECUR' => { table: 'value__r_e_c_u_rs', parent: 'ApplicationRecord' },
  }.freeze

  describe "class existence" do
    EXPECTED_CLASSES.keys.each do |class_name|
      it "defines #{class_name}" do
        expect(defined?(class_name)).to be_truthy
      end
    end
  end

  describe "table name mapping" do
    EXPECTED_CLASSES.each do |class_name, config|
      context class_name do
        let(:klass) { class_name.constantize }

        it "has correct table_name" do
          expect(klass.table_name).to eq(config[:table])
        end
      end
    end
  end

  describe "inheritance hierarchy" do
    EXPECTED_CLASSES.each do |class_name, config|
      context class_name do
        let(:klass) { class_name.constantize }

        it "inherits from #{config[:parent]}" do
          expect(klass.superclass.name).to eq(config[:parent])
        end
      end
    end
  end

  describe "common attributes" do
    it "all models respond to to_linkml" do
      EXPECTED_CLASSES.keys.each do |class_name|
        klass = class_name.constantize
        expect(klass.new).to respond_to(:to_linkml), "#{class_name} should respond to to_linkml"
      end
    end

    it "all models have created_at and updated_at columns" do
      EXPECTED_CLASSES.keys.each do |class_name|
        klass = class_name.constantize
        columns = klass.column_names
        expect(columns).to include('created_at', 'updated_at'), "#{class_name} should have timestamps"
      end
    end
  end
end
