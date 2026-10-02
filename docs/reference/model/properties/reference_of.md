# reference_of

[← all properties](index.md)

## Description

The Localized Product that is created in reference to this Supplied Product

## Definition

- **Predicate**: `dfc-b:referenceOf`
- **Range**: `LocalizedProduct` (a DFC class)
- **Target type**: [`LocalizedProduct`](../classes/LocalizedProduct.md)
- **Inverse**: `has_reference`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`SuppliedProduct`](../classes/SuppliedProduct.md)

## Available on (1)

[`SuppliedProduct`](../classes/SuppliedProduct.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
