import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:VariantCaracteristic`, serialized with `@type:
 *   dfc-b:VariantCaracteristic`.
 * Class hierarchy: `What_Subject` -> `VariantCaracteristic`.
 * Own DFC properties: hasProductOption, hasProductOptionValue.
 */
export class VariantCaracteristic extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:VariantCaracteristic";
    }
    /**
     * Serializes as `dfc-b:hasProductOption`.
     */
    hasProductOption;
    /**
     * Serializes as `dfc-b:hasProductOptionValue`.
     */
    hasProductOptionValue;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasProductOption = params?.hasProductOption;
        this.hasProductOptionValue = params?.hasProductOptionValue;
        this.semanticType = VariantCaracteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:hasProductOption", () => this.hasProductOption);
        this.registerSemanticProperty("dfc-b:hasProductOptionValue", () => this.hasProductOptionValue);
    }
    static {
        SemanticObject.typeRegistry.set(VariantCaracteristic.SEMANTIC_TYPE, VariantCaracteristic);
    }
}
