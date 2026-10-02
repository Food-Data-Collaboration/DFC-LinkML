# has_address

[← all properties](index.md)

## Description

Address of Agent

## Definition

- **Predicate**: `dfc-b:hasAddress`
- **Range**: `Address` (a DFC class)
- **Target type**: [`Address`](../classes/Address.md)
- **Inverse**: `address_of`
- **Cardinality**: **Single-valued on `PhysicalPlace`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`Agent`](../classes/Agent.md), [`PhysicalPlace`](../classes/PhysicalPlace.md)

## Available on (4)

[`Agent`](../classes/Agent.md), [`Organization`](../classes/Organization.md), [`Person`](../classes/Person.md), [`PhysicalPlace`](../classes/PhysicalPlace.md)

## Notes

- Declared on 2 class(es) in the ontology, but inherited by 4. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
