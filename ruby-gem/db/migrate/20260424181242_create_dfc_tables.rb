# frozen_string_literal: true

class CreateDfcTables < ActiveRecord::Migration[7.0]
  def change

    create_table :addresses, force: true do |t|
      t.primary_key
      t.string :address_of
      t.string :has_country
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :agents, force: true do |t|
      t.primary_key
      t.string :affiliated_to
      t.string :has_social_media
      t.string :is_member_of
      t.string :orders
      t.string :owns
      t.string :requests
      t.string :sells
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :allergen_characteristics, force: true do |t|
      t.primary_key
      t.string :allergen_characteristic_of
      t.string :has_allergen_dimension
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_planned_consumption_flows, force: true do |t|
      t.primary_key
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_planned_local_consumption_flows, force: true do |t|
      t.primary_key
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_planned_local_production_flows, force: true do |t|
      t.primary_key
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_planned_local_transformations, force: true do |t|
      t.primary_key
      t.string :transformed_by
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_planned_production_flows, force: true do |t|
      t.primary_key
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_planned_transformations, force: true do |t|
      t.primary_key
      t.string :has_transformation_type
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :as_realized_consumption_flows, force: true do |t|
      t.primary_key
      t.datetime :created_at
      t.datetime :updated_at
    end

  end
end
