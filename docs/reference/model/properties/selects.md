# selects

[← all properties](index.md)

## Description

The method of shipping selected for the ORder (e.g. Overnight courier, same-day delivery, economy delivery )

## Definition

- **Predicate**: `dfc-b:selects`
- **Range**: `ShippingOption` (a DFC class)
- **Target type**: [`ShippingOption`](../classes/ShippingOption.md)
- **Inverse**: `selected_by`
- **Cardinality**: **Single-valued on `Order`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`Order`](../classes/Order.md)

## Available on (1)

[`Order`](../classes/Order.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
