# frozen_string_literal: true

# This migration documents the enum values available in the schema.
# In PostgreSQL, we use string columns with check constraints.
# Example usage: validate_inclusion_of :facet, in: Facet.values

class CreateDfcEnums < ActiveRecord::Migration[7.0]
  def change

    # Enum: Facet (351 values)
    # Example: validate_inclusion_of :facet, in: Facet.values

    # Enum: ProductType (490 values)
    # Example: validate_inclusion_of :product_type, in: Producttype.values

    # Enum: Measure (224 values)
    # Example: validate_inclusion_of :measure, in: Measure.values

    # Enum: Scope (14 values)
    # Example: validate_inclusion_of :scope, in: Scope.values

    # Enum: VocabularyTerm (31 values)
    # Example: validate_inclusion_of :vocabulary_term, in: Vocabularyterm.values

  end
end
