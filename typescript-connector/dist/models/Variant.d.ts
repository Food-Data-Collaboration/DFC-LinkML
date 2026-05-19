import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { VariantCaracteristic } from "./VariantCaracteristic.js";
export interface VariantParams extends DefinedProductParams {
    isVariantOf?: string;
    hasVariantCaracteristic?: VariantCaracteristic;
}
export declare class Variant extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    isVariantOf?: string;
    hasVariantCaracteristic?: VariantCaracteristic;
    constructor(semanticId: string, params?: VariantParams);
}
