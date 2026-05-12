import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface StockParams {
    availabilityDate?: string;
    quantity?: number;
    transportedBy?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class Stock extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    availabilityDate?: string;
    quantity?: number;
    transportedBy?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: StockParams);
}
