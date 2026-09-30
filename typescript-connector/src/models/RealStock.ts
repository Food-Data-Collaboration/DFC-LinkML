import { SemanticObject } from "../core/SemanticObject.js";
import { Stock, type StockParams } from "./Stock.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
import type { ProductBatch } from "./ProductBatch.js";

/**
 * Constructor parameters for {@link RealStock}.
 *
 * Own DFC properties: constitutes, identifiedBy, storedIn.
 *
 * Inherited parameters come from {@link StockParams}.
 */
export interface RealStockParams extends StockParams {
  /**
   * Serializes as `dfc-b:constitutes`.
   */
  constitutes?: string[];
  /**
   * Serializes as `dfc-b:identifiedBy`.
   */
  identifiedBy?: ProductBatch | string;
  /**
   * Serializes as `dfc-b:storedIn`.
   */
  storedIn?: PhysicalPlace | string;
}

/**
 * A DFC `dfc-b:RealStock`, serialized with `@type: dfc-b:RealStock`.
 * Class hierarchy: `Stock` -> `RealStock`.
 * Own DFC properties: constitutes, identifiedBy, storedIn.
 */
export class RealStock extends Stock {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:RealStock";
  }

  /**
   * Serializes as `dfc-b:constitutes`.
   */
  constitutes?: string[];
  /**
   * Serializes as `dfc-b:identifiedBy`.
   */
  identifiedBy?: ProductBatch | string;
  /**
   * Serializes as `dfc-b:storedIn`.
   */
  storedIn?: PhysicalPlace | string;

  constructor(
    semanticId: string,
    params?: RealStockParams,
  ) {
    super(semanticId, params);
    this.constitutes = params?.constitutes;
    this.identifiedBy = params?.identifiedBy;
    this.storedIn = params?.storedIn;
    this.semanticType = RealStock.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:constitutes", () => this.constitutes);
    this.registerSemanticProperty("dfc-b:identifiedBy", () => this.identifiedBy);
    this.registerSemanticProperty("dfc-b:storedIn", () => this.storedIn);
  }
  static {
    SemanticObject.typeRegistry.set(RealStock.SEMANTIC_TYPE, RealStock);
  }
}
