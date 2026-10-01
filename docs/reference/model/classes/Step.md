# Step

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Step

## Identity

- **JSON-LD type**: `dfc-b:Step`
- **Hierarchy**: `Where_Subject` → `Step`

## Subclasses

[`DeliveryStep`](../classes/DeliveryStep.md), [`PickUpStep`](../classes/PickUpStep.md)

## Properties (5)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`arrival_date`](../properties/arrival_date.md) | `dfc-b:arrivalDate` | `datetime` | literal | this class |
| [`duration`](../properties/duration.md) | `dfc-b:duration` | `string` | literal | this class |
| [`delivery`](../properties/delivery.md) | `dfc-b:delivery` | `Shipment` | object | this class |
| [`is_step_of`](../properties/is_step_of.md) | `dfc-b:isStepOf` | `string` | literal | this class |
| [`pick_up`](../properties/pick_up.md) | `dfc-b:pickUp` | `Shipment` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
