// Class from DFC Business Ontology: #PickupOption
import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption } from "./ShippingOption.js";
export class PickupOption extends ShippingOption {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PickupOption";
    }
    pickedUpAt;
    uses;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.pickedUpAt = params?.pickedUpAt;
        this.uses = params?.uses;
        this.semanticType = PickupOption.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:pickedUpAt", () => this.pickedUpAt);
        this.registerSemanticProperty("dfc-b:uses", () => this.uses);
    }
    static {
        SemanticObject.typeRegistry.set(PickupOption.SEMANTIC_TYPE, PickupOption);
    }
}
