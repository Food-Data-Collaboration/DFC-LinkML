# AsPlannedLocalProductionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsPlannedLocalProductionFlow

## Identity

- **JSON-LD type**: `dfc-b:AsPlannedLocalProductionFlow`
- **Hierarchy**: `ProductionFlow` → `AsPlannedLocalProductionFlow`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ProductionFlow`](ProductionFlow.md) |
| [`output_of`](../properties/output_of.md) | `dfc-b:outputOf` | `string` | literal | [`ProductionFlow`](ProductionFlow.md) |
| [`produces`](../properties/produces.md) | `dfc-b:produces` | `string` | literal | [`ProductionFlow`](ProductionFlow.md) |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
