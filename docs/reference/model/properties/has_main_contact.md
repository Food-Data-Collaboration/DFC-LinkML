# has_main_contact

[← all properties](index.md)

## Description

The Person, if any, who is a principal contact for this physical location

## Definition

- **Predicate**: `dfc-b:hasMainContact`
- **Range**: `Person` (a DFC class)
- **Target type**: [`Person`](../classes/Person.md)
- **Inverse**: `main_contact_of`
- **Cardinality**: **Single-valued on `Organization`** — the ontology restricts those classes to exactly one value. On that class the property is a scalar; elsewhere it may be a collection, because the ontology is silent.

## Declared domain

[`Organization`](../classes/Organization.md), [`PhysicalPlace`](../classes/PhysicalPlace.md)

## Available on (2)

[`Organization`](../classes/Organization.md), [`PhysicalPlace`](../classes/PhysicalPlace.md)

## Notes

- Declared on 2 class(es) in the ontology, but inherited by 2. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
