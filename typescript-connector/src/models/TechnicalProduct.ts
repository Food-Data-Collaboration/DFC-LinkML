import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { FunctionalProduct } from "./FunctionalProduct.js";
import type { Organization } from "./Organization.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";

/**
 * Constructor parameters for {@link TechnicalProduct}.
 *
 * Own DFC properties: industrializedBy, proposedBy, satisfies.
 *
 * Inherited parameters come from {@link DefinedProductParams}.
 */
export interface TechnicalProductParams extends DefinedProductParams {
  /**
   * Serializes as `dfc-b:industrializedBy`.
   */
  industrializedBy?: SuppliedProduct | string;
  /**
   * Serializes as `dfc-b:proposedBy`.
   */
  proposedBy?: Organization | string;
  /**
   * Serializes as `dfc-b:satisfies`.
   */
  satisfies?: (FunctionalProduct | string)[];
}

/**
 * A DFC `dfc-b:TechnicalProduct`, serialized with `@type:
 *   dfc-b:TechnicalProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` ->
 *   `TechnicalProduct`.
 * Own DFC properties: industrializedBy, proposedBy, satisfies.
 */
export class TechnicalProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:TechnicalProduct";
  }

  /**
   * Serializes as `dfc-b:industrializedBy`.
   */
  industrializedBy?: SuppliedProduct | string;
  /**
   * Serializes as `dfc-b:proposedBy`.
   */
  proposedBy?: Organization | string;
  /**
   * Serializes as `dfc-b:satisfies`.
   */
  satisfies?: (FunctionalProduct | string)[];

  constructor(
    semanticId: string,
    params?: TechnicalProductParams,
  ) {
    super(semanticId, params);
    this.industrializedBy = params?.industrializedBy;
    this.proposedBy = params?.proposedBy;
    this.satisfies = params?.satisfies;
    this.semanticType = TechnicalProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:industrializedBy", () => this.industrializedBy);
    this.registerSemanticProperty("dfc-b:proposedBy", () => this.proposedBy);
    this.registerSemanticProperty("dfc-b:satisfies", () => this.satisfies);
  }
  static {
    SemanticObject.typeRegistry.set(TechnicalProduct.SEMANTIC_TYPE, TechnicalProduct);
  }
}
