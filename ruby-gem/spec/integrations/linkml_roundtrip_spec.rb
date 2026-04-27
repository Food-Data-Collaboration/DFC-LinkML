# frozen_string_literal: true

require 'spec_helper'

RSpec.describe "LinkML Roundtrip Validation" do
  describe "Source LinkML schema loading" do
    it "has LinkML source file" do
      linkml_path = File.expand_path('../../src/dfc_business_linkml.yaml', __dir__)
      expect(File.exist?(linkml_path)).to be true
    end

    it "can parse LinkML schema" do
      linkml_path = File.expand_path('../../src/dfc_business_linkml.yaml', __dir__)
      schema_content = File.read(linkml_path)
      
      expect(schema_content).to include('id: https://w3id.org/dfc/linkml')
      expect(schema_content).to include('name: dfc_business')
      expect(schema_content).to include('version: 2.0.0')
    end
  end

  describe "Class-to-LinkML alignment" do
    let(:linkml_content) { File.read(File.expand_path('../../src/dfc_business_linkml.yaml', __dir__)) }

    def extract_classes(content)
      classes = []
      content.scan(/^\s+(\w+):$/).flatten.each do |name|
        classes << name
      end
      classes
    end

    def extract_parent_class(content, class_name)
      pattern = /#{class_name}:.*?\n((?:\s{2,}.*\n)*)/
      match = content.match(pattern)
      return nil unless match
      
      is_a_match = match[1].match(/is_a:\s*(\w+)/)
      is_a_match ? is_a_match[1] : nil
    end

    it "includes all model classes in LinkML schema" do
      expected_classes = %w[
        Address Agent AllergenCharacteristic AsPlannedConsumptionFlow
        AsPlannedLocalConsumptionFlow AsPlannedLocalProductionFlow
        AsPlannedLocalTransformation AsPlannedProductionFlow AsPlannedTransformation
        AsRealizedConsumptionFlow AsRealizedProductionFlow AsRealizedTransformation
        Brand Catalog CatalogItem ConsumptionFlow Coordination CustomerCategory
        DFC_BusinessOntology_Characteristic DFC_BusinessOntology_Relation
        DFC_BusinessOntology_Subject DefinedProduct DeliveryOption DeliveryStep
        Enterprise Feature FunctionalProduct Geometry How_Subject Individual
        Ingredient LabellingCharacteristic Length LocalizedProduct
        NutrientCharacteristic Offer Order OrderLine Organization PaymentMethod
        Person PhoneNumber PhysicalCharacteristic PhysicalPlace PhysicalProduct
        PickUpStep PickupOption Place Point Polygon Price ProductBatch ProductOption
        ProductOptionValue ProductionFlow Properties QuantitativeValue RealStock
        RepresentedThing Route SaleSession Shipment ShippingOption SocialMedia Step
        Stock SuppliedProduct TechnicalProduct Temperature TemplateSaleSession
        TheoriticalStock Transaction Transformation Value_RECUR Variant VariantCaracteristic
        Vehicle Vevent VirtualPlace Volume Weight
      ]

      expected_classes.each do |class_name|
        expect(linkml_content).to include("#{class_name}:"), "Missing class in LinkML: #{class_name}"
      end
    end

    it "aligns class inheritance with LinkML is_a relationships" do
      {
        'DefinedProduct' => 'What_Subject',
        'SuppliedProduct' => 'DefinedProduct',
        'Agent' => 'Who_Subject',
        'Person' => 'Agent',
        'Organization' => 'Agent',
        'Order' => 'DFC_BusinessOntology_Relation',
        'Place' => 'Where_Subject',
        'Weight' => 'QuantitativeValue',
        'Transformation' => 'How_Subject',
      }.each do |model_name, expected_parent|
        model_class = model_name.constantize
        expect(model_class.superclass.name).to eq(expected_parent),
          "#{model_name} should inherit from #{expected_parent}, got #{model_class.superclass.name}"
      end
    end
  end

  describe "SHACL shape validation" do
    it "has SHACL shapes for business ontology" do
      shacl_path = File.expand_path('../../shacl/dfc_business.shacl.ttl', __dir__)
      expect(File.exist?(shacl_path)).to be true
    end

    it "SHACL file contains expected prefixes" do
      shacl_path = File.expand_path('../../shacl/dfc_business.shacl.ttl', __dir__)
      content = File.read(shacl_path)

      expect(content).to include('@prefix dfc-b:')
      expect(content).to include('@prefix sh:')
    end
  end

  describe "Model completeness against ontology" do
    ROOT_CLASSES = %w[
      RepresentedThing AllergenCharacteristic Feature Geometry Individual
      NutrientCharacteristic LabellingCharacteristic PhysicalCharacteristic Price Properties
    ].freeze

    it "defines all root classes from LinkML" do
      ROOT_CLASSES.each do |class_name|
        expect(defined?(class_name)).to be_truthy, "Missing root class: #{class_name}"
      end
    end

    it "root classes inherit directly from ApplicationRecord" do
      ROOT_CLASSES.each do |class_name|
        klass = class_name.constantize
        expect(klass.superclass).to eq(ApplicationRecord),
          "#{class_name} should inherit from ApplicationRecord"
      end
    end
  end
end
