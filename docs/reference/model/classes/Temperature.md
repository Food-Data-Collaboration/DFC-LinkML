# Temperature

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Temperature

## Identity

- **JSON-LD type**: `dfc-b:Temperature`
- **Hierarchy**: `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Temperature`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`value`](../properties/value.md) | `dfc-b:value` | `float` | literal | [`QuantitativeValue`](QuantitativeValue.md) |
| [`has_unit`](../properties/has_unit.md) | `dfc-b:hasUnit` | `string` | literal | [`QuantitativeValue`](QuantitativeValue.md) |
| [`is_temperature_of`](../properties/is_temperature_of.md) | `dfc-b:isTemperatureOf` | `string` | literal | this class |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
