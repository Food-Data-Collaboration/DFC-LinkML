# PickUpStep

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #PickUpStep

## Identity

- **JSON-LD type**: `dfc-b:PickUpStep`
- **Hierarchy**: `Where_Subject` → `Step` → `PickUpStep`

## Properties (5)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`arrival_date`](../properties/arrival_date.md) | `dfc-b:arrivalDate` | `datetime` | literal | [`Step`](Step.md) |
| [`duration`](../properties/duration.md) | `dfc-b:duration` | `string` | literal | [`Step`](Step.md) |
| [`delivery`](../properties/delivery.md) | `dfc-b:delivery` | `Shipment` | object | [`Step`](Step.md) |
| [`is_step_of`](../properties/is_step_of.md) | `dfc-b:isStepOf` | `string` | literal | [`Step`](Step.md) |
| [`pick_up`](../properties/pick_up.md) | `dfc-b:pickUp` | `Shipment` | object | [`Step`](Step.md) |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
