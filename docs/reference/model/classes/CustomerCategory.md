# CustomerCategory

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #CustomerCategory

## Identity

- **JSON-LD type**: `dfc-b:CustomerCategory`
- **Hierarchy**: `Who_Subject` → `CustomerCategory`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`defined_by`](../properties/defined_by.md) | `dfc-b:definedBy` | `Organization` | object | this class |
| [`has_member`](../properties/has_member.md) | `dfc-b:hasMember` | `string` | literal | this class |
| [`has_offer`](../properties/has_offer.md) | `dfc-b:hasOffer` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
