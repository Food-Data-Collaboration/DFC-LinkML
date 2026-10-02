import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";
/**
 * Constructor parameters for {@link PickupOption}.
 *
 * Own DFC properties: pickedUpAt, uses.
 *
 * Inherited parameters come from {@link ShippingOptionParams}.
 */
export interface PickupOptionParams extends ShippingOptionParams {
    /**
     * Serializes as `dfc-b:pickedUpAt`.
     */
    pickedUpAt?: string;
    /**
     * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
     *   be/was made to
     *
     * Serializes as `dfc-b:uses`.
     */
    uses?: string;
}
/**
 * A DFC `dfc-b:PickupOption`, serialized with `@type: dfc-b:PickupOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption` -> `PickupOption`.
 * Own DFC properties: pickedUpAt, uses.
 */
export declare class PickupOption extends ShippingOption {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:pickedUpAt`.
     */
    pickedUpAt?: string;
    /**
     * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
     *   be/was made to
     *
     * Serializes as `dfc-b:uses`.
     */
    uses?: string;
    constructor(semanticId: string, params?: PickupOptionParams);
}
