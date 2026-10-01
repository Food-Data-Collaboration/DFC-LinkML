# Shipment

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Shipment

## Identity

- **JSON-LD type**: `dfc-b:Shipment`
- **Hierarchy**: `Shipment`

## Properties (6)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | this class |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | this class |
| [`ends_at`](../properties/ends_at.md) | `dfc-b:endsAt` | `PhysicalPlace` | object | this class |
| [`is_shipped_in`](../properties/is_shipped_in.md) | `dfc-b:isShippedIn` | `string` | literal | this class |
| [`starts_at`](../properties/starts_at.md) | `dfc-b:startsAt` | `PhysicalPlace` | object | this class |
| [`transports`](../properties/transports.md) | `dfc-b:transports` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
