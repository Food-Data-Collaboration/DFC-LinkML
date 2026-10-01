# Transaction

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Transaction

## Identity

- **JSON-LD type**: `dfc-b:Transaction`
- **Hierarchy**: `How_Subject` → `Transaction`

## Properties (7)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`invoice_number`](../properties/invoice_number.md) | `dfc-b:invoiceNumber` | `string` | literal | this class |
| [`quantity`](../properties/quantity.md) | `dfc-b:quantity` | `float` | literal | this class |
| [`concerns`](../properties/concerns.md) | `dfc-b:concerns` | `string` | literal | this class |
| [`from`](../properties/from.md) | `dfc-b:from` | `Agent` | object | this class |
| [`has_price`](../properties/has_price.md) | `dfc-b:hasPrice` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`to`](../properties/to.md) | `dfc-b:to` | `Agent` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
