# Concept

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Concept

## Identity

- **JSON-LD type**: `dfc-b:Concept`
- **Hierarchy**: `Concept`

## Properties (7)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`certificate_of`](../properties/certificate_of.md) | `dfc-b:certificateOf` | `string` | literal | this class |
| [`claim_of`](../properties/claim_of.md) | `dfc-b:claimOf` | `string` | literal | this class |
| [`container_information_of`](../properties/container_information_of.md) | `dfc-b:containerInformationOf` | `string` | literal | this class |
| [`geographical_origin_of`](../properties/geographical_origin_of.md) | `dfc-b:geographicalOriginOf` | `string` | literal | this class |
| [`nature_origin_of`](../properties/nature_origin_of.md) | `dfc-b:natureOriginOf` | `string` | literal | this class |
| [`part_origin_of`](../properties/part_origin_of.md) | `dfc-b:partOriginOf` | `string` | literal | this class |
| [`type_of`](../properties/type_of.md) | `dfc-b:typeOf` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
