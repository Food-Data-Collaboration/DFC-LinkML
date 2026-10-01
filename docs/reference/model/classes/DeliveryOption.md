# DeliveryOption

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #DeliveryOption

## Identity

- **JSON-LD type**: `dfc-b:DeliveryOption`
- **Hierarchy**: `How_Subject` → `ShippingOption` → `DeliveryOption`

## Properties (12)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | [`ShippingOption`](ShippingOption.md) |
| [`fee`](../properties/fee.md) | `dfc-b:fee` | `float` | literal | [`ShippingOption`](ShippingOption.md) |
| [`quantity`](../properties/quantity.md) | `dfc-b:quantity` | `float` | literal | [`ShippingOption`](ShippingOption.md) |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | [`ShippingOption`](ShippingOption.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`ShippingOption`](ShippingOption.md) |
| [`option_of`](../properties/option_of.md) | `dfc-b:optionOf` | `SaleSession` | object | [`ShippingOption`](ShippingOption.md) |
| [`selected_by`](../properties/selected_by.md) | `dfc-b:selectedBy` | `string` | literal | [`ShippingOption`](ShippingOption.md) |
| [`accessibility_info`](../properties/accessibility_info.md) | `dfc-b:accessibilityInfo` | `string` | literal | this class |
| [`delivery_constraint`](../properties/delivery_constraint.md) | `dfc-b:deliveryConstraint` | `string` | literal | this class |
| [`delivered_at`](../properties/delivered_at.md) | `dfc-b:deliveredAt` | `string` | literal | this class |
| [`refers_to`](../properties/refers_to.md) | `dfc-b:refersTo` | `Address` | object | this class |
| [`uses`](../properties/uses.md) | `dfc-b:uses` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
