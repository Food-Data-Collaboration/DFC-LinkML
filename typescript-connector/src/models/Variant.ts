// Class from DFC Business Ontology: #Variant
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { VariantCaracteristic } from "./VariantCaracteristic.js";

export interface VariantParams extends DefinedProductParams {
  isVariantOf?: string;
  hasVariantCaracteristic?: VariantCaracteristic;
}
export class Variant extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Variant";
  }

  isVariantOf?: string;
  hasVariantCaracteristic?: VariantCaracteristic;

  constructor(
    semanticId: string,
    params?: VariantParams,
  ) {
    super(semanticId, params);
    this.isVariantOf = params?.isVariantOf;
    this.hasVariantCaracteristic = params?.hasVariantCaracteristic;
    this.semanticType = Variant.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Variant:is_variant_of", () => this.isVariantOf);
    this.registerSemanticProperty("dfc-b:Variant:has_variant_caracteristic", () => this.hasVariantCaracteristic);
  }
  static {
    SemanticObject.typeRegistry.set(Variant.SEMANTIC_TYPE, Variant);
  }
}
