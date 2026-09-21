import { SemanticObject } from "../core/SemanticObject.js";
import type { Coordination } from "./Coordination.js";
import type { Place } from "./Place.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { ShippingOption } from "./ShippingOption.js";
export interface SaleSessionParams {
    endDate?: string;
    quantity?: number;
    startDate?: string;
    holds?: string[];
    lists?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasOption?: ShippingOption | string;
    hasQuantity?: QuantitativeValue | string;
    hostedAt?: Place | string;
    objectOf?: Coordination | string;
}
export declare class SaleSession extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    quantity?: number;
    startDate?: string;
    holds?: string[];
    lists?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasOption?: ShippingOption | string;
    hasQuantity?: QuantitativeValue | string;
    hostedAt?: Place | string;
    objectOf?: Coordination | string;
    constructor(semanticId: string, params?: SaleSessionParams);
}
