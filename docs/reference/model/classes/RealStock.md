# RealStock

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #RealStock

## Identity

- **JSON-LD type**: `dfc-b:RealStock`
- **Hierarchy**: `Stock` → `RealStock`

## Properties (6)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`availability_date`](../properties/availability_date.md) | `dfc-b:availabilityDate` | `date` | literal | [`Stock`](Stock.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`Stock`](Stock.md) |
| [`transported_by`](../properties/transported_by.md) | `dfc-b:transportedBy` | `string` | literal | [`Stock`](Stock.md) |
| [`constitutes`](../properties/constitutes.md) | `dfc-b:constitutes` | `string` | literal | this class |
| [`identified_by`](../properties/identified_by.md) | `dfc-b:identifiedBy` | `ProductBatch` | object | this class |
| [`stored_in`](../properties/stored_in.md) | `dfc-b:storedIn` | `PhysicalPlace` | object | this class |

## Notes

- **`maximum_cardinality: 1`** on `constitutes`, `identified_by`, `stored_in`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
