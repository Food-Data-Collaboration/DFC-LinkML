// Class from DFC Business Ontology: #VariantCaracteristic
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class VariantCaracteristic extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:VariantCaracteristic";
    }
    hasProductOption;
    hasProductOptionValue;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasProductOption = params?.hasProductOption;
        this.hasProductOptionValue = params?.hasProductOptionValue;
        this.semanticType = VariantCaracteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:VariantCaracteristic:has_product_option", () => this.hasProductOption);
        this.registerSemanticProperty("dfc-b:VariantCaracteristic:has_product_option_value", () => this.hasProductOptionValue);
    }
    static {
        SemanticObject.typeRegistry.set(VariantCaracteristic.SEMANTIC_TYPE, VariantCaracteristic);
    }
}
