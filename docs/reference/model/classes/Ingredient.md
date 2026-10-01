# Ingredient

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Ingredient

## Identity

- **JSON-LD type**: `dfc-b:Ingredient`
- **Hierarchy**: `What_Subject` → `Ingredient`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`composed_of`](../properties/composed_of.md) | `dfc-b:composedOf` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`is_ingredient_of`](../properties/is_ingredient_of.md) | `dfc-b:isIngredientOf` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
