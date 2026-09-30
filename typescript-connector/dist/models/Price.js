import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * A DFC `dfc-b:Price`, serialized with `@type: dfc-b:Price`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Price`.
 * Own DFC properties: vatRate, isPriceOf.
 */
export class Price extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Price";
    }
    /**
     * The Sales Tax (VAT) rate associated with the Price, given as a
     *   percentage value from 0-100
     *
     * Serializes as `dfc-b:VATrate`.
     */
    vatRate;
    /**
     * The Object that the Price relates to, can be an Offer, a PaymentMethod
     *   or a Transaction
     *
     * Serializes as `dfc-b:isPriceOf`.
     */
    isPriceOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.vatRate = params?.vatRate;
        this.isPriceOf = params?.isPriceOf;
        this.semanticType = Price.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:VATrate", () => this.vatRate);
        this.registerSemanticProperty("dfc-b:isPriceOf", () => this.isPriceOf);
    }
    static {
        SemanticObject.typeRegistry.set(Price.SEMANTIC_TYPE, Price);
    }
}
