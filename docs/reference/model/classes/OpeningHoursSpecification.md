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

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
