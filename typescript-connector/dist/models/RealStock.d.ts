import { Stock, type StockParams } from "./Stock.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
import type { ProductBatch } from "./ProductBatch.js";
export interface RealStockParams extends StockParams {
    constitutes?: string[];
    identifiedBy?: ProductBatch | string;
    storedIn?: PhysicalPlace | string;
}
export declare class RealStock extends Stock {
    static get SEMANTIC_TYPE(): string;
    constitutes?: string[];
    identifiedBy?: ProductBatch | string;
    storedIn?: PhysicalPlace | string;
    constructor(semanticId: string, params?: RealStockParams);
}
