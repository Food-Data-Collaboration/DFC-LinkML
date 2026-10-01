# Price

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Price

## Identity

- **JSON-LD type**: `dfc-b:Price`
- **Hierarchy**: `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Price`

## Properties (4)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`value`](../properties/value.md) | `dfc-b:value` | `float` | literal | [`QuantitativeValue`](QuantitativeValue.md) |
| [`has_unit`](../properties/has_unit.md) | `dfc-b:hasUnit` | `string` | literal | [`QuantitativeValue`](QuantitativeValue.md) |
| [`vat_rate`](../properties/vat_rate.md) | `dfc-b:VATrate` | `float` | literal | this class |
| [`is_price_of`](../properties/is_price_of.md) | `dfc-b:isPriceOf` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
