import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
export interface VolumeParams extends QuantitativeValueParams {
}
export declare class Volume extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: VolumeParams);
}
