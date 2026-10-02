# sku

[← all properties](index.md)

## Description

Only a general "SKU" id is proposed for now. Agents using GTIN could use GTIN as SKU but other IDs than GTIN can be used.

## Definition

- **Predicate**: `dfc-b:sku`
- **Range**: `string` (literal)
- **Cardinality**: **Single-valued** — the ontology declares this property `owl:FunctionalProperty`, so it takes at most one value in every class.

## Declared domain

[`CatalogItem`](../classes/CatalogItem.md)

## Available on (1)

[`CatalogItem`](../classes/CatalogItem.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
