# quantity (deprecated)

!!! warning

    **`quantity` is deprecated and should not be used in new data.**

    The DFC ontology does not assert a replacement for it.

## Definition

- **Predicate**: `dfc-b:quantity`
- **Range**: `float`
- **Declared domain**: `ConsumptionFlow`, `DefinedProduct`, `LocalizedProduct`, `OrderLine`, `PhysicalProduct`, `ProductionFlow`, `SaleSession`, `ShippingOption`, `Stock`, `Transaction`

## Note

The connectors still accept this predicate on import and will round-trip it. Excluding it from the reference is about not pointing new work at a deprecated property, not about it being unreadable.
