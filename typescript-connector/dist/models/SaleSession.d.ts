import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface SaleSessionParams {
    endDate?: string;
    quantity?: number;
    startDate?: string;
    hasOption?: string;
    holds?: string[];
    hostedAt?: string;
    lists?: string[];
    objectOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class SaleSession extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    quantity?: number;
    startDate?: string;
    hasOption?: string;
    holds?: string[];
    hostedAt?: string;
    lists?: string[];
    objectOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: SaleSessionParams);
}
