# AsPlannedLocalTransformation

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsPlannedLocalTransformation

## Identity

- **JSON-LD type**: `dfc-b:AsPlannedLocalTransformation`
- **Hierarchy**: `How_Subject` → `Transformation` → `AsPlannedLocalTransformation`

## Properties (6)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`cost`](../properties/cost.md) | `dfc-b:cost` | `float` | literal | this class |
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | this class |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | this class |
| [`has_input`](../properties/has_input.md) | `dfc-b:hasInput` | `string` | literal | this class |
| [`has_output`](../properties/has_output.md) | `dfc-b:hasOutput` | `string` | literal | this class |
| [`transformed_by`](../properties/transformed_by.md) | `dfc-b:transformedBy` | `Organization` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
