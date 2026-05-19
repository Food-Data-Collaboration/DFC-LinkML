import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface ConsumptionFlowParams {
    quantity?: number;
    consumes?: string[];
    inputOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class ConsumptionFlow extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    quantity?: number;
    consumes?: string[];
    inputOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: ConsumptionFlowParams);
}
