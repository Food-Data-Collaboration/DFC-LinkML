# Ingredient

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Ingredient

## Identity

- **JSON-LD type**: `dfc-b:Ingredient`
- **Hierarchy**: `What_Subject` → `Ingredient`

## Properties (2)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`is_ingredient_of`](../properties/is_ingredient_of.md) | `dfc-b:isIngredientOf` | `string` | literal | this class |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
