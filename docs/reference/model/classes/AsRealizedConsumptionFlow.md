# AsRealizedConsumptionFlow

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #AsRealizedConsumptionFlow

## Identity

- **JSON-LD type**: `dfc-b:AsRealizedConsumptionFlow`
- **Hierarchy**: `ConsumptionFlow` → `AsRealizedConsumptionFlow`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`consumes`](../properties/consumes.md) | `dfc-b:consumes` | `string` | literal | [`ConsumptionFlow`](ConsumptionFlow.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ConsumptionFlow`](ConsumptionFlow.md) |
| [`input_of`](../properties/input_of.md) | `dfc-b:inputOf` | `string` | literal | [`ConsumptionFlow`](ConsumptionFlow.md) |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
