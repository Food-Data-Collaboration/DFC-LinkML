import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";
import type { Address } from "./Address.js";
export interface DeliveryOptionParams extends ShippingOptionParams {
    accessibilityInfo?: string;
    deliveryConstraint?: string;
    deliveredAt?: string;
    uses?: string[];
    refersTo?: Address | string;
}
export declare class DeliveryOption extends ShippingOption {
    static get SEMANTIC_TYPE(): string;
    accessibilityInfo?: string;
    deliveryConstraint?: string;
    deliveredAt?: string;
    uses?: string[];
    refersTo?: Address | string;
    constructor(semanticId: string, params?: DeliveryOptionParams);
}
