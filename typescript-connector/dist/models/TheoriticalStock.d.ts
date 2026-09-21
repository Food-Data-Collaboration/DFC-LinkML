import { Stock, type StockParams } from "./Stock.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
export interface TheoriticalStockParams extends StockParams {
    constitutes?: string[];
    localizedBy?: PhysicalPlace | string;
}
export declare class TheoriticalStock extends Stock {
    static get SEMANTIC_TYPE(): string;
    constitutes?: string[];
    localizedBy?: PhysicalPlace | string;
    constructor(semanticId: string, params?: TheoriticalStockParams);
}
