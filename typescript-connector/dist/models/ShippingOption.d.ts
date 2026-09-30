import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SaleSession } from "./SaleSession.js";
/**
 * Constructor parameters for {@link ShippingOption}.
 *
 * Own DFC properties: endDate, fee, quantity, startDate, selectedBy,
 *   hasQuantity, optionOf.
 *
 * Inherited parameters come from {@link HowSubjectParams}.
 */
export interface ShippingOptionParams extends HowSubjectParams {
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate?: string;
    /**
     * The value of any fee associated with the Shipping Option
     *
     * Serializes as `dfc-b:fee`.
     */
    fee?: number;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate?: string;
    /**
     * Serializes as `dfc-b:selectedBy`.
     */
    selectedBy?: string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * All Sales Sessions the ShippingOption is available for selection
     *   during.
     *
     * Serializes as `dfc-b:optionOf`.
     */
    optionOf?: SaleSession | string;
}
/**
 * A DFC `dfc-b:ShippingOption`, serialized with `@type:
 *   dfc-b:ShippingOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption`.
 * Own DFC properties: endDate, fee, quantity, startDate, selectedBy,
 *   hasQuantity, optionOf.
 */
export declare class ShippingOption extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate?: string;
    /**
     * The value of any fee associated with the Shipping Option
     *
     * Serializes as `dfc-b:fee`.
     */
    fee?: number;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate?: string;
    /**
     * Serializes as `dfc-b:selectedBy`.
     */
    selectedBy?: string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * All Sales Sessions the ShippingOption is available for selection
     *   during.
     *
     * Serializes as `dfc-b:optionOf`.
     */
    optionOf?: SaleSession | string;
    constructor(semanticId: string, params?: ShippingOptionParams);
}
