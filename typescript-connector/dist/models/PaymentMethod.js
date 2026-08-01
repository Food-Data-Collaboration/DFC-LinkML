// Class from DFC Business Ontology: #PaymentMethod
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject } from "./HowSubject.js";
export class PaymentMethod extends HowSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PaymentMethod";
    }
    paymentMethodProvider;
    paymentMethodType;
    hasPrice;
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
