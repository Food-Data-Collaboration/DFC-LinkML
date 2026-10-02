# consumed_by

[← all properties](index.md)

## Description

The ConsmuptionFlow by which the Product is transformed into other Products

## Definition

- **Predicate**: `dfc-b:consumedBy`
- **Range**: `string` (literal)
- **Inverse**: `consumes`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`DefinedProduct`](../classes/DefinedProduct.md), [`LocalizedProduct`](../classes/LocalizedProduct.md), [`PhysicalProduct`](../classes/PhysicalProduct.md)

## Available on (7)

[`DefinedProduct`](../classes/DefinedProduct.md), [`FunctionalProduct`](../classes/FunctionalProduct.md), [`LocalizedProduct`](../classes/LocalizedProduct.md), [`PhysicalProduct`](../classes/PhysicalProduct.md), [`SuppliedProduct`](../classes/SuppliedProduct.md), [`TechnicalProduct`](../classes/TechnicalProduct.md), [`Variant`](../classes/Variant.md)

## Notes

- Declared on 3 class(es) in the ontology, but inherited by 7. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
