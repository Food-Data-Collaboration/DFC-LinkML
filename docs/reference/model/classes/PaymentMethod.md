# PaymentMethod

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #PaymentMethod

## Identity

- **JSON-LD type**: `dfc-b:PaymentMethod`
- **Hierarchy**: `How_Subject` → `PaymentMethod`

## Properties (4)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`payment_method_provider`](../properties/payment_method_provider.md) | `dfc-b:paymentMethodProvider` | `string` | literal | this class |
| [`payment_method_type`](../properties/payment_method_type.md) | `dfc-b:paymentMethodType` | `string` | literal | this class |
| [`has_price`](../properties/has_price.md) | `dfc-b:hasPrice` | `string` | literal | this class |
| [`paid_with`](../properties/paid_with.md) | `dfc-b:paidWith` | `string` | literal | this class |

## Notes

- **`maximum_cardinality: 1`** on `payment_method_provider`, `payment_method_type`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
