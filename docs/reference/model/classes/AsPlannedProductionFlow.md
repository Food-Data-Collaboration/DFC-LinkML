# AsPlannedProductionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsPlannedProductionFlow

## Identity

- **JSON-LD type**: `dfc-b:AsPlannedProductionFlow`
- **Hierarchy**: `ProductionFlow` → `AsPlannedProductionFlow`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ProductionFlow`](ProductionFlow.md) |
| [`output_of`](../properties/output_of.md) | `dfc-b:outputOf` | `string` | literal | [`ProductionFlow`](ProductionFlow.md) |
| [`produces`](../properties/produces.md) | `dfc-b:produces` | `string` | literal | [`ProductionFlow`](ProductionFlow.md) |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
