# Transaction

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Transaction

## Identity

- **JSON-LD type**: `dfc-b:Transaction`
- **Hierarchy**: `How_Subject` → `Transaction`

## Properties (6)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`invoice_number`](../properties/invoice_number.md) | `dfc-b:invoiceNumber` | `string` | literal | this class |
| [`concerns`](../properties/concerns.md) | `dfc-b:concerns` | `string` | literal | this class |
| [`from`](../properties/from.md) | `dfc-b:from` | `Agent` | object | this class |
| [`has_price`](../properties/has_price.md) | `dfc-b:hasPrice` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`to`](../properties/to.md) | `dfc-b:to` | `Agent` | object | this class |

## Notes

- **`maximum_cardinality: 1`** on `from`, `to`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
