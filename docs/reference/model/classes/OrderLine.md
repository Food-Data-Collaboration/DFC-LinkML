# OrderLine

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #OrderLine

## Identity

- **JSON-LD type**: `dfc-b:OrderLine`
- **Hierarchy**: `OrderLine`

## Properties (7)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`discount`](../properties/discount.md) | `dfc-b:discount` | `float` | literal | this class |
| [`quantity`](../properties/quantity.md) | `dfc-b:quantity` | `float` | literal | this class |
| [`concerns`](../properties/concerns.md) | `dfc-b:concerns` | `string` | literal | this class |
| [`has_price`](../properties/has_price.md) | `dfc-b:hasPrice` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`is_fulfilled_by`](../properties/is_fulfilled_by.md) | `dfc-b:isFulfilledBy` | `string` | literal | this class |
| [`part_of`](../properties/part_of.md) | `dfc-b:partOf` | `Order` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
