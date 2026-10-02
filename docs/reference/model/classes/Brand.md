# Brand

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Brand

## Identity

- **JSON-LD type**: `dfc-b:Brand`
- **Hierarchy**: `What_Subject` → `Brand`

## Properties (2)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`brand_of`](../properties/brand_of.md) | `dfc-b:brandOf` | `string` | literal | this class |
| [`owned_by`](../properties/owned_by.md) | `dfc-b:ownedBy` | `Agent` | object | this class |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
