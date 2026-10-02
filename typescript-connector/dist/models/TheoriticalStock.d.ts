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
    constitutes?: string;
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
export declare class TheoriticalStock extends Stock {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:constitutes`.
     */
    constitutes?: string;
    /**
     * Serializes as `dfc-b:localizedBy`.
     */
    localizedBy?: PhysicalPlace | string;
    constructor(semanticId: string, params?: TheoriticalStockParams);
}
