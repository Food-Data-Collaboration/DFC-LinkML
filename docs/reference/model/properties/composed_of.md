# composed_of (deprecated)

!!! warning

    **`composed_of` is deprecated and should not be used in new data.**

    The DFC ontology does not assert a replacement for it.

## Definition

- **Predicate**: `dfc-b:composedOf`
- **Range**: `string`
- **Inverse**: `composes`
- **Declared domain**: `Ingredient`

## Description

Cette propriété représente la composition d'un produit défini par un ensemble d'ingrédients.

## Note

The connectors still accept this predicate on import and will round-trip it. Excluding it from the reference is about not pointing new work at a deprecated property, not about it being unreadable.
