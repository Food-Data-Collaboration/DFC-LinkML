# refers_to (deprecated)

!!! warning

    **`refers_to` is deprecated and should not be used in new data.**

    The DFC ontology does not assert a replacement for it.

## Definition

- **Predicate**: `dfc-b:refersTo`
- **Range**: `Address`
- **Declared domain**: `DeliveryOption`

## Description

The Address the delivery will be/was made to

## Note

The connectors still accept this predicate on import and will round-trip it. Excluding it from the reference is about not pointing new work at a deprecated property, not about it being unreadable.
