# SaleSession

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #SaleSession

## Identity

- **JSON-LD type**: `dfc-b:SaleSession`
- **Hierarchy**: `SaleSession`

## Properties (8)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`end_date`](../properties/end_date.md) | `dfc-b:endDate` | `datetime` | literal | this class |
| [`start_date`](../properties/start_date.md) | `dfc-b:startDate` | `datetime` | literal | this class |
| [`has_option`](../properties/has_option.md) | `dfc-b:hasOption` | `ShippingOption` | object | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`holds`](../properties/holds.md) | `dfc-b:holds` | `string` | literal | this class |
| [`hosted_at`](../properties/hosted_at.md) | `dfc-b:hostedAt` | `Place` | object | this class |
| [`lists`](../properties/lists.md) | `dfc-b:lists` | `string` | literal | this class |
| [`object_of`](../properties/object_of.md) | `dfc-b:objectOf` | `Coordination` | object | this class |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
