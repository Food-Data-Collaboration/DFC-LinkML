import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
export interface LengthParams extends QuantitativeValueParams {
}
export declare class Length extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: LengthParams);
}
