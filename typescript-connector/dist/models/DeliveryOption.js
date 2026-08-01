// Class from DFC Business Ontology: #DeliveryOption
import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption } from "./ShippingOption.js";
export class DeliveryOption extends ShippingOption {
    static get SEMANTIC_TYPE() {
        return "dfc-b:DeliveryOption";
    }
    accessibilityInfo;
    deliveryConstraint;
    deliveredAt;
    refersTo;
    uses;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.accessibilityInfo = params?.accessibilityInfo;
        this.deliveryConstraint = params?.deliveryConstraint;
        this.deliveredAt = params?.deliveredAt;
        this.refersTo = params?.refersTo;
        this.uses = params?.uses;
        this.semanticType = DeliveryOption.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:accessibilityInfo", () => this.accessibilityInfo);
        this.registerSemanticProperty("dfc-b:deliveryConstraint", () => this.deliveryConstraint);
        this.registerSemanticProperty("dfc-b:deliveredAt", () => this.deliveredAt);
        this.registerSemanticProperty("dfc-b:refersTo", () => this.refersTo);
        this.registerSemanticProperty("dfc-b:uses", () => this.uses);
    }
    static {
        SemanticObject.typeRegistry.set(DeliveryOption.SEMANTIC_TYPE, DeliveryOption);
    }
}
