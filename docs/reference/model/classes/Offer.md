# Offer

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Offer

## Identity

- **JSON-LD type**: `dfc-b:Offer`
- **Hierarchy**: `Offer`

## Properties (7)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`discount`](../properties/discount.md) | `dfc-b:discount` | `float` | literal | this class |
| [`stock_limitation`](../properties/stock_limitation.md) | `dfc-b:stockLimitation` | `float` | literal | this class |
| [`concerned_by`](../properties/concerned_by.md) | `dfc-b:concernedBy` | `string` | literal | this class |
| [`has_price`](../properties/has_price.md) | `dfc-b:hasPrice` | `string` | literal | this class |
| [`listed_in`](../properties/listed_in.md) | `dfc-b:listedIn` | `string` | literal | this class |
| [`offers`](../properties/offers.md) | `dfc-b:offers` | `CatalogItem` | object | this class |
| [`offers_to`](../properties/offers_to.md) | `dfc-b:offersTo` | `CustomerCategory` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
