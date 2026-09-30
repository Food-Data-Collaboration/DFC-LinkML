import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { Agent } from "./Agent.js";
import type { TechnicalProduct } from "./TechnicalProduct.js";

/**
 * Constructor parameters for {@link FunctionalProduct}.
 *
 * Own DFC properties: requestedBy, satisfiedBy.
 *
 * Inherited parameters come from {@link DefinedProductParams}.
 */
export interface FunctionalProductParams extends DefinedProductParams {
  /**
   * Serializes as `dfc-b:requestedBy`.
   */
  requestedBy?: Agent | string;
  /**
   * Serializes as `dfc-b:satisfiedBy`.
   */
  satisfiedBy?: TechnicalProduct | string;
}

/**
 * A DFC `dfc-b:FunctionalProduct`, serialized with `@type:
 *   dfc-b:FunctionalProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` ->
 *   `FunctionalProduct`.
 * Own DFC properties: requestedBy, satisfiedBy.
 */
export class FunctionalProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:FunctionalProduct";
  }

  /**
   * Serializes as `dfc-b:requestedBy`.
   */
  requestedBy?: Agent | string;
  /**
   * Serializes as `dfc-b:satisfiedBy`.
   */
  satisfiedBy?: TechnicalProduct | string;

  constructor(
    semanticId: string,
    params?: FunctionalProductParams,
  ) {
    super(semanticId, params);
    this.requestedBy = params?.requestedBy;
    this.satisfiedBy = params?.satisfiedBy;
    this.semanticType = FunctionalProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:requestedBy", () => this.requestedBy);
    this.registerSemanticProperty("dfc-b:satisfiedBy", () => this.satisfiedBy);
  }
  static {
    SemanticObject.typeRegistry.set(FunctionalProduct.SEMANTIC_TYPE, FunctionalProduct);
  }
}
