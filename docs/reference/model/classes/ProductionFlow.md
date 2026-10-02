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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
