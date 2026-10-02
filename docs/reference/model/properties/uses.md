# uses (deprecated)

!!! warning

    **`uses` is deprecated and should not be used in new data.**

    The DFC ontology does not assert a replacement for it.

## Definition

- **Predicate**: `dfc-b:uses`
- **Range**: `string`
- **Declared domain**: `DeliveryOption`, `Order`, `PickupOption`

## Replacement

The DFC ontology says to use [`refers_to`](refers_to.md) instead.

**`refers_to` is also deprecated.** The ontology offers no live replacement for either, so this slot has no current equivalent in DFC v2.0.0.

## Note

The connectors still accept this predicate on import and will round-trip it. Excluding it from the reference is about not pointing new work at a deprecated property, not about it being unreadable.
