# ConsumptionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #ConsumptionFlow

## Identity

- **JSON-LD type**: `dfc-b:ConsumptionFlow`
- **Hierarchy**: `ConsumptionFlow`

## Subclasses

[`AsPlannedConsumptionFlow`](../classes/AsPlannedConsumptionFlow.md), [`AsPlannedLocalConsumptionFlow`](../classes/AsPlannedLocalConsumptionFlow.md), [`AsRealizedConsumptionFlow`](../classes/AsRealizedConsumptionFlow.md)

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`consumes`](../properties/consumes.md) | `dfc-b:consumes` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`input_of`](../properties/input_of.md) | `dfc-b:inputOf` | `string` | literal | this class |

## Notes

- **`maximum_cardinality: 1`** on `consumes`, `input_of`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
