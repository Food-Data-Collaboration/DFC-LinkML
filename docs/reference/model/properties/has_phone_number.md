# has_phone_number

[← all properties](index.md)

## Description

Phone Number relating to the Agent

## Definition

- **Predicate**: `dfc-b:hasPhoneNumber`
- **Range**: `string` (literal)
- **Inverse**: `phone_number_of`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`Agent`](../classes/Agent.md), [`PhysicalPlace`](../classes/PhysicalPlace.md)

## Available on (4)

[`Agent`](../classes/Agent.md), [`Organization`](../classes/Organization.md), [`Person`](../classes/Person.md), [`PhysicalPlace`](../classes/PhysicalPlace.md)

## Notes

- Declared on 2 class(es) in the ontology, but inherited by 4. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
