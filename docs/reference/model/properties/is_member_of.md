# is_member_of

[← all properties](index.md)

## Description

Object property from OWL: isMemberOf

## Definition

- **Predicate**: `dfc-b:isMemberOf`
- **Range**: `CustomerCategory` (a DFC class)
- **Target type**: [`CustomerCategory`](../classes/CustomerCategory.md)
- **Inverse**: `has_member`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`Agent`](../classes/Agent.md)

## Available on (3)

[`Agent`](../classes/Agent.md), [`Organization`](../classes/Organization.md), [`Person`](../classes/Person.md)

## Notes

- Declared on 1 class(es) in the ontology, but inherited by 3. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
