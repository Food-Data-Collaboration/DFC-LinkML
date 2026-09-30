import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption } from "./ShippingOption.js";
/**
 * A DFC `dfc-b:PickupOption`, serialized with `@type: dfc-b:PickupOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption` -> `PickupOption`.
 * Own DFC properties: pickedUpAt, uses.
 */
export class PickupOption extends ShippingOption {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PickupOption";
    }
    /**
     * Serializes as `dfc-b:pickedUpAt`.
     */
    pickedUpAt;
    /**
     * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
     *   be/was made to
     *
     * Serializes as `dfc-b:uses`.
     */
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
