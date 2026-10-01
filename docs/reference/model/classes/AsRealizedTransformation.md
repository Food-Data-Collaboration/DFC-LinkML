# AsRealizedTransformation

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsRealizedTransformation

## Identity

- **JSON-LD type**: `dfc-b:AsRealizedTransformation`
- **Hierarchy**: `How_Subject` → `Transformation` → `AsRealizedTransformation`

## Properties (5)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`cost`](../properties/cost.md) | `dfc-b:cost` | `float` | literal | this class |
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | this class |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | this class |
| [`has_input`](../properties/has_input.md) | `dfc-b:hasInput` | `string` | literal | this class |
| [`has_output`](../properties/has_output.md) | `dfc-b:hasOutput` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
