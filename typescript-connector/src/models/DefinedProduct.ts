import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { CatalogItem } from "./CatalogItem.js";
import type { ProductOption } from "./ProductOption.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link DefinedProduct}.
 *
 * Own DFC properties: image, url, brand, claim,
 *   hasPercentageOfAlcoholByVolume, lifetime, physicalCharacteristics,
 *   quantity, specificCondition, composes, consumedBy,
 *   hasAllergenCharacteristic, hasBrand, hasCertification, hasCharacteristic,
 *   hasClaim, hasContainerInformation, hasGeographicalOrigin, hasIngredient,
 *   hasLabellingCharacteristic, hasNatureOrigin, hasNutrientCharacteristic,
 *   hasPartOrigin, hasPhysicalCharacteristic, hasType, hasUnit, hasVariant,
 *   processOf, hasQuantity, hasReferenceProductOption, referencedBy.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface DefinedProductParams extends WhatSubjectParams {
  /**
   * A URL for an image of the Product
   *
   * Serializes as `dfc-b:Image`.
   */
  image?: string;
  /**
   * The Universal Resource Locator address of the virtual place
   *
   * Serializes as `dfc-b:URL`.
   */
  url?: string;
  /**
   * Deprecated onto v5.0
   *
   * Serializes as `dfc-b:brand`.
   */
  brand?: string;
  /**
   * **Deprecated** Any claims of a Product. **Deprecated**
   *
   * Serializes as `dfc-b:claim`.
   */
  claim?: string;
  /**
   * Percentage of Alcohol (by volume) in the Product, expressed as a number
   *   in the range 0.00 - 100.00
   *
   * Serializes as `dfc-b:hasPercentageOfAlcoholByVolume`.
   */
  hasPercentageOfAlcoholByVolume?: number;
  /**
   * Lifetime of the product (in days), expressed as a number
   *
   * Serializes as `dfc-b:lifetime`.
   */
  lifetime?: number;
  /**
   * **Deprecated** Any Physical Characteristics of a Product.
   *   **Deprecated**
   *
   * Serializes as `dfc-b:physicalCharacteristics`.
   */
  physicalCharacteristics?: string[];
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * Any specific conditions requried for storage or carriage of the Product
   *
   * Serializes as `dfc-b:specificCondition`.
   */
  specificCondition?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:composes`.
   */
  composes?: string[];
  /**
   * The ConsmuptionFlow by which the Product is transformed into other
   *   Products
   *
   * Serializes as `dfc-b:consumedBy`.
   */
  consumedBy?: string;
  /**
   * Details of allergens contains in the product
   *
   * Serializes as `dfc-b:hasAllergenCharacteristic`.
   */
  hasAllergenCharacteristic?: string;
  /**
   * The brand a Product is sold under (Enterprises can market under
   *   different Brands, some Brands can be collaborative across Enterprises)
   *
   * Serializes as `dfc-b:hasBrand`.
   */
  hasBrand?: string;
  /**
   * SKOS:Concept that details any certification the product holds (e.g.
   *   Organic, Biodynamic etc), enumerated in the Facets vocabulary
   *
   * Serializes as `dfc-b:hasCertification`.
   */
  hasCertification?: string;
  /**
   * SuperProperty of:AllergenCharacteristicLabellingCharacteristic
   *   NutrientCharacteristic PhysicalCharacteristic
   *
   * Serializes as `dfc-b:hasCharacteristic`.
   */
  hasCharacteristic?: string;
  /**
   * Any unverified/uncertified claim made by the Product (e.g. "Low Fat",
   *   Locally Grow")
   *
   * Serializes as `dfc-b:hasClaim`.
   */
  hasClaim?: string;
  /**
   * SKOS:Concept that details the container the product is supplied in
   *   (e.g.box, tin, paper bag etc), enumerated in the Measures vocabulary
   *   (#containerUnit)
   *
   * Serializes as `dfc-b:hasContainerInformation`.
   */
  hasContainerInformation?: string;
  /**
   * Serializes as `dfc-b:hasGeographicalOrigin`.
   */
  hasGeographicalOrigin?: string;
  /**
   * Links DefinedProducts (via composes relationship) to allow recipe
   *   construction N.B. This is similar (simplified) functionality to the
   *   AsPlannedTransformation loop. These two options are not compatible.
   *
   * Serializes as `dfc-b:hasIngredient`.
   */
  hasIngredient?: string;
  /**
   * Labelling information about the product (from dfc-m:LabellingDimension)
   *
   * Serializes as `dfc-b:hasLabellingCharacteristic`.
   */
  hasLabellingCharacteristic?: string;
  /**
   * The natural origin of the product, e.g. Plant, Animal
   *
   * Serializes as `dfc-b:hasNatureOrigin`.
   */
  hasNatureOrigin?: string;
  /**
   * Nutrient information about the product (from dfc-m:NutrientDimension)
   *
   * Serializes as `dfc-b:hasNutrientCharacteristic`.
   */
  hasNutrientCharacteristic?: string;
  /**
   * The part of the plant or animal that the product originated from (e.g.
   *   egg, animal body, seed, root )
   *
   * Serializes as `dfc-b:hasPartOrigin`.
   */
  hasPartOrigin?: string;
  /**
   * Physical information about the product (from dfc-m:PhysicalDimension)
   *
   * Serializes as `dfc-b:hasPhysicalCharacteristic`.
   */
  hasPhysicalCharacteristic?: string;
  /**
   * The Product Type grouping for the Product, for more detail see
   *   Taxonomies/ProductType
   *
   * Serializes as `dfc-b:hasType`.
   */
  hasType?: string;
  /**
   * A Currency Unit. listed within the skos:concept of CurrencyUnit in the
   *   measures.rdf
   *
   * Serializes as `dfc-b:hasUnit`.
   */
  hasUnit?: string;
  /**
   * Serializes as `dfc-b:hasVariant`.
   */
  hasVariant?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:processOf`.
   */
  processOf?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * Serializes as `dfc-b:hasReferenceProductOption`.
   */
  hasReferenceProductOption?: ProductOption | string;
  /**
   * Any/all CatalogItems that reference the Product for sale
   *
   * Serializes as `dfc-b:referencedBy`.
   */
  referencedBy?: CatalogItem | string;
}

