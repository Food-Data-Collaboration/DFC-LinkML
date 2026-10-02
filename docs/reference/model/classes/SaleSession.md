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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
