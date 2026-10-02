# hosted_at

[← all properties](index.md)

## Description

The location the session is hosted at. This could be a physical (e.g. a shop or market) or virtual place (e.g. online store).

## Definition

- **Predicate**: `dfc-b:hostedAt`
- **Range**: `Place` (a DFC class)
- **Target type**: [`Place`](../classes/Place.md)
- **Inverse**: `hosts`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`SaleSession`](../classes/SaleSession.md), [`TemplateSaleSession`](../classes/TemplateSaleSession.md)

## Available on (2)

[`SaleSession`](../classes/SaleSession.md), [`TemplateSaleSession`](../classes/TemplateSaleSession.md)

## Notes

- Declared on 2 class(es) in the ontology, but inherited by 2. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
