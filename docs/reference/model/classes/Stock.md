# Stock

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Stock

## Identity

- **JSON-LD type**: `dfc-b:Stock`
- **Hierarchy**: `Stock`

## Subclasses

[`RealStock`](../classes/RealStock.md), [`TheoriticalStock`](../classes/TheoriticalStock.md)

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`availability_date`](../properties/availability_date.md) | `dfc-b:availabilityDate` | `date` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`transported_by`](../properties/transported_by.md) | `dfc-b:transportedBy` | `string` | literal | this class |

## Notes

- **`maximum_cardinality: 1`** on `availability_date`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
