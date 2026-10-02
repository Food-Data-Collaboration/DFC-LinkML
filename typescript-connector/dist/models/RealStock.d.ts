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
    constitutes?: string;
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
export declare class RealStock extends Stock {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:constitutes`.
     */
    constitutes?: string;
    /**
     * Serializes as `dfc-b:identifiedBy`.
     */
    identifiedBy?: ProductBatch | string;
    /**
     * Serializes as `dfc-b:storedIn`.
     */
    storedIn?: PhysicalPlace | string;
    constructor(semanticId: string, params?: RealStockParams);
}
