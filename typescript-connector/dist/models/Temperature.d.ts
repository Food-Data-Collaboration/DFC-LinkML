import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
export interface TemperatureParams extends QuantitativeValueParams {
    isTemperatureOf?: string;
}
export declare class Temperature extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    isTemperatureOf?: string;
    constructor(semanticId: string, params?: TemperatureParams);
}
