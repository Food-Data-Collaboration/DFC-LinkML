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
    uses;
    refersTo;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.accessibilityInfo = params?.accessibilityInfo;
        this.deliveryConstraint = params?.deliveryConstraint;
        this.deliveredAt = params?.deliveredAt;
        this.uses = params?.uses;
        this.refersTo = params?.refersTo;
        this.semanticType = DeliveryOption.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:accessibilityInfo", () => this.accessibilityInfo);
        this.registerSemanticProperty("dfc-b:deliveryConstraint", () => this.deliveryConstraint);
        this.registerSemanticProperty("dfc-b:deliveredAt", () => this.deliveredAt);
        this.registerSemanticProperty("dfc-b:uses", () => this.uses);
        this.registerSemanticProperty("dfc-b:refersTo", () => this.refersTo);
    }
    static {
        SemanticObject.typeRegistry.set(DeliveryOption.SEMANTIC_TYPE, DeliveryOption);
    }
}
