# ProductionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #ProductionFlow

## Identity

- **JSON-LD type**: `dfc-b:ProductionFlow`
- **Hierarchy**: `ProductionFlow`

## Subclasses

[`AsPlannedLocalProductionFlow`](../classes/AsPlannedLocalProductionFlow.md), [`AsPlannedProductionFlow`](../classes/AsPlannedProductionFlow.md), [`AsRealizedProductionFlow`](../classes/AsRealizedProductionFlow.md)

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`output_of`](../properties/output_of.md) | `dfc-b:outputOf` | `string` | literal | this class |
| [`produces`](../properties/produces.md) | `dfc-b:produces` | `string` | literal | this class |

## Notes

- **`maximum_cardinality: 1`** on `output_of`, `produces`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
