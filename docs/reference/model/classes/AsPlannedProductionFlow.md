# AsPlannedProductionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsPlannedProductionFlow

## Identity

- **JSON-LD type**: `dfc-b:AsPlannedProductionFlow`
- **Hierarchy**: `ProductionFlow` → `AsPlannedProductionFlow`

## Properties (4)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`quantity`](../properties/quantity.md) | `dfc-b:quantity` | `float` | literal | [`ProductionFlow`](ProductionFlow.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ProductionFlow`](ProductionFlow.md) |
| [`output_of`](../properties/output_of.md) | `dfc-b:outputOf` | `string` | literal | [`ProductionFlow`](ProductionFlow.md) |
| [`produces`](../properties/produces.md) | `dfc-b:produces` | `string` | literal | [`ProductionFlow`](ProductionFlow.md) |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
