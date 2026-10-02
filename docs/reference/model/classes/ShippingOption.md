# ShippingOption

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #ShippingOption

## Identity

- **JSON-LD type**: `dfc-b:ShippingOption`
- **Hierarchy**: `How_Subject` → `ShippingOption`

## Subclasses

[`DeliveryOption`](../classes/DeliveryOption.md), [`PickupOption`](../classes/PickupOption.md)

## Properties (6)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | this class |
| [`fee`](../properties/fee.md) | `dfc-b:fee` | `float` | literal | this class |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`option_of`](../properties/option_of.md) | `dfc-b:optionOf` | `SaleSession` | object | this class |
| [`selected_by`](../properties/selected_by.md) | `dfc-b:selectedBy` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
