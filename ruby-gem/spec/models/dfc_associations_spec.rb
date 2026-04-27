# frozen_string_literal: true

require 'spec_helper'

RSpec.describe "DFC Model Associations" do
  describe "Product associations (via Associations module)" do
    it "defines product_associations helper" do
      expect(DfcModels::Associations.product_associations).to be_a(Hash)
    end

    it "includes ingredients association" do
      associations = DfcModels::Associations.product_associations
      expect(associations[:ingredients]).to be_a(Proc)
    end

    it "includes allergens association" do
      associations = DfcModels::Associations.product_associations
      expect(associations[:allergens]).to be_a(Proc)
    end

    it "includes nutrients association" do
      associations = DfcModels::Associations.product_associations
      expect(associations[:nutrients]).to be_a(Proc)
    end

    it "includes labels association" do
      associations = DfcModels::Associations.product_associations
      expect(associations[:labels]).to be_a(Proc)
    end

    it "includes physical_properties association" do
      associations = DfcModels::Associations.product_associations
      expect(associations[:physical_properties]).to be_a(Proc)
    end
  end

  describe "Order associations" do
    it "defines order_associations helper" do
      expect(DfcModels::Associations.order_associations).to be_a(Hash)
    end

    it "includes lines association" do
      associations = DfcModels::Associations.order_associations
      expect(associations[:lines]).to be_a(Proc)
    end

    it "includes offers association" do
      associations = DfcModels::Associations.order_associations
      expect(associations[:offers]).to be_a(Proc)
    end

    it "includes payments association" do
      associations = DfcModels::Associations.order_associations
      expect(associations[:payments]).to be_a(Proc)
    end
  end

  describe "Agent associations" do
    it "defines agent_associations helper" do
      expect(DfcModels::Associations.agent_associations).to be_a(Hash)
    end

    it "includes catalogs association" do
      associations = DfcModels::Associations.agent_associations
      expect(associations[:catalogs]).to be_a(Proc)
    end

    it "includes orders association" do
      associations = DfcModels::Associations.agent_associations
      expect(associations[:orders]).to be_a(Proc)
    end

    it "includes products association" do
      associations = DfcModels::Associations.agent_associations
      expect(associations[:products]).to be_a(Proc)
    end
  end

  describe "Class hierarchy validation" do
    it "Product hierarchy: DefinedProduct < What_Subject" do
      expect(DefinedProduct.superclass).to eq(What_Subject)
    end

    it "Product hierarchy: SuppliedProduct < DefinedProduct" do
      expect(SuppliedProduct.superclass).to eq(DefinedProduct)
    end

    it "Product hierarchy: FunctionalProduct < DefinedProduct" do
      expect(FunctionalProduct.superclass).to eq(DefinedProduct)
    end

    it "Agent hierarchy: Agent < Who_Subject" do
      expect(Agent.superclass).to eq(Who_Subject)
    end

    it "Agent hierarchy: Person < Agent" do
      expect(Person.superclass).to eq(Agent)
    end

    it "Agent hierarchy: Organization < Agent" do
      expect(Organization.superclass).to eq(Agent)
    end

    it "Agent hierarchy: Enterprise < Agent" do
      expect(Enterprise.superclass).to eq(Agent)
    end

    it "Place hierarchy: Place < Where_Subject" do
      expect(Place.superclass).to eq(Where_Subject)
    end

    it "Place hierarchy: PhysicalPlace < Place" do
      expect(PhysicalPlace.superclass).to eq(Place)
    end

    it "Order hierarchy: Order < DFC_BusinessOntology_Relation" do
      expect(Order.superclass).to eq(DFC_BusinessOntology_Relation)
    end

    it "Transformation hierarchy: AsPlannedTransformation < Transformation" do
      expect(AsPlannedTransformation.superclass).to eq(Transformation)
    end

    it "Transformation hierarchy: AsRealizedTransformation < Transformation" do
      expect(AsRealizedTransformation.superclass).to eq(Transformation)
    end

    it "Flow hierarchy: ConsumptionFlow < DFC_BusinessOntology_Relation" do
      expect(ConsumptionFlow.superclass).to eq(DFC_BusinessOntology_Relation)
    end

    it "Flow hierarchy: ProductionFlow < DFC_BusinessOntology_Relation" do
      expect(ProductionFlow.superclass).to eq(DFC_BusinessOntology_Relation)
    end

    it "QuantitativeValue hierarchy: Weight < QuantitativeValue" do
      expect(Weight.superclass).to eq(QuantitativeValue)
    end

    it "QuantitativeValue hierarchy: Volume < QuantitativeValue" do
      expect(Volume.superclass).to eq(QuantitativeValue)
    end

    it "QuantitativeValue hierarchy: Length < QuantitativeValue" do
      expect(Length.superclass).to eq(QuantitativeValue)
    end

    it "QuantitativeValue hierarchy: Temperature < QuantitativeValue" do
      expect(Temperature.superclass).to eq(QuantitativeValue)
    end
  end
end
