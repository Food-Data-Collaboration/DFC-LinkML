import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
export interface PriceParams extends QuantitativeValueParams {
    vatRate?: number;
    isPriceOf?: string;
}
export declare class Price extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    vatRate?: number;
    isPriceOf?: string;
    constructor(semanticId: string, params?: PriceParams);
}
