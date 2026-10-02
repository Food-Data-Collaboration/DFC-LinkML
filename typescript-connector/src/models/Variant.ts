import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { VariantCaracteristic } from "./VariantCaracteristic.js";

/**
 * Constructor parameters for {@link Variant}.
 *
 * Own DFC properties: isVariantOf, hasVariantCaracteristic.
 *
 * Inherited parameters come from {@link DefinedProductParams}.
 */
export interface VariantParams extends DefinedProductParams {
  /**
   * Serializes as `dfc-b:isVariantOf`.
   */
  isVariantOf?: string[];
  /**
   * Serializes as `dfc-b:hasVariantCaracteristic`.
   */
  hasVariantCaracteristic?: (VariantCaracteristic | string)[];
}

/**
 * A DFC `dfc-b:Variant`, serialized with `@type: dfc-b:Variant`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` -> `Variant`.
 * Own DFC properties: isVariantOf, hasVariantCaracteristic.
 */
export class Variant extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Variant";
  }

  /**
   * Serializes as `dfc-b:isVariantOf`.
   */
  isVariantOf?: string[];
  /**
   * Serializes as `dfc-b:hasVariantCaracteristic`.
   */
  hasVariantCaracteristic?: (VariantCaracteristic | string)[];

  constructor(
    semanticId: string,
    params?: VariantParams,
  ) {
    super(semanticId, params);
    this.isVariantOf = params?.isVariantOf;
    this.hasVariantCaracteristic = params?.hasVariantCaracteristic;
    this.semanticType = Variant.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:isVariantOf", () => this.isVariantOf);
    this.registerSemanticProperty("dfc-b:hasVariantCaracteristic", () => this.hasVariantCaracteristic);
  }
  static {
    SemanticObject.typeRegistry.set(Variant.SEMANTIC_TYPE, Variant);
  }
}
