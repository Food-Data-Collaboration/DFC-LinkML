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

- **`maximum_cardinality: 1`** on `maintained_by`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
