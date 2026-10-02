# VariantCaracteristic

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #VariantCaracteristic

## Identity

- **JSON-LD type**: `dfc-b:VariantCaracteristic`
- **Hierarchy**: `What_Subject` → `VariantCaracteristic`

## Properties (2)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`has_product_option`](../properties/has_product_option.md) | `dfc-b:hasProductOption` | `ProductOption` | object | this class |
| [`has_product_option_value`](../properties/has_product_option_value.md) | `dfc-b:hasProductOptionValue` | `ProductOptionValue` | object | this class |

## Notes

- **`maximum_cardinality: 1`** on `has_product_option`, `has_product_option_value`. The ontology restricts this class to exactly one value, so the generated property is a scalar. Subclasses that do not repeat the restriction inherit the cap.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
