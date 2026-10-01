# has_ingredient

[← all properties](index.md)

## Description

Links DefinedProducts (via composes relationship) to allow recipe construction 

N.B. This is similar (simplified) functionality to the AsPlannedTransformation loop. These two options are not compatible.

## Definition

- **Predicate**: `dfc-b:hasIngredient`
- **Range**: `string` (literal)
- **Inverse**: `is_ingredient_of`

## Declared domain

[`DefinedProduct`](../classes/DefinedProduct.md)

## Available on (5)

[`DefinedProduct`](../classes/DefinedProduct.md), [`FunctionalProduct`](../classes/FunctionalProduct.md), [`SuppliedProduct`](../classes/SuppliedProduct.md), [`TechnicalProduct`](../classes/TechnicalProduct.md), [`Variant`](../classes/Variant.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 5. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
