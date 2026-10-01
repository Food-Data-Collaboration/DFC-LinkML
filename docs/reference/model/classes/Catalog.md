# Catalog

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Catalog

## Identity

- **JSON-LD type**: `dfc-b:Catalog`
- **Hierarchy**: `Where_Subject` → `Catalog`

## Properties (4)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | this class |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | this class |
| [`lists`](../properties/lists.md) | `dfc-b:lists` | `string` | literal | this class |
| [`maintained_by`](../properties/maintained_by.md) | `dfc-b:maintainedBy` | `Organization` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
