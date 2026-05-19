import { Stock, type StockParams } from "./Stock.js";
export interface RealStockParams extends StockParams {
    constitutes?: string[];
    identifiedBy?: string;
    storedIn?: string;
}
export declare class RealStock extends Stock {
    static get SEMANTIC_TYPE(): string;
    constitutes?: string[];
    identifiedBy?: string;
    storedIn?: string;
    constructor(semanticId: string, params?: RealStockParams);
}
