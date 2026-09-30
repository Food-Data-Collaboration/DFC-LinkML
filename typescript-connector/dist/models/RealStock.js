import { SemanticObject } from "../core/SemanticObject.js";
import { Stock } from "./Stock.js";
/**
 * A DFC `dfc-b:RealStock`, serialized with `@type: dfc-b:RealStock`.
 * Class hierarchy: `Stock` -> `RealStock`.
 * Own DFC properties: constitutes, identifiedBy, storedIn.
 */
export class RealStock extends Stock {
    static get SEMANTIC_TYPE() {
        return "dfc-b:RealStock";
    }
    /**
     * Serializes as `dfc-b:constitutes`.
     */
    constitutes;
    /**
     * Serializes as `dfc-b:identifiedBy`.
     */
    identifiedBy;
    /**
     * Serializes as `dfc-b:storedIn`.
     */
    storedIn;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.constitutes = params?.constitutes;
        this.identifiedBy = params?.identifiedBy;
        this.storedIn = params?.storedIn;
        this.semanticType = RealStock.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:constitutes", () => this.constitutes);
        this.registerSemanticProperty("dfc-b:identifiedBy", () => this.identifiedBy);
        this.registerSemanticProperty("dfc-b:storedIn", () => this.storedIn);
    }
    static {
        SemanticObject.typeRegistry.set(RealStock.SEMANTIC_TYPE, RealStock);
    }
}
