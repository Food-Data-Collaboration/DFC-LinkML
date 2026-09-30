import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject } from "./HowSubject.js";
/**
 * A DFC `dfc-b:ShippingOption`, serialized with `@type:
 *   dfc-b:ShippingOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption`.
 * Own DFC properties: endDate, fee, quantity, startDate, selectedBy,
 *   hasQuantity, optionOf.
 */
export class ShippingOption extends HowSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ShippingOption";
    }
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate;
    /**
     * The value of any fee associated with the Shipping Option
     *
     * Serializes as `dfc-b:fee`.
     */
    fee;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate;
    /**
     * Serializes as `dfc-b:selectedBy`.
     */
    selectedBy;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity;
    /**
     * All Sales Sessions the ShippingOption is available for selection
     *   during.
     *
     * Serializes as `dfc-b:optionOf`.
     */
    optionOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.endDate = params?.endDate;
        this.fee = params?.fee;
        this.quantity = params?.quantity;
        this.startDate = params?.startDate;
        this.selectedBy = params?.selectedBy;
        this.hasQuantity = params?.hasQuantity;
        this.optionOf = params?.optionOf;
        this.semanticType = ShippingOption.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
        this.registerSemanticProperty("dfc-b:fee", () => this.fee);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
        this.registerSemanticProperty("dfc-b:selectedBy", () => this.selectedBy);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
        this.registerSemanticProperty("dfc-b:optionOf", () => this.optionOf);
    }
    static {
        SemanticObject.typeRegistry.set(ShippingOption.SEMANTIC_TYPE, ShippingOption);
    }
}
