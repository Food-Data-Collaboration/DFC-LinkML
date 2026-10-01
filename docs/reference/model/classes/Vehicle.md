# Vehicle

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Vehicle

## Identity

- **JSON-LD type**: `dfc-b:Vehicle`
- **Hierarchy**: `What_Subject` → `Vehicle`

## Properties (7)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`frozen`](../properties/frozen.md) | `dfc-b:frozen` | `boolean` | literal | this class |
| [`refrigerated`](../properties/refrigerated.md) | `dfc-b:refrigerated` | `boolean` | literal | this class |
| [`based_at`](../properties/based_at.md) | `dfc-b:basedAt` | `PhysicalPlace` | object | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`is_available_during`](../properties/is_available_during.md) | `dfc-b:isAvailableDuring` | `OpeningHoursSpecification` | object | this class |
| [`ships`](../properties/ships.md) | `dfc-b:ships` | `string` | literal | this class |
| [`used_in_route`](../properties/used_in_route.md) | `dfc-b:usedInRoute` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
