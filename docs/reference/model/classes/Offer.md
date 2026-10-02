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

- **`maximum_cardinality: 1`** on `offers`, `offers_to`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
