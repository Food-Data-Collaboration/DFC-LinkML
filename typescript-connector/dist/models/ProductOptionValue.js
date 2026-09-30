import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:ProductOptionValue`, serialized with `@type:
 *   dfc-b:ProductOptionValue`.
 * Class hierarchy: `What_Subject` -> `ProductOptionValue`.
 */
export class ProductOptionValue extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ProductOptionValue";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = ProductOptionValue.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(ProductOptionValue.SEMANTIC_TYPE, ProductOptionValue);
    }
}
