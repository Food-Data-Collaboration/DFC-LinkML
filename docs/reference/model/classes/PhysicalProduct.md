# PhysicalProduct

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #PhysicalProduct

## Identity

- **JSON-LD type**: `dfc-b:PhysicalProduct`
- **Hierarchy**: `What_Subject` → `PhysicalProduct`

## Properties (10)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`image`](../properties/image.md) | `dfc-b:Image` | `uri` | literal | this class |
| [`concerned_by`](../properties/concerned_by.md) | `dfc-b:concernedBy` | `string` | literal | this class |
| [`constitued_by`](../properties/constitued_by.md) | `dfc-b:constituedBy` | `string` | literal | this class |
| [`consumed_by`](../properties/consumed_by.md) | `dfc-b:consumedBy` | `string` | literal | this class |
| [`fulfills`](../properties/fulfills.md) | `dfc-b:fulfills` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`owned_by`](../properties/owned_by.md) | `dfc-b:ownedBy` | `Agent` | object | this class |
| [`produced_by`](../properties/produced_by.md) | `dfc-b:producedBy` | `string` | literal | this class |
| [`represents`](../properties/represents.md) | `dfc-b:represents` | `LocalizedProduct` | object | this class |
| [`traced_by`](../properties/traced_by.md) | `dfc-b:tracedBy` | `ProductBatch` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
