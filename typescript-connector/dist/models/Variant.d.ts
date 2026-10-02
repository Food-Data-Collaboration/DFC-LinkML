import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { VariantCaracteristic } from "./VariantCaracteristic.js";
/**
 * Constructor parameters for {@link Variant}.
 *
 * Own DFC properties: isVariantOf, hasVariantCaracteristic.
 *
 * Inherited parameters come from {@link DefinedProductParams}.
 */
export interface VariantParams extends DefinedProductParams {
    /**
     * Serializes as `dfc-b:isVariantOf`.
     */
    isVariantOf?: string[];
    /**
     * Serializes as `dfc-b:hasVariantCaracteristic`.
     */
    hasVariantCaracteristic?: (VariantCaracteristic | string)[];
}
/**
 * A DFC `dfc-b:Variant`, serialized with `@type: dfc-b:Variant`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` -> `Variant`.
 * Own DFC properties: isVariantOf, hasVariantCaracteristic.
 */
export declare class Variant extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:isVariantOf`.
     */
    isVariantOf?: string[];
    /**
     * Serializes as `dfc-b:hasVariantCaracteristic`.
     */
    hasVariantCaracteristic?: (VariantCaracteristic | string)[];
    constructor(semanticId: string, params?: VariantParams);
}
