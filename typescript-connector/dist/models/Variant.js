import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct } from "./DefinedProduct.js";
/**
 * A DFC `dfc-b:Variant`, serialized with `@type: dfc-b:Variant`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` -> `Variant`.
 * Own DFC properties: isVariantOf, hasVariantCaracteristic.
 */
export class Variant extends DefinedProduct {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Variant";
    }
    /**
     * Serializes as `dfc-b:isVariantOf`.
     */
    isVariantOf;
    /**
     * Serializes as `dfc-b:hasVariantCaracteristic`.
     */
    hasVariantCaracteristic;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.isVariantOf = params?.isVariantOf;
        this.hasVariantCaracteristic = params?.hasVariantCaracteristic;
        this.semanticType = Variant.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:isVariantOf", () => this.isVariantOf);
        this.registerSemanticProperty("dfc-b:hasVariantCaracteristic", () => this.hasVariantCaracteristic);
    }
    static {
        SemanticObject.typeRegistry.set(Variant.SEMANTIC_TYPE, Variant);
    }
}
