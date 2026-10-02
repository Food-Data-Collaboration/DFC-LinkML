# FunctionalProduct

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #FunctionalProduct

## Identity

- **JSON-LD type**: `dfc-b:FunctionalProduct`
- **Hierarchy**: `What_Subject` → `DefinedProduct` → `FunctionalProduct`

## Properties (31)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`image`](../properties/image.md) | `dfc-b:Image` | `uri` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`url`](../properties/url.md) | `dfc-b:URL` | `uri` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`brand`](../properties/brand.md) | `dfc-b:brand` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`claim`](../properties/claim.md) | `dfc-b:claim` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_percentage_of_alcohol_by_volume`](../properties/has_percentage_of_alcohol_by_volume.md) | `dfc-b:hasPercentageOfAlcoholByVolume` | `float` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`lifetime`](../properties/lifetime.md) | `dfc-b:lifetime` | `float` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`physical_characteristics`](../properties/physical_characteristics.md) | `dfc-b:physicalCharacteristics` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`specific_condition`](../properties/specific_condition.md) | `dfc-b:specificCondition` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`consumed_by`](../properties/consumed_by.md) | `dfc-b:consumedBy` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_allergen_characteristic`](../properties/has_allergen_characteristic.md) | `dfc-b:hasAllergenCharacteristic` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_brand`](../properties/has_brand.md) | `dfc-b:hasBrand` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_certification`](../properties/has_certification.md) | `dfc-b:hasCertification` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_characteristic`](../properties/has_characteristic.md) | `dfc-b:hasCharacteristic` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_claim`](../properties/has_claim.md) | `dfc-b:hasClaim` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_container_information`](../properties/has_container_information.md) | `dfc-b:hasContainerInformation` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_geographical_origin`](../properties/has_geographical_origin.md) | `dfc-b:hasGeographicalOrigin` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_ingredient`](../properties/has_ingredient.md) | `dfc-b:hasIngredient` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_labelling_characteristic`](../properties/has_labelling_characteristic.md) | `dfc-b:hasLabellingCharacteristic` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_nature_origin`](../properties/has_nature_origin.md) | `dfc-b:hasNatureOrigin` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_nutrient_characteristic`](../properties/has_nutrient_characteristic.md) | `dfc-b:hasNutrientCharacteristic` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_part_origin`](../properties/has_part_origin.md) | `dfc-b:hasPartOrigin` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_physical_characteristic`](../properties/has_physical_characteristic.md) | `dfc-b:hasPhysicalCharacteristic` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | [`DefinedProduct`](DefinedProduct.md) |
| [`has_reference_product_option`](../properties/has_reference_product_option.md) | `dfc-b:hasReferenceProductOption` | `ProductOption` | object | [`DefinedProduct`](DefinedProduct.md) |
| [`has_type`](../properties/has_type.md) | `dfc-b:hasType` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_unit`](../properties/has_unit.md) | `dfc-b:hasUnit` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`has_variant`](../properties/has_variant.md) | `dfc-b:hasVariant` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`process_of`](../properties/process_of.md) | `dfc-b:processOf` | `string` | literal | [`DefinedProduct`](DefinedProduct.md) |
| [`referenced_by`](../properties/referenced_by.md) | `dfc-b:referencedBy` | `CatalogItem` | object | [`DefinedProduct`](DefinedProduct.md) |
| [`requested_by`](../properties/requested_by.md) | `dfc-b:requestedBy` | `Agent` | object | this class |
| [`satisfied_by`](../properties/satisfied_by.md) | `dfc-b:satisfiedBy` | `TechnicalProduct` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
