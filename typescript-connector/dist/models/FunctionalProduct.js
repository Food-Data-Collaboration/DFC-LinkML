import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct } from "./DefinedProduct.js";
/**
 * A DFC `dfc-b:FunctionalProduct`, serialized with `@type:
 *   dfc-b:FunctionalProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` ->
 *   `FunctionalProduct`.
 * Own DFC properties: requestedBy, satisfiedBy.
 */
export class FunctionalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE() {
        return "dfc-b:FunctionalProduct";
    }
    /**
     * Serializes as `dfc-b:requestedBy`.
     */
    requestedBy;
    /**
     * Serializes as `dfc-b:satisfiedBy`.
     */
    satisfiedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.requestedBy = params?.requestedBy;
        this.satisfiedBy = params?.satisfiedBy;
        this.semanticType = FunctionalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:requestedBy", () => this.requestedBy);
        this.registerSemanticProperty("dfc-b:satisfiedBy", () => this.satisfiedBy);
    }
    static {
        SemanticObject.typeRegistry.set(FunctionalProduct.SEMANTIC_TYPE, FunctionalProduct);
    }
}
