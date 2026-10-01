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

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
