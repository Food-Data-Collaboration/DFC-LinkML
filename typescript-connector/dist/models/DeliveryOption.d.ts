import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";
export interface DeliveryOptionParams extends ShippingOptionParams {
    accessibilityInfo?: string;
    deliveryConstraint?: string;
    deliveredAt?: string;
    refersTo?: string;
    uses?: string[];
}
export declare class DeliveryOption extends ShippingOption {
    static get SEMANTIC_TYPE(): string;
    accessibilityInfo?: string;
    deliveryConstraint?: string;
    deliveredAt?: string;
    refersTo?: string;
    uses?: string[];
    constructor(semanticId: string, params?: DeliveryOptionParams);
}
