import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SaleSession } from "./SaleSession.js";
export interface ShippingOptionParams extends HowSubjectParams {
    endDate?: string;
    fee?: number;
    quantity?: number;
    startDate?: string;
    selectedBy?: string;
    hasQuantity?: QuantitativeValue | string;
    optionOf?: SaleSession | string;
}
export declare class ShippingOption extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    fee?: number;
    quantity?: number;
    startDate?: string;
    selectedBy?: string;
    hasQuantity?: QuantitativeValue | string;
    optionOf?: SaleSession | string;
    constructor(semanticId: string, params?: ShippingOptionParams);
}
