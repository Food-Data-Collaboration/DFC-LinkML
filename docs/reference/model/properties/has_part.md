# has_part

[← all properties](index.md)

## Description

All OrderLines that make up the Order

## Definition

- **Predicate**: `dfc-b:hasPart`
- **Range**: `OrderLine` (a DFC class)
- **Target type**: [`OrderLine`](../classes/OrderLine.md)
- **Inverse**: `part_of`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`Order`](../classes/Order.md)

## Available on (1)

[`Order`](../classes/Order.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
