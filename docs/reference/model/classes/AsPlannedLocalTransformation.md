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

- **`maximum_cardinality: 1`** on `transformed_by`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
