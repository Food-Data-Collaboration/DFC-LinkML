# DefinedProduct

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #DefinedProduct

## Identity

- **JSON-LD type**: `dfc-b:DefinedProduct`
- **Hierarchy**: `What_Subject` → `DefinedProduct`

## Subclasses

[`FunctionalProduct`](../classes/FunctionalProduct.md), [`SuppliedProduct`](../classes/SuppliedProduct.md), [`TechnicalProduct`](../classes/TechnicalProduct.md), [`Variant`](../classes/Variant.md)

## Properties (31)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`image`](../properties/image.md) | `dfc-b:Image` | `uri` | literal | this class |
| [`url`](../properties/url.md) | `dfc-b:URL` | `uri` | literal | this class |
| [`brand`](../properties/brand.md) | `dfc-b:brand` | `string` | literal | this class |
| [`claim`](../properties/claim.md) | `dfc-b:claim` | `string` | literal | this class |
| [`has_percentage_of_alcohol_by_volume`](../properties/has_percentage_of_alcohol_by_volume.md) | `dfc-b:hasPercentageOfAlcoholByVolume` | `float` | literal | this class |
| [`lifetime`](../properties/lifetime.md) | `dfc-b:lifetime` | `float` | literal | this class |
| [`physical_characteristics`](../properties/physical_characteristics.md) | `dfc-b:physicalCharacteristics` | `string` | literal | this class |
| [`quantity`](../properties/quantity.md) | `dfc-b:quantity` | `float` | literal | this class |
| [`specific_condition`](../properties/specific_condition.md) | `dfc-b:specificCondition` | `string` | literal | this class |
| [`composes`](../properties/composes.md) | `dfc-b:composes` | `string` | literal | this class |
| [`consumed_by`](../properties/consumed_by.md) | `dfc-b:consumedBy` | `string` | literal | this class |
| [`has_allergen_characteristic`](../properties/has_allergen_characteristic.md) | `dfc-b:hasAllergenCharacteristic` | `string` | literal | this class |
| [`has_brand`](../properties/has_brand.md) | `dfc-b:hasBrand` | `string` | literal | this class |
| [`has_certification`](../properties/has_certification.md) | `dfc-b:hasCertification` | `string` | literal | this class |
| [`has_characteristic`](../properties/has_characteristic.md) | `dfc-b:hasCharacteristic` | `string` | literal | this class |
| [`has_claim`](../properties/has_claim.md) | `dfc-b:hasClaim` | `string` | literal | this class |
| [`has_container_information`](../properties/has_container_information.md) | `dfc-b:hasContainerInformation` | `string` | literal | this class |
| [`has_geographical_origin`](../properties/has_geographical_origin.md) | `dfc-b:hasGeographicalOrigin` | `string` | literal | this class |
| [`has_ingredient`](../properties/has_ingredient.md) | `dfc-b:hasIngredient` | `string` | literal | this class |
| [`has_labelling_characteristic`](../properties/has_labelling_characteristic.md) | `dfc-b:hasLabellingCharacteristic` | `string` | literal | this class |
| [`has_nature_origin`](../properties/has_nature_origin.md) | `dfc-b:hasNatureOrigin` | `string` | literal | this class |
| [`has_nutrient_characteristic`](../properties/has_nutrient_characteristic.md) | `dfc-b:hasNutrientCharacteristic` | `string` | literal | this class |
| [`has_part_origin`](../properties/has_part_origin.md) | `dfc-b:hasPartOrigin` | `string` | literal | this class |
| [`has_physical_characteristic`](../properties/has_physical_characteristic.md) | `dfc-b:hasPhysicalCharacteristic` | `string` | literal | this class |
| [`has_quantity`](../properties/has_quantity.md) | `dfc-b:hasQuantity` | `QuantitativeValue` | object | this class |
| [`has_reference_product_option`](../properties/has_reference_product_option.md) | `dfc-b:hasReferenceProductOption` | `ProductOption` | object | this class |
| [`has_type`](../properties/has_type.md) | `dfc-b:hasType` | `string` | literal | this class |
| [`has_unit`](../properties/has_unit.md) | `dfc-b:hasUnit` | `string` | literal | this class |
| [`has_variant`](../properties/has_variant.md) | `dfc-b:hasVariant` | `string` | literal | this class |
| [`process_of`](../properties/process_of.md) | `dfc-b:processOf` | `string` | literal | this class |
| [`referenced_by`](../properties/referenced_by.md) | `dfc-b:referencedBy` | `CatalogItem` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
