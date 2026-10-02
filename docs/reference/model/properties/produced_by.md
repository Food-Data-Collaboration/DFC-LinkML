# produced_by

[← all properties](index.md)

## Description

Link to another SuppleidProduct that is produced by this Product

## Definition

- **Predicate**: `dfc-b:producedBy`
- **Range**: `string` (literal)
- **Inverse**: `produces`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`LocalizedProduct`](../classes/LocalizedProduct.md), [`PhysicalProduct`](../classes/PhysicalProduct.md), [`SuppliedProduct`](../classes/SuppliedProduct.md)

## Available on (3)

[`LocalizedProduct`](../classes/LocalizedProduct.md), [`PhysicalProduct`](../classes/PhysicalProduct.md), [`SuppliedProduct`](../classes/SuppliedProduct.md)

## Notes

- Declared on 3 class(es) in the ontology, but inherited by 3. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
