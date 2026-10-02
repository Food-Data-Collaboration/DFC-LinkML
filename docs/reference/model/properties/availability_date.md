# availability_date

[← all properties](index.md)

## Description

"The date from which the product is available from the information provider, including seasonal or temporary product and services." (source : GS1 model)

## Definition

- **Predicate**: `dfc-b:availabilityDate`
- **Range**: `date` (literal)
- **Cardinality**: **Single-valued on `Stock`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`Stock`](../classes/Stock.md)

## Available on (3)

[`RealStock`](../classes/RealStock.md), [`Stock`](../classes/Stock.md), [`TheoriticalStock`](../classes/TheoriticalStock.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 3. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
