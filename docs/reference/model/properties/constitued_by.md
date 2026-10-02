# constitued_by

[← all properties](index.md)

## Description

Object property from OWL: constituedBy

## Definition

- **Predicate**: `dfc-b:constituedBy`
- **Range**: `string` (literal)
- **Inverse**: `constitutes`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`LocalizedProduct`](../classes/LocalizedProduct.md), [`PhysicalProduct`](../classes/PhysicalProduct.md)

## Available on (2)

[`LocalizedProduct`](../classes/LocalizedProduct.md), [`PhysicalProduct`](../classes/PhysicalProduct.md)

## Notes

- Declared on 2 class(es) in the ontology, but inherited by 2. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
