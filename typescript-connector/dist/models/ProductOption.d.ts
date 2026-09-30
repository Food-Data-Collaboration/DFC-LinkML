import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";
/**
 * Constructor parameters for {@link ProductOption}.
 *
 * Own DFC properties: hasReferenceProductOptionValue.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface ProductOptionParams extends WhatSubjectParams {
    /**
     * Serializes as `dfc-b:hasReferenceProductOptionValue`.
     */
    hasReferenceProductOptionValue?: ProductOptionValue | string;
}
/**
 * A DFC `dfc-b:ProductOption`, serialized with `@type:
 *   dfc-b:ProductOption`.
 * Class hierarchy: `What_Subject` -> `ProductOption`.
 * Own DFC properties: hasReferenceProductOptionValue.
 */
export declare class ProductOption extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:hasReferenceProductOptionValue`.
     */
    hasReferenceProductOptionValue?: ProductOptionValue | string;
    constructor(semanticId: string, params?: ProductOptionParams);
}
