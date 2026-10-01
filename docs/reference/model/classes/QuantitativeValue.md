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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
