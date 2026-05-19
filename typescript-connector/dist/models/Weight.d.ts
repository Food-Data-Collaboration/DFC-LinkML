import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
export interface WeightParams extends QuantitativeValueParams {
}
export declare class Weight extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: WeightParams);
}
