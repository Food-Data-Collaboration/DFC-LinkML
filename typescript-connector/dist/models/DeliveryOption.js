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
        this.registerSemanticProperty("dfc-b:DeliveryOption:accessibility_info", () => this.accessibilityInfo);
        this.registerSemanticProperty("dfc-b:DeliveryOption:delivery_constraint", () => this.deliveryConstraint);
        this.registerSemanticProperty("dfc-b:DeliveryOption:delivered_at", () => this.deliveredAt);
        this.registerSemanticProperty("dfc-b:DeliveryOption:refers_to", () => this.refersTo);
        this.registerSemanticProperty("dfc-b:DeliveryOption:uses", () => this.uses);
    }
    static {
        SemanticObject.typeRegistry.set(DeliveryOption.SEMANTIC_TYPE, DeliveryOption);
    }
}
