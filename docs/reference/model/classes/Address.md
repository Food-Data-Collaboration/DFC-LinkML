# Address

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Address

## Identity

- **JSON-LD type**: `dfc-b:Address`
- **Hierarchy**: `Where_Subject` → `Address`

## Properties (8)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`city`](../properties/city.md) | `dfc-b:city` | `string` | literal | this class |
| [`latitude`](../properties/latitude.md) | `dfc-b:latitude` | `float` | literal | this class |
| [`longitude`](../properties/longitude.md) | `dfc-b:longitude` | `float` | literal | this class |
| [`postcode`](../properties/postcode.md) | `dfc-b:postcode` | `string` | literal | this class |
| [`region`](../properties/region.md) | `dfc-b:region` | `string` | literal | this class |
| [`street`](../properties/street.md) | `dfc-b:street` | `string` | literal | this class |
| [`address_of`](../properties/address_of.md) | `dfc-b:addressOf` | `string` | literal | this class |
| [`has_country`](../properties/has_country.md) | `dfc-b:hasCountry` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
