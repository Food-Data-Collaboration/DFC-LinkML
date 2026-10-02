# Order

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Order

## Identity

- **JSON-LD type**: `dfc-b:Order`
- **Hierarchy**: `Order`

## Properties (11)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`discount`](../properties/discount.md) | `dfc-b:discount` | `float` | literal | this class |
| [`order_number`](../properties/order_number.md) | `dfc-b:orderNumber` | `string` | literal | this class |
| [`belongs_to`](../properties/belongs_to.md) | `dfc-b:belongsTo` | `SaleSession` | object | this class |
| [`has_fulfilment_status`](../properties/has_fulfilment_status.md) | `dfc-b:hasFulfilmentStatus` | `string` | literal | this class |
| [`has_order_status`](../properties/has_order_status.md) | `dfc-b:hasOrderStatus` | `string` | literal | this class |
| [`has_part`](../properties/has_part.md) | `dfc-b:hasPart` | `OrderLine` | object | this class |
| [`has_payment_method`](../properties/has_payment_method.md) | `dfc-b:hasPaymentMethod` | `string` | literal | this class |
| [`has_payment_status`](../properties/has_payment_status.md) | `dfc-b:hasPaymentStatus` | `string` | literal | this class |
| [`ordered_by`](../properties/ordered_by.md) | `dfc-b:orderedBy` | `Agent` | object | this class |
| [`selects`](../properties/selects.md) | `dfc-b:selects` | `ShippingOption` | object | this class |
| [`sold_by`](../properties/sold_by.md) | `dfc-b:soldBy` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
