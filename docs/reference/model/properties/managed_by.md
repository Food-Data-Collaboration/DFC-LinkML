# managed_by

[← all properties](index.md)

## Description

The Enterprise that manages the CatalogItem (may differ from the owner of the Product)

## Definition

- **Predicate**: `dfc-b:managedBy`
- **Range**: `Organization` (a DFC class)
- **Target type**: [`Organization`](../classes/Organization.md)
- **Inverse**: `manages`
- **Cardinality**: **Single-valued on `CatalogItem`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`CatalogItem`](../classes/CatalogItem.md)

## Available on (1)

[`CatalogItem`](../classes/CatalogItem.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
