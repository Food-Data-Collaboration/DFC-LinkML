# has_output

[← all properties](index.md)

## Description

The PlannedProductionFlow that is the output of the PlannedTransformation

## Definition

- **Predicate**: `dfc-b:hasOutput`
- **Range**: `string` (literal)
- **Inverse**: `output_of`
- **Cardinality**: **Collection** — the ontology states no upper bound for this property, so it takes several values. This comes from the curated list in `config/dfc-default.yaml`, verified against the original DFC v2 connectors; it is not derived from the ontology.

## Declared domain

[`AsPlannedLocalTransformation`](../classes/AsPlannedLocalTransformation.md), [`AsPlannedTransformation`](../classes/AsPlannedTransformation.md), [`AsRealizedTransformation`](../classes/AsRealizedTransformation.md)

## Available on (3)

[`AsPlannedLocalTransformation`](../classes/AsPlannedLocalTransformation.md), [`AsPlannedTransformation`](../classes/AsPlannedTransformation.md), [`AsRealizedTransformation`](../classes/AsRealizedTransformation.md)

## Notes

- Declared on 3 class(es) in the ontology, but inherited by 3. The connectors place a slot on every root class when its domain names no schema class, so it is available everywhere.
- The schema records no `required` or `multivalued` flag for this slot.
