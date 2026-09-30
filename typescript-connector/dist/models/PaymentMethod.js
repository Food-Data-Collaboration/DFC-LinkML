import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject } from "./HowSubject.js";
/**
 * A DFC `dfc-b:PaymentMethod`, serialized with `@type:
 *   dfc-b:PaymentMethod`.
 * Class hierarchy: `How_Subject` -> `PaymentMethod`.
 * Own DFC properties: paymentMethodProvider, paymentMethodType, hasPrice,
 *   paidWith.
 */
export class PaymentMethod extends HowSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PaymentMethod";
    }
    /**
     * Serializes as `dfc-b:paymentMethodProvider`.
     */
    paymentMethodProvider;
    /**
     * Serializes as `dfc-b:paymentMethodType`.
     */
    paymentMethodType;
    /**
     * The offered Price for the Product listed in the CatalogItem for this
     *   cateogry of Customer
     *
     * Serializes as `dfc-b:hasPrice`.
     */
    hasPrice;
    /**
     * Serializes as `dfc-b:paidWith`.
     */
    paidWith;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.paymentMethodProvider = params?.paymentMethodProvider;
        this.paymentMethodType = params?.paymentMethodType;
        this.hasPrice = params?.hasPrice;
        this.paidWith = params?.paidWith;
        this.semanticType = PaymentMethod.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:paymentMethodProvider", () => this.paymentMethodProvider);
        this.registerSemanticProperty("dfc-b:paymentMethodType", () => this.paymentMethodType);
        this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
        this.registerSemanticProperty("dfc-b:paidWith", () => this.paidWith);
    }
    static {
        SemanticObject.typeRegistry.set(PaymentMethod.SEMANTIC_TYPE, PaymentMethod);
    }
}
