# Route

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Route

## Identity

- **JSON-LD type**: `dfc-b:Route`
- **Hierarchy**: `Where_Subject` → `Route`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`has_geo_json_feature`](../properties/has_geo_json_feature.md) | `dfc-b:hasGeoJsonFeature` | `Feature` | object | this class |
| [`has_step`](../properties/has_step.md) | `dfc-b:hasStep` | `string` | literal | this class |
| [`use_vehicle`](../properties/use_vehicle.md) | `dfc-b:useVehicle` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
