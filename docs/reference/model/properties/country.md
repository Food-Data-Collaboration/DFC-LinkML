# country (deprecated)

!!! warning

    **`country` is deprecated and should not be used in new data.**

    The DFC ontology does not assert a replacement for it.

## Definition

- **Predicate**: `dfc-b:country`
- **Range**: `string`
- **Declared domain**: `Address`

## Description

The ISO country that the address is located within

## Note

The connectors still accept this predicate on import and will round-trip it. Excluding it from the reference is about not pointing new work at a deprecated property, not about it being unreadable.
