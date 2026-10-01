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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
