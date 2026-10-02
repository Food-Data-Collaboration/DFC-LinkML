# consumes

[← all properties](index.md)

## Description

The product consumed by the Transformation

## Definition

- **Predicate**: `dfc-b:consumes`
- **Range**: `string` (literal)
- **Inverse**: `consumed_by`
- **Cardinality**: **Single-valued on `ConsumptionFlow`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`ConsumptionFlow`](../classes/ConsumptionFlow.md)

## Available on (4)

[`AsPlannedConsumptionFlow`](../classes/AsPlannedConsumptionFlow.md), [`AsPlannedLocalConsumptionFlow`](../classes/AsPlannedLocalConsumptionFlow.md), [`AsRealizedConsumptionFlow`](../classes/AsRealizedConsumptionFlow.md), [`ConsumptionFlow`](../classes/ConsumptionFlow.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 4. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
