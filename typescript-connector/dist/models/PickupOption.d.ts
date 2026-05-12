import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";
export interface PickupOptionParams extends ShippingOptionParams {
    pickedUpAt?: string;
    uses?: string[];
}
export declare class PickupOption extends ShippingOption {
    static get SEMANTIC_TYPE(): string;
    pickedUpAt?: string;
    uses?: string[];
    constructor(semanticId: string, params?: PickupOptionParams);
}
