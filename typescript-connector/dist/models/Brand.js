import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:Brand`, serialized with `@type: dfc-b:Brand`.
 * Class hierarchy: `What_Subject` -> `Brand`.
 * Own DFC properties: brandOf, ownedBy.
 */
export class Brand extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Brand";
    }
    /**
     * Serializes as `dfc-b:brandOf`.
     */
    brandOf;
    /**
     * Serializes as `dfc-b:ownedBy`.
     */
    ownedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.brandOf = params?.brandOf;
        this.ownedBy = params?.ownedBy;
        this.semanticType = Brand.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:brandOf", () => this.brandOf);
        this.registerSemanticProperty("dfc-b:ownedBy", () => this.ownedBy);
    }
    static {
        SemanticObject.typeRegistry.set(Brand.SEMANTIC_TYPE, Brand);
    }
}
