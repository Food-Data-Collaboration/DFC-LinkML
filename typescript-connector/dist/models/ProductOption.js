// Class from DFC Business Ontology: #ProductOption
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class ProductOption extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ProductOption";
    }
    hasReferenceProductOptionValue;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasReferenceProductOptionValue = params?.hasReferenceProductOptionValue;
        this.semanticType = ProductOption.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:ProductOption:has_reference_product_option_value", () => this.hasReferenceProductOptionValue);
    }
    static {
        SemanticObject.typeRegistry.set(ProductOption.SEMANTIC_TYPE, ProductOption);
    }
}
