# frozen_string_literal: true

class CreateDfcTables < ActiveRecord::Migration[7.0]
  def change
    # Enable UUID support
    enable_extension 'uuid-ossp' unless extension_enabled?('uuid-ossp')
    

    # Table: addresses (Class: Address)
    create_table :addresses, id: :uuid do |t|
      t.timestamps
      t.string :address_of
      t.string :has_country

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: agents (Class: Agent)
    create_table :agents, id: :uuid do |t|
      t.timestamps
      t.string :affiliated_to
      t.string :has_social_media
      t.string :is_member_of
      t.string :orders
      t.string :owns
      t.string :requests
      t.string :sells

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: allergen_characteristics (Class: AllergenCharacteristic)
    create_table :allergen_characteristics, id: :uuid do |t|
      t.timestamps
      t.string :allergen_characteristic_of
      t.string :has_allergen_dimension

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_planned_consumption_flows (Class: AsPlannedConsumptionFlow)
    create_table :as_planned_consumption_flows, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_planned_local_consumption_flows (Class: AsPlannedLocalConsumptionFlow)
    create_table :as_planned_local_consumption_flows, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_planned_local_production_flows (Class: AsPlannedLocalProductionFlow)
    create_table :as_planned_local_production_flows, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_planned_local_transformations (Class: AsPlannedLocalTransformation)
    create_table :as_planned_local_transformations, id: :uuid do |t|
      t.timestamps
      t.string :transformed_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_planned_production_flows (Class: AsPlannedProductionFlow)
    create_table :as_planned_production_flows, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_planned_transformations (Class: AsPlannedTransformation)
    create_table :as_planned_transformations, id: :uuid do |t|
      t.timestamps
      t.string :has_transformation_type

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_realized_consumption_flows (Class: AsRealizedConsumptionFlow)
    create_table :as_realized_consumption_flows, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_realized_production_flows (Class: AsRealizedProductionFlow)
    create_table :as_realized_production_flows, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: as_realized_transformations (Class: AsRealizedTransformation)
    create_table :as_realized_transformations, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: brands (Class: Brand)
    create_table :brands, id: :uuid do |t|
      t.timestamps
      t.string :brand_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: catalogs (Class: Catalog)
    create_table :catalogs, id: :uuid do |t|
      t.timestamps
      t.string :maintained_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: catalog_items (Class: CatalogItem)
    create_table :catalog_items, id: :uuid do |t|
      t.timestamps
      t.string :managed_by
      t.string :offered_through
      t.string :references

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: certfications (Class: Certfication)
    create_table :certfications, id: :uuid do |t|
      t.timestamps
      t.string :certifies

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: consumption_flows (Class: ConsumptionFlow)
    create_table :consumption_flows, id: :uuid do |t|
      t.timestamps
      t.string :consumes
      t.string :input_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: coordinations (Class: Coordination)
    create_table :coordinations, id: :uuid do |t|
      t.timestamps
      t.string :coordinated_by
      t.string :has_object

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: customer_categorys (Class: CustomerCategory)
    create_table :customer_categorys, id: :uuid do |t|
      t.timestamps
      t.string :defined_by
      t.string :has_member
      t.string :has_offer

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: d_f_c__business_ontology__characteristics (Class: DFC_BusinessOntology_Characteristic)
    create_table :d_f_c__business_ontology__characteristics, id: :uuid do |t|
      t.timestamps
      t.string :characteristic_of
      t.string :has_dimension

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: d_f_c__business_ontology__relations (Class: DFC_BusinessOntology_Relation)
    create_table :d_f_c__business_ontology__relations, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: d_f_c__business_ontology__subjects (Class: DFC_BusinessOntology_Subject)
    create_table :d_f_c__business_ontology__subjects, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: defined_products (Class: DefinedProduct)
    create_table :defined_products, id: :uuid do |t|
      t.timestamps
      t.string :composes
      t.string :has_allergen_characteristic
      t.string :has_brand
      t.string :has_certification
      t.string :has_characteristic
      t.string :has_claim
      t.string :has_container_information
      t.string :has_geographical_origin
      t.string :has_ingredient
      t.string :has_labelling_characteristic
      t.string :has_nature_origin
      t.string :has_nutrient_characteristic
      t.string :has_part_origin
      t.string :has_physical_characteristic
      t.string :has_reference_product_option
      t.string :has_type
      t.string :has_variant
      t.string :process_of
      t.string :referenced_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: delivery_options (Class: DeliveryOption)
    create_table :delivery_options, id: :uuid do |t|
      t.timestamps
      t.string :delivered_at
      t.string :refers_to

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: delivery_steps (Class: DeliveryStep)
    create_table :delivery_steps, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: enterprises (Class: Enterprise)
    create_table :enterprises, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: features (Class: Feature)
    create_table :features, id: :uuid do |t|
      t.timestamps
      t.string :geometry
      t.string :properties

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: functional_products (Class: FunctionalProduct)
    create_table :functional_products, id: :uuid do |t|
      t.timestamps
      t.string :requested_by
      t.string :satisfied_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: geometrys (Class: Geometry)
    create_table :geometrys, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: how__subjects (Class: How_Subject)
    create_table :how__subjects, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: individuals (Class: Individual)
    create_table :individuals, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: ingredients (Class: Ingredient)
    create_table :ingredients, id: :uuid do |t|
      t.timestamps
      t.string :composed_of
      t.string :is_ingredient_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: labelling_characteristics (Class: LabellingCharacteristic)
    create_table :labelling_characteristics, id: :uuid do |t|
      t.timestamps
      t.string :has_labelling_dimension
      t.string :labelling_characteristic_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: lengths (Class: Length)
    create_table :lengths, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: localized_products (Class: LocalizedProduct)
    create_table :localized_products, id: :uuid do |t|
      t.timestamps
      t.string :has_reference
      t.string :represented_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: nutrient_characteristics (Class: NutrientCharacteristic)
    create_table :nutrient_characteristics, id: :uuid do |t|
      t.timestamps
      t.string :has_nutrient_dimension
      t.string :nutrient_characteristic_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: offers (Class: Offer)
    create_table :offers, id: :uuid do |t|
      t.timestamps
      t.string :offers
      t.string :offers_to

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: orders (Class: Order)
    create_table :orders, id: :uuid do |t|
      t.timestamps
      t.string :belongs_to
      t.string :has_fulfilment_status
      t.string :has_order_status
      t.string :has_part
      t.string :has_payment_method
      t.string :has_payment_status
      t.string :ordered_by
      t.string :selects
      t.string :sold_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: order_lines (Class: OrderLine)
    create_table :order_lines, id: :uuid do |t|
      t.timestamps
      t.string :is_fulfilled_by
      t.string :part_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: organizations (Class: Organization)
    create_table :organizations, id: :uuid do |t|
      t.timestamps
      t.string :affiliates
      t.string :defines
      t.string :has_template_sale_session
      t.string :is_certified_by
      t.string :maintains
      t.string :manages
      t.string :proposes
      t.string :supplies
      t.string :transforms

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: payment_methods (Class: PaymentMethod)
    create_table :payment_methods, id: :uuid do |t|
      t.timestamps
      t.string :paid_with

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: persons (Class: Person)
    create_table :persons, id: :uuid do |t|
      t.timestamps
      t.string :main_contact_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: phone_numbers (Class: PhoneNumber)
    create_table :phone_numbers, id: :uuid do |t|
      t.timestamps
      t.string :phone_number_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: physical_characteristics (Class: PhysicalCharacteristic)
    create_table :physical_characteristics, id: :uuid do |t|
      t.timestamps
      t.string :has_physical_dimension
      t.string :physical_characteristic_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: physical_places (Class: PhysicalPlace)
    create_table :physical_places, id: :uuid do |t|
      t.timestamps
      t.string :is_open_during
      t.string :localizes
      t.string :stores

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: physical_products (Class: PhysicalProduct)
    create_table :physical_products, id: :uuid do |t|
      t.timestamps
      t.string :fulfills
      t.string :represents
      t.string :traced_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: pick_up_steps (Class: PickUpStep)
    create_table :pick_up_steps, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: pickup_options (Class: PickupOption)
    create_table :pickup_options, id: :uuid do |t|
      t.timestamps
      t.string :picked_up_at

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: places (Class: Place)
    create_table :places, id: :uuid do |t|
      t.timestamps
      t.string :hosts

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: points (Class: Point)
    create_table :points, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: polygons (Class: Polygon)
    create_table :polygons, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: prices (Class: Price)
    create_table :prices, id: :uuid do |t|
      t.timestamps
      t.string :is_price_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: product_batches (Class: ProductBatch)
    create_table :product_batches, id: :uuid do |t|
      t.timestamps
      t.string :identifies
      t.string :traces

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: product_options (Class: ProductOption)
    create_table :product_options, id: :uuid do |t|
      t.timestamps
      t.string :has_reference_product_option_value

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: product_option_values (Class: ProductOptionValue)
    create_table :product_option_values, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: production_flows (Class: ProductionFlow)
    create_table :production_flows, id: :uuid do |t|
      t.timestamps
      t.string :output_of
      t.string :produces

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: propertieses (Class: Properties)
    create_table :propertieses, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: quantitative_values (Class: QuantitativeValue)
    create_table :quantitative_values, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: real_stocks (Class: RealStock)
    create_table :real_stocks, id: :uuid do |t|
      t.timestamps
      t.string :identified_by
      t.string :stored_in

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: represented_things (Class: RepresentedThing)
    create_table :represented_things, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: routes (Class: Route)
    create_table :routes, id: :uuid do |t|
      t.timestamps
      t.string :has_step
      t.string :use_vehicle

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: sale_sessions (Class: SaleSession)
    create_table :sale_sessions, id: :uuid do |t|
      t.timestamps
      t.string :has_option
      t.string :holds
      t.string :object_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: shipments (Class: Shipment)
    create_table :shipments, id: :uuid do |t|
      t.timestamps
      t.string :ends_at
      t.string :is_shipped_in
      t.string :starts_at
      t.string :transports

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: shipping_options (Class: ShippingOption)
    create_table :shipping_options, id: :uuid do |t|
      t.timestamps
      t.string :option_of
      t.string :selected_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: social_medias (Class: SocialMedia)
    create_table :social_medias, id: :uuid do |t|
      t.timestamps
      t.string :social_media_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: steps (Class: Step)
    create_table :steps, id: :uuid do |t|
      t.timestamps
      t.string :delivery
      t.string :is_step_of
      t.string :pick_up

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: stocks (Class: Stock)
    create_table :stocks, id: :uuid do |t|
      t.timestamps
      t.string :transported_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: supplied_products (Class: SuppliedProduct)
    create_table :supplied_products, id: :uuid do |t|
      t.timestamps
      t.string :has_temperature
      t.string :industrializes
      t.string :reference_of
      t.string :supplied_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: technical_products (Class: TechnicalProduct)
    create_table :technical_products, id: :uuid do |t|
      t.timestamps
      t.string :industrialized_by
      t.string :proposed_by
      t.string :satisfies

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: temperatures (Class: Temperature)
    create_table :temperatures, id: :uuid do |t|
      t.timestamps
      t.string :is_temperature_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: template_sale_sessions (Class: TemplateSaleSession)
    create_table :template_sale_sessions, id: :uuid do |t|
      t.timestamps
      t.string :is_template_sale_session_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: theoritical_stocks (Class: TheoriticalStock)
    create_table :theoritical_stocks, id: :uuid do |t|
      t.timestamps
      t.string :localized_by

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: transactions (Class: Transaction)
    create_table :transactions, id: :uuid do |t|
      t.timestamps
      t.string :from
      t.string :to

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: transformations (Class: Transformation)
    create_table :transformations, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: value__r_e_c_u_rs (Class: Value_RECUR)
    create_table :value__r_e_c_u_rs, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: variants (Class: Variant)
    create_table :variants, id: :uuid do |t|
      t.timestamps
      t.string :has_variant_caracteristic
      t.string :is_variant_of

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: variant_caracteristics (Class: VariantCaracteristic)
    create_table :variant_caracteristics, id: :uuid do |t|
      t.timestamps
      t.string :has_product_option
      t.string :has_product_option_value

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: vehicles (Class: Vehicle)
    create_table :vehicles, id: :uuid do |t|
      t.timestamps
      t.string :based_at
      t.string :is_available_during
      t.string :ships
      t.string :used_in_route

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: vevents (Class: Vevent)
    create_table :vevents, id: :uuid do |t|
      t.timestamps
      t.string :rrule

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: virtual_places (Class: VirtualPlace)
    create_table :virtual_places, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: volumes (Class: Volume)
    create_table :volumes, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: weights (Class: Weight)
    create_table :weights, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: what__subjects (Class: What_Subject)
    create_table :what__subjects, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: where__subjects (Class: Where_Subject)
    create_table :where__subjects, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

    # Table: who__subjects (Class: Who_Subject)
    create_table :who__subjects, id: :uuid do |t|
      t.timestamps

      # Indexes for common queries
      t.index :created_at
      t.index :updated_at
    end

  end
end
