# ProductBatch

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #ProductBatch

## Identity

- **JSON-LD type**: `dfc-b:ProductBatch`
- **Hierarchy**: `What_Subject` → `ProductBatch`

## Properties (6)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`batch_number`](../properties/batch_number.md) | `dfc-b:batchNumber` | `string` | literal | this class |
| [`best_before_date`](../properties/best_before_date.md) | `dfc-b:bestBeforeDate` | `date` | literal | this class |
| [`expiry_date`](../properties/expiry_date.md) | `dfc-b:expiryDate` | `date` | literal | this class |
| [`production_date`](../properties/production_date.md) | `dfc-b:productionDate` | `date` | literal | this class |
| [`identifies`](../properties/identifies.md) | `dfc-b:identifies` | `RealStock` | object | this class |
| [`traces`](../properties/traces.md) | `dfc-b:traces` | `PhysicalProduct` | object | this class |

## Notes

- The ontology states no cardinality for this class, so none is claimed here. Where a property is a collection, that comes from the curated list in `config/dfc-default.yaml` or from the plural-name heuristic — neither is an ontology fact.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
