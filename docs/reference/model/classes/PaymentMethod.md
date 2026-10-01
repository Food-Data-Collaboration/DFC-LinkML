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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
