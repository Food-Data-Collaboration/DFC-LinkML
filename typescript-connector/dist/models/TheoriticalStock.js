import { SemanticObject } from "../core/SemanticObject.js";
import { Stock } from "./Stock.js";
/**
 * A DFC `dfc-b:TheoriticalStock`, serialized with `@type:
 *   dfc-b:TheoriticalStock`.
 * Class hierarchy: `Stock` -> `TheoriticalStock`.
 * Own DFC properties: constitutes, localizedBy.
 */
export class TheoriticalStock extends Stock {
    static get SEMANTIC_TYPE() {
        return "dfc-b:TheoriticalStock";
    }
    /**
     * Serializes as `dfc-b:constitutes`.
     */
    constitutes;
    /**
     * Serializes as `dfc-b:localizedBy`.
     */
    localizedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.constitutes = params?.constitutes;
        this.localizedBy = params?.localizedBy;
        this.semanticType = TheoriticalStock.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:constitutes", () => this.constitutes);
        this.registerSemanticProperty("dfc-b:localizedBy", () => this.localizedBy);
    }
    static {
        SemanticObject.typeRegistry.set(TheoriticalStock.SEMANTIC_TYPE, TheoriticalStock);
    }
}
