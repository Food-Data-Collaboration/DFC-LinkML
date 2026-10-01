# PhysicalPlace

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #PhysicalPlace

## Identity

- **JSON-LD type**: `dfc-b:PhysicalPlace`
- **Hierarchy**: `Where_Subject` → `Place` → `PhysicalPlace`

## Properties (8)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`hosts`](../properties/hosts.md) | `dfc-b:hosts` | `SaleSession` | object | [`Place`](Place.md) |
| [`has_address`](../properties/has_address.md) | `dfc-b:hasAddress` | `Address` | object | this class |
| [`has_geo_json_feature`](../properties/has_geo_json_feature.md) | `dfc-b:hasGeoJsonFeature` | `Feature` | object | this class |
| [`has_main_contact`](../properties/has_main_contact.md) | `dfc-b:hasMainContact` | `Person` | object | this class |
| [`has_phone_number`](../properties/has_phone_number.md) | `dfc-b:hasPhoneNumber` | `string` | literal | this class |
| [`is_open_during`](../properties/is_open_during.md) | `dfc-b:isOpenDuring` | `OpeningHoursSpecification` | object | this class |
| [`localizes`](../properties/localizes.md) | `dfc-b:localizes` | `TheoriticalStock` | object | this class |
| [`stores`](../properties/stores.md) | `dfc-b:stores` | `RealStock` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
