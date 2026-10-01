# OpeningHoursSpecification

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #OpeningHoursSpecification

## Identity

- **JSON-LD type**: `dfc-b:OpeningHoursSpecification`
- **Hierarchy**: `OpeningHoursSpecification`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`day_of_week`](../properties/day_of_week.md) | `dfc-b:dayOfWeek` | `string` | literal | this class |
| [`opens`](../properties/opens.md) | `dfc-b:opens` | `string` | literal | this class |
| [`closes`](../properties/closes.md) | `dfc-b:closes` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
