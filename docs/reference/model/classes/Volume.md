# Volume

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Volume

## Identity

- **JSON-LD type**: `dfc-b:Volume`
- **Hierarchy**: `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Volume`

## Properties (2)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`value`](../properties/value.md) | `dfc-b:value` | `float` | literal | [`QuantitativeValue`](QuantitativeValue.md) |
| [`has_unit`](../properties/has_unit.md) | `dfc-b:hasUnit` | `string` | literal | [`QuantitativeValue`](QuantitativeValue.md) |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
