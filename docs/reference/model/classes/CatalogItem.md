# CatalogItem

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #CatalogItem

## Identity

- **JSON-LD type**: `dfc-b:CatalogItem`
- **Hierarchy**: `CatalogItem`

## Properties (8)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`extra_availability_time`](../properties/extra_availability_time.md) | `dfc-b:extraAvailabilityTime` | `string` | literal | this class |
| [`extra_delivery_condition`](../properties/extra_delivery_condition.md) | `dfc-b:extraDeliveryCondition` | `string` | literal | this class |
| [`sku`](../properties/sku.md) | `dfc-b:sku` | `string` | literal | this class |
| [`stock_limitation`](../properties/stock_limitation.md) | `dfc-b:stockLimitation` | `float` | literal | this class |
| [`listed_in`](../properties/listed_in.md) | `dfc-b:listedIn` | `string` | literal | this class |
| [`managed_by`](../properties/managed_by.md) | `dfc-b:managedBy` | `Organization` | object | this class |
| [`offered_through`](../properties/offered_through.md) | `dfc-b:offeredThrough` | `Offer` | object | this class |
| [`references`](../properties/references.md) | `dfc-b:references` | `DefinedProduct` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
