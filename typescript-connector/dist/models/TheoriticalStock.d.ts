import { Stock, type StockParams } from "./Stock.js";
export interface TheoriticalStockParams extends StockParams {
    constitutes?: string[];
    localizedBy?: string;
}
export declare class TheoriticalStock extends Stock {
    static get SEMANTIC_TYPE(): string;
    constitutes?: string[];
    localizedBy?: string;
    constructor(semanticId: string, params?: TheoriticalStockParams);
}
