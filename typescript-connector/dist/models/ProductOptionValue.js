// Class from DFC Business Ontology: #ProductOptionValue
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
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
