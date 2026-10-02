# Coordination

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Coordination

## Identity

- **JSON-LD type**: `dfc-b:Coordination`
- **Hierarchy**: `Coordination`

## Properties (3)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`margin_percent`](../properties/margin_percent.md) | `dfc-b:marginPercent` | `float` | literal | this class |
| [`coordinated_by`](../properties/coordinated_by.md) | `dfc-b:coordinatedBy` | `Organization` | object | this class |
| [`has_object`](../properties/has_object.md) | `dfc-b:hasObject` | `SaleSession` | object | this class |

## Notes

- **`maximum_cardinality: 1`** on `coordinated_by`, `has_object`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
