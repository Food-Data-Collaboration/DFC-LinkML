import { SemanticObject } from "../core/SemanticObject.js";
import { Stock, type StockParams } from "./Stock.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";

/**
 * Constructor parameters for {@link TheoriticalStock}.
 *
 * Own DFC properties: constitutes, localizedBy.
 *
 * Inherited parameters come from {@link StockParams}.
 */
export interface TheoriticalStockParams extends StockParams {
  /**
   * Serializes as `dfc-b:constitutes`.
   */
  constitutes?: string[];
  /**
   * Serializes as `dfc-b:localizedBy`.
   */
  localizedBy?: PhysicalPlace | string;
}

/**
 * A DFC `dfc-b:TheoriticalStock`, serialized with `@type:
 *   dfc-b:TheoriticalStock`.
 * Class hierarchy: `Stock` -> `TheoriticalStock`.
 * Own DFC properties: constitutes, localizedBy.
 */
export class TheoriticalStock extends Stock {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:TheoriticalStock";
  }

  /**
   * Serializes as `dfc-b:constitutes`.
   */
  constitutes?: string[];
  /**
   * Serializes as `dfc-b:localizedBy`.
   */
  localizedBy?: PhysicalPlace | string;

  constructor(
    semanticId: string,
    params?: TheoriticalStockParams,
  ) {
    super(semanticId, params);
    this.constitutes = params?.constitutes;
    this.localizedBy = params?.localizedBy;
    this.semanticType = TheoriticalStock.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:constitutes", () => this.constitutes);
    this.registerSemanticProperty("dfc-b:localizedBy", () => this.localizedBy);
  }
  static {
    SemanticObject.typeRegistry.set(TheoriticalStock.SEMANTIC_TYPE, TheoriticalStock);
  }
}
