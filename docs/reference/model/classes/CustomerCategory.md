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

- **`maximum_cardinality: 1`** on `defined_by`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
