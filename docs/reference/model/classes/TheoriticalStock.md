# TheoriticalStock

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #TheoriticalStock

## Identity

- **JSON-LD type**: `dfc-b:TheoriticalStock`
- **Hierarchy**: `Stock` → `TheoriticalStock`

## Properties (5)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`availability_date`](../properties/availability_date.md) | `dfc-b:availabilityDate` | `date` | literal | [`Stock`](Stock.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`Stock`](Stock.md) |
| [`transported_by`](../properties/transported_by.md) | `dfc-b:transportedBy` | `string` | literal | [`Stock`](Stock.md) |
| [`constitutes`](../properties/constitutes.md) | `dfc-b:constitutes` | `string` | literal | this class |
| [`localized_by`](../properties/localized_by.md) | `dfc-b:localizedBy` | `PhysicalPlace` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
