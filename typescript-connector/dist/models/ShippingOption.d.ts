import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface ShippingOptionParams extends HowSubjectParams {
    endDate?: string;
    fee?: number;
    quantity?: number;
    startDate?: string;
    optionOf?: string;
    selectedBy?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class ShippingOption extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    fee?: number;
    quantity?: number;
    startDate?: string;
    optionOf?: string;
    selectedBy?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: ShippingOptionParams);
}
