# LocalizedProduct

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #LocalizedProduct

## Identity

- **JSON-LD type**: `dfc-b:LocalizedProduct`
- **Hierarchy**: `What_Subject` → `LocalizedProduct`

## Properties (8)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`image`](../properties/image.md) | `dfc-b:Image` | `uri` | literal | this class |
| [`cost`](../properties/cost.md) | `dfc-b:cost` | `float` | literal | this class |
| [`constitued_by`](../properties/constitued_by.md) | `dfc-b:constituedBy` | `string` | literal | this class |
| [`consumed_by`](../properties/consumed_by.md) | `dfc-b:consumedBy` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`has_reference`](../properties/has_reference.md) | `dfc-b:hasReference` | `SuppliedProduct` | object | this class |
| [`produced_by`](../properties/produced_by.md) | `dfc-b:producedBy` | `string` | literal | this class |
| [`represented_by`](../properties/represented_by.md) | `dfc-b:representedBy` | `PhysicalProduct` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
