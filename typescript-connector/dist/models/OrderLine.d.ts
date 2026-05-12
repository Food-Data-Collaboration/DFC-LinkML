import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface OrderLineParams {
    discount?: number;
    quantity?: number;
    concerns?: string[];
    hasPrice?: string;
    isFulfilledBy?: string;
    partOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class OrderLine extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    discount?: number;
    quantity?: number;
    concerns?: string[];
    hasPrice?: string;
    isFulfilledBy?: string;
    partOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: OrderLineParams);
}
