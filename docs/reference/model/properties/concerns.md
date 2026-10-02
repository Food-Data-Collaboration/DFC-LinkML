# concerns

[← all properties](index.md)

## Description

The Product that has been ordered (1 and only 1)

## Definition

- **Predicate**: `dfc-b:concerns`
- **Range**: `string` (literal)
- **Inverse**: `concerned_by`
- **Cardinality**: **Single-valued on `OrderLine`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`OrderLine`](../classes/OrderLine.md), [`Transaction`](../classes/Transaction.md)

## Available on (2)

[`OrderLine`](../classes/OrderLine.md), [`Transaction`](../classes/Transaction.md)

## Notes

- Declared on 2 class(es) in the ontology, but inherited by 2. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