/**
 * A DFC `dfc-b:DefinedProduct`, serialized with `@type:
 *   dfc-b:DefinedProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct`.
 * Own DFC properties: image, url, brand, claim,
 *   hasPercentageOfAlcoholByVolume, lifetime, physicalCharacteristics,
 *   quantity, specificCondition, composes, consumedBy,
 *   hasAllergenCharacteristic, hasBrand, hasCertification, hasCharacteristic,
 *   hasClaim, hasContainerInformation, hasGeographicalOrigin, hasIngredient,
 *   hasLabellingCharacteristic, hasNatureOrigin, hasNutrientCharacteristic,
 *   hasPartOrigin, hasPhysicalCharacteristic, hasType, hasUnit, hasVariant,
 *   processOf, hasQuantity, hasReferenceProductOption, referencedBy.
 */
export class DefinedProduct extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:DefinedProduct";
  }

  /**
   * A URL for an image of the Product
   *
   * Serializes as `dfc-b:Image`.
   */
  image?: string;
  /**
   * The Universal Resource Locator address of the virtual place
   *
   * Serializes as `dfc-b:URL`.
   */
  url?: string;
  /**
   * Deprecated onto v5.0
   *
   * Serializes as `dfc-b:brand`.
   */
  brand?: string;
  /**
   * **Deprecated** Any claims of a Product. **Deprecated**
   *
   * Serializes as `dfc-b:claim`.
   */
  claim?: string;
  /**
   * Percentage of Alcohol (by volume) in the Product, expressed as a number
   *   in the range 0.00 - 100.00
   *
   * Serializes as `dfc-b:hasPercentageOfAlcoholByVolume`.
   */
  hasPercentageOfAlcoholByVolume?: number;
  /**
   * Lifetime of the product (in days), expressed as a number
   *
   * Serializes as `dfc-b:lifetime`.
   */
  lifetime?: number;
  /**
   * **Deprecated** Any Physical Characteristics of a Product.
   *   **Deprecated**
   *
   * Serializes as `dfc-b:physicalCharacteristics`.
   */
  physicalCharacteristics?: string[];
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * Any specific conditions requried for storage or carriage of the Product
   *
   * Serializes as `dfc-b:specificCondition`.
   */
  specificCondition?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:composes`.
   */
  composes?: string[];
  /**
   * The ConsmuptionFlow by which the Product is transformed into other
   *   Products
   *
   * Serializes as `dfc-b:consumedBy`.
   */
  consumedBy?: string;
  /**
   * Details of allergens contains in the product
   *
   * Serializes as `dfc-b:hasAllergenCharacteristic`.
   */
  hasAllergenCharacteristic?: string;
  /**
   * The brand a Product is sold under (Enterprises can market under
   *   different Brands, some Brands can be collaborative across Enterprises)
   *
   * Serializes as `dfc-b:hasBrand`.
   */
  hasBrand?: string;
  /**
   * SKOS:Concept that details any certification the product holds (e.g.
   *   Organic, Biodynamic etc), enumerated in the Facets vocabulary
   *
   * Serializes as `dfc-b:hasCertification`.
   */
  hasCertification?: string;
  /**
   * SuperProperty of:AllergenCharacteristicLabellingCharacteristic
   *   NutrientCharacteristic PhysicalCharacteristic
   *
   * Serializes as `dfc-b:hasCharacteristic`.
   */
  hasCharacteristic?: string;
  /**
   * Any unverified/uncertified claim made by the Product (e.g. "Low Fat",
   *   Locally Grow")
   *
   * Serializes as `dfc-b:hasClaim`.
   */
  hasClaim?: string;
  /**
   * SKOS:Concept that details the container the product is supplied in
   *   (e.g.box, tin, paper bag etc), enumerated in the Measures vocabulary
   *   (#containerUnit)
   *
   * Serializes as `dfc-b:hasContainerInformation`.
   */
  hasContainerInformation?: string;
  /**
   * Serializes as `dfc-b:hasGeographicalOrigin`.
   */
  hasGeographicalOrigin?: string;
  /**
   * Links DefinedProducts (via composes relationship) to allow recipe
   *   construction N.B. This is similar (simplified) functionality to the
   *   AsPlannedTransformation loop. These two options are not compatible.
   *
   * Serializes as `dfc-b:hasIngredient`.
   */
  hasIngredient?: string;
  /**
   * Labelling information about the product (from dfc-m:LabellingDimension)
   *
   * Serializes as `dfc-b:hasLabellingCharacteristic`.
   */
  hasLabellingCharacteristic?: string;
  /**
   * The natural origin of the product, e.g. Plant, Animal
   *
   * Serializes as `dfc-b:hasNatureOrigin`.
   */
  hasNatureOrigin?: string;
  /**
   * Nutrient information about the product (from dfc-m:NutrientDimension)
   *
   * Serializes as `dfc-b:hasNutrientCharacteristic`.
   */
  hasNutrientCharacteristic?: string;
  /**
   * The part of the plant or animal that the product originated from (e.g.
   *   egg, animal body, seed, root )
   *
   * Serializes as `dfc-b:hasPartOrigin`.
   */
  hasPartOrigin?: string;
  /**
   * Physical information about the product (from dfc-m:PhysicalDimension)
   *
   * Serializes as `dfc-b:hasPhysicalCharacteristic`.
   */
  hasPhysicalCharacteristic?: string;
  /**
   * The Product Type grouping for the Product, for more detail see
   *   Taxonomies/ProductType
   *
   * Serializes as `dfc-b:hasType`.
   */
  hasType?: string;
  /**
   * A Currency Unit. listed within the skos:concept of CurrencyUnit in the
   *   measures.rdf
   *
   * Serializes as `dfc-b:hasUnit`.
   */
  hasUnit?: string;
  /**
   * Serializes as `dfc-b:hasVariant`.
   */
  hasVariant?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:processOf`.
   */
  processOf?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * Serializes as `dfc-b:hasReferenceProductOption`.
   */
  hasReferenceProductOption?: ProductOption | string;
  /**
   * Any/all CatalogItems that reference the Product for sale
   *
   * Serializes as `dfc-b:referencedBy`.
   */
  referencedBy?: CatalogItem | string;

  constructor(
    semanticId: string,
    params?: DefinedProductParams,
  ) {
    super(semanticId, params);
    this.image = params?.image;
    this.url = params?.url;
    this.brand = params?.brand;
    this.claim = params?.claim;
    this.hasPercentageOfAlcoholByVolume = params?.hasPercentageOfAlcoholByVolume;
    this.lifetime = params?.lifetime;
    this.physicalCharacteristics = params?.physicalCharacteristics;
    this.quantity = params?.quantity;
    this.specificCondition = params?.specificCondition;
    this.composes = params?.composes;
    this.consumedBy = params?.consumedBy;
    this.hasAllergenCharacteristic = params?.hasAllergenCharacteristic;
    this.hasBrand = params?.hasBrand;
    this.hasCertification = params?.hasCertification;
    this.hasCharacteristic = params?.hasCharacteristic;
    this.hasClaim = params?.hasClaim;
    this.hasContainerInformation = params?.hasContainerInformation;
    this.hasGeographicalOrigin = params?.hasGeographicalOrigin;
    this.hasIngredient = params?.hasIngredient;
    this.hasLabellingCharacteristic = params?.hasLabellingCharacteristic;
    this.hasNatureOrigin = params?.hasNatureOrigin;
    this.hasNutrientCharacteristic = params?.hasNutrientCharacteristic;
    this.hasPartOrigin = params?.hasPartOrigin;
    this.hasPhysicalCharacteristic = params?.hasPhysicalCharacteristic;
    this.hasType = params?.hasType;
    this.hasUnit = params?.hasUnit;
    this.hasVariant = params?.hasVariant;
    this.processOf = params?.processOf;
    this.hasQuantity = params?.hasQuantity;
    this.hasReferenceProductOption = params?.hasReferenceProductOption;
    this.referencedBy = params?.referencedBy;
    this.semanticType = DefinedProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Image", () => this.image);
    this.registerSemanticProperty("dfc-b:URL", () => this.url);
    this.registerSemanticProperty("dfc-b:brand", () => this.brand);
    this.registerSemanticProperty("dfc-b:claim", () => this.claim);
    this.registerSemanticProperty("dfc-b:hasPercentageOfAlcoholByVolume", () => this.hasPercentageOfAlcoholByVolume);
    this.registerSemanticProperty("dfc-b:lifetime", () => this.lifetime);
    this.registerSemanticProperty("dfc-b:physicalCharacteristics", () => this.physicalCharacteristics);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:specificCondition", () => this.specificCondition);
    this.registerSemanticProperty("dfc-b:composes", () => this.composes);
    this.registerSemanticProperty("dfc-b:consumedBy", () => this.consumedBy);
    this.registerSemanticProperty("dfc-b:hasAllergenCharacteristic", () => this.hasAllergenCharacteristic);
    this.registerSemanticProperty("dfc-b:hasBrand", () => this.hasBrand);
    this.registerSemanticProperty("dfc-b:hasCertification", () => this.hasCertification);
    this.registerSemanticProperty("dfc-b:hasCharacteristic", () => this.hasCharacteristic);
    this.registerSemanticProperty("dfc-b:hasClaim", () => this.hasClaim);
    this.registerSemanticProperty("dfc-b:hasContainerInformation", () => this.hasContainerInformation);
    this.registerSemanticProperty("dfc-b:hasGeographicalOrigin", () => this.hasGeographicalOrigin);
    this.registerSemanticProperty("dfc-b:hasIngredient", () => this.hasIngredient);
    this.registerSemanticProperty("dfc-b:hasLabellingCharacteristic", () => this.hasLabellingCharacteristic);
    this.registerSemanticProperty("dfc-b:hasNatureOrigin", () => this.hasNatureOrigin);
    this.registerSemanticProperty("dfc-b:hasNutrientCharacteristic", () => this.hasNutrientCharacteristic);
    this.registerSemanticProperty("dfc-b:hasPartOrigin", () => this.hasPartOrigin);
    this.registerSemanticProperty("dfc-b:hasPhysicalCharacteristic", () => this.hasPhysicalCharacteristic);
    this.registerSemanticProperty("dfc-b:hasType", () => this.hasType);
    this.registerSemanticProperty("dfc-b:hasUnit", () => this.hasUnit);
    this.registerSemanticProperty("dfc-b:hasVariant", () => this.hasVariant);
    this.registerSemanticProperty("dfc-b:processOf", () => this.processOf);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    this.registerSemanticProperty("dfc-b:hasReferenceProductOption", () => this.hasReferenceProductOption);
    this.registerSemanticProperty("dfc-b:referencedBy", () => this.referencedBy);
  }
  static {
    SemanticObject.typeRegistry.set(DefinedProduct.SEMANTIC_TYPE, DefinedProduct);
  }
}
