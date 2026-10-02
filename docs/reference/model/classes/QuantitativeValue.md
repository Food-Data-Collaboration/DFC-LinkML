# QuantitativeValue

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #QuantitativeValue

## Identity

- **JSON-LD type**: `dfc-b:QuantitativeValue`
- **Hierarchy**: `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue`

## Subclasses

[`Length`](../classes/Length.md), [`Price`](../classes/Price.md), [`Temperature`](../classes/Temperature.md), [`Volume`](../classes/Volume.md), [`Weight`](../classes/Weight.md)

## Properties (2)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`value`](../properties/value.md) | `dfc-b:value` | `float` | literal | this class |
| [`has_unit`](../properties/has_unit.md) | `dfc-b:hasUnit` | `string` | literal | this class |

## Notes

- **`maximum_cardinality: 1`** on `value`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
