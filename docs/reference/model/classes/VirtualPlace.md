# VirtualPlace

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #VirtualPlace

## Identity

- **JSON-LD type**: `dfc-b:VirtualPlace`
- **Hierarchy**: `Where_Subject` → `Place` → `VirtualPlace`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`hosts`](../properties/hosts.md) | `dfc-b:hosts` | `SaleSession` | object | [`Place`](Place.md) |
| [`url`](../properties/url.md) | `dfc-b:URL` | `uri` | literal | this class |
| [`website_page`](../properties/website_page.md) | `dfc-b:websitePage` | `uri` | literal | this class |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
