# offered_through

[← all properties](index.md)

## Description

All Offers that this Catalog Item is offered to categories of customer through

## Definition

- **Predicate**: `dfc-b:offeredThrough`
- **Range**: `Offer` (a DFC class)
- **Target type**: [`Offer`](../classes/Offer.md)
- **Inverse**: `offers`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`CatalogItem`](../classes/CatalogItem.md)

## Available on (1)

[`CatalogItem`](../classes/CatalogItem.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
