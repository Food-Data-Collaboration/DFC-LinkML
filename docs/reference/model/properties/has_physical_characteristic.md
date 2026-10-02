# has_physical_characteristic

[← all properties](index.md)

## Description

Physical information about the product (from dfc-m:PhysicalDimension)

## Definition

- **Predicate**: `dfc-b:hasPhysicalCharacteristic`
- **Range**: `string` (literal)
- **Inverse**: `physical_characteristic_of`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`DefinedProduct`](../classes/DefinedProduct.md)

## Available on (5)

[`DefinedProduct`](../classes/DefinedProduct.md), [`FunctionalProduct`](../classes/FunctionalProduct.md), [`SuppliedProduct`](../classes/SuppliedProduct.md), [`TechnicalProduct`](../classes/TechnicalProduct.md), [`Variant`](../classes/Variant.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 5. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
