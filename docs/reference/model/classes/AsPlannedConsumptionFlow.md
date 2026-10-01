# AsPlannedConsumptionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsPlannedConsumptionFlow

## Identity

- **JSON-LD type**: `dfc-b:AsPlannedConsumptionFlow`
- **Hierarchy**: `ConsumptionFlow` → `AsPlannedConsumptionFlow`

## Properties (4)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`quantity`](../properties/quantity.md) | `dfc-b:quantity` | `float` | literal | [`ConsumptionFlow`](ConsumptionFlow.md) |
| [`consumes`](../properties/consumes.md) | `dfc-b:consumes` | `string` | literal | [`ConsumptionFlow`](ConsumptionFlow.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ConsumptionFlow`](ConsumptionFlow.md) |
| [`input_of`](../properties/input_of.md) | `dfc-b:inputOf` | `string` | literal | [`ConsumptionFlow`](ConsumptionFlow.md) |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
