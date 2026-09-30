import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOption } from "./ProductOption.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";
/**
 * Constructor parameters for {@link VariantCaracteristic}.
 *
 * Own DFC properties: hasProductOption, hasProductOptionValue.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface VariantCaracteristicParams extends WhatSubjectParams {
    /**
     * Serializes as `dfc-b:hasProductOption`.
     */
    hasProductOption?: ProductOption | string;
    /**
     * Serializes as `dfc-b:hasProductOptionValue`.
     */
    hasProductOptionValue?: ProductOptionValue | string;
}
/**
 * A DFC `dfc-b:VariantCaracteristic`, serialized with `@type:
 *   dfc-b:VariantCaracteristic`.
 * Class hierarchy: `What_Subject` -> `VariantCaracteristic`.
 * Own DFC properties: hasProductOption, hasProductOptionValue.
 */
export declare class VariantCaracteristic extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:hasProductOption`.
     */
    hasProductOption?: ProductOption | string;
    /**
     * Serializes as `dfc-b:hasProductOptionValue`.
     */
    hasProductOptionValue?: ProductOptionValue | string;
    constructor(semanticId: string, params?: VariantCaracteristicParams);
}
