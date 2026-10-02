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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
