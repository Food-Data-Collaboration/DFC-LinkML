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

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
