import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface ProductionFlowParams {
    quantity?: number;
    outputOf?: string;
    produces?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class ProductionFlow extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    quantity?: number;
    outputOf?: string;
    produces?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: ProductionFlowParams);
}
