# PickupOption

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #PickupOption

## Identity

- **JSON-LD type**: `dfc-b:PickupOption`
- **Hierarchy**: `How_Subject` → `ShippingOption` → `PickupOption`

## Properties (7)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | [`ShippingOption`](ShippingOption.md) |
| [`fee`](../properties/fee.md) | `dfc-b:fee` | `float` | literal | [`ShippingOption`](ShippingOption.md) |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | [`ShippingOption`](ShippingOption.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ShippingOption`](ShippingOption.md) |
| [`option_of`](../properties/option_of.md) | `dfc-b:optionOf` | `SaleSession` | object | [`ShippingOption`](ShippingOption.md) |
| [`selected_by`](../properties/selected_by.md) | `dfc-b:selectedBy` | `string` | literal | [`ShippingOption`](ShippingOption.md) |
| [`picked_up_at`](../properties/picked_up_at.md) | `dfc-b:pickedUpAt` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
