import { SemanticObject } from "../core/SemanticObject.js";
export interface PriceParams {
    vatRate?: number;
    isPriceOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Price extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    vatRate?: number;
    isPriceOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: PriceParams);
}
