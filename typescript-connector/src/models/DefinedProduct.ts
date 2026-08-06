// Class from DFC Business Ontology: #DefinedProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOption } from "./ProductOption.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface DefinedProductParams extends WhatSubjectParams {
  image?: string;
  url?: string;
  brand?: string;
  claim?: string;
  hasPercentageOfAlcoholByVolume?: number;
  lifetime?: number;
  physicalCharacteristics?: string[];
  quantity?: number;
  specificCondition?: string;
  composes?: string[];
  consumedBy?: string;
  hasAllergenCharacteristic?: string;
  hasBrand?: string;
  hasCertification?: string;
  hasCharacteristic?: string;
  hasClaim?: string;
  hasContainerInformation?: string;
  hasGeographicalOrigin?: string;
  hasIngredient?: string;
  hasLabellingCharacteristic?: string;
  hasNatureOrigin?: string;
  hasNutrientCharacteristic?: string;
  hasPartOrigin?: string;
  hasPhysicalCharacteristic?: string;
  hasType?: string;
  hasUnit?: string;
  hasVariant?: string;
  processOf?: string;
  referencedBy?: string;
  hasQuantity?: QuantitativeValue;
  hasReferenceProductOption?: ProductOption;
}
export class DefinedProduct extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:DefinedProduct";
  }

  image?: string;
  url?: string;
  brand?: string;
  claim?: string;
  hasPercentageOfAlcoholByVolume?: number;
  lifetime?: number;
  physicalCharacteristics?: string[];
  quantity?: number;
  specificCondition?: string;
  composes?: string[];
  consumedBy?: string;
  hasAllergenCharacteristic?: string;
  hasBrand?: string;
  hasCertification?: string;
  hasCharacteristic?: string;
  hasClaim?: string;
  hasContainerInformation?: string;
  hasGeographicalOrigin?: string;
  hasIngredient?: string;
  hasLabellingCharacteristic?: string;
  hasNatureOrigin?: string;
  hasNutrientCharacteristic?: string;
  hasPartOrigin?: string;
  hasPhysicalCharacteristic?: string;
  hasType?: string;
  hasUnit?: string;
  hasVariant?: string;
  processOf?: string;
  referencedBy?: string;
  hasQuantity?: QuantitativeValue;
  hasReferenceProductOption?: ProductOption;

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
    this.referencedBy = params?.referencedBy;
    this.hasQuantity = params?.hasQuantity;
    this.hasReferenceProductOption = params?.hasReferenceProductOption;
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
    this.registerSemanticProperty("dfc-b:referencedBy", () => this.referencedBy);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    this.registerSemanticProperty("dfc-b:hasReferenceProductOption", () => this.hasReferenceProductOption);
  }
  static {
    SemanticObject.typeRegistry.set(DefinedProduct.SEMANTIC_TYPE, DefinedProduct);
  }
}
