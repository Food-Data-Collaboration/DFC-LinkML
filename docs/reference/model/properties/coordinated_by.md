# coordinated_by

[← all properties](index.md)

## Description

Confirms the Enterprise Coordinates certain SaleSessions, and defines margin %age that the Enterprise takes for managing the SaleSession

## Definition

- **Predicate**: `dfc-b:coordinatedBy`
- **Range**: `Organization` (a DFC class)
- **Target type**: [`Organization`](../classes/Organization.md)
- **Inverse**: `coordinates`
- **Cardinality**: **Single-valued on `Coordination`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`Coordination`](../classes/Coordination.md)

## Available on (1)

[`Coordination`](../classes/Coordination.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 1. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
