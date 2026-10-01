# Vevent

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Vevent

## Identity

- **JSON-LD type**: `dfc-b:Vevent`
- **Hierarchy**: `Vevent`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`dtend`](../properties/dtend.md) | `dfc-b:dtend` | `datetime` | literal | this class |
| [`dtstart`](../properties/dtstart.md) | `dfc-b:dtstart` | `datetime` | literal | this class |
| [`rrule`](../properties/rrule.md) | `dfc-b:rrule` | `Value_RECUR` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
