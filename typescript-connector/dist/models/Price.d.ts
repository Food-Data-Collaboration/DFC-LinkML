import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Price}.
 *
 * Own DFC properties: vatRate, isPriceOf.
 *
 * Inherited parameters come from {@link QuantitativeValueParams}.
 */
export interface PriceParams extends QuantitativeValueParams {
    /**
     * The Sales Tax (VAT) rate associated with the Price, given as a
     *   percentage value from 0-100
     *
     * Serializes as `dfc-b:VATrate`.
     */
    vatRate?: number;
    /**
     * The Object that the Price relates to, can be an Offer, a PaymentMethod
     *   or a Transaction
     *
     * Serializes as `dfc-b:isPriceOf`.
     */
    isPriceOf?: string;
}
/**
 * A DFC `dfc-b:Price`, serialized with `@type: dfc-b:Price`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Price`.
 * Own DFC properties: vatRate, isPriceOf.
 */
export declare class Price extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    /**
     * The Sales Tax (VAT) rate associated with the Price, given as a
     *   percentage value from 0-100
     *
     * Serializes as `dfc-b:VATrate`.
     */
    vatRate?: number;
    /**
     * The Object that the Price relates to, can be an Offer, a PaymentMethod
     *   or a Transaction
     *
     * Serializes as `dfc-b:isPriceOf`.
     */
    isPriceOf?: string;
    constructor(semanticId: string, params?: PriceParams);
}
