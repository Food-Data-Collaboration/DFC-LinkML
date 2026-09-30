import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct } from "./DefinedProduct.js";
/**
 * A DFC `dfc-b:TechnicalProduct`, serialized with `@type:
 *   dfc-b:TechnicalProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` ->
 *   `TechnicalProduct`.
 * Own DFC properties: industrializedBy, proposedBy, satisfies.
 */
export class TechnicalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE() {
        return "dfc-b:TechnicalProduct";
    }
    /**
     * Serializes as `dfc-b:industrializedBy`.
     */
    industrializedBy;
    /**
     * Serializes as `dfc-b:proposedBy`.
     */
    proposedBy;
    /**
     * Serializes as `dfc-b:satisfies`.
     */
    satisfies;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.industrializedBy = params?.industrializedBy;
        this.proposedBy = params?.proposedBy;
        this.satisfies = params?.satisfies;
        this.semanticType = TechnicalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:industrializedBy", () => this.industrializedBy);
        this.registerSemanticProperty("dfc-b:proposedBy", () => this.proposedBy);
        this.registerSemanticProperty("dfc-b:satisfies", () => this.satisfies);
    }
    static {
        SemanticObject.typeRegistry.set(TechnicalProduct.SEMANTIC_TYPE, TechnicalProduct);
    }
}
