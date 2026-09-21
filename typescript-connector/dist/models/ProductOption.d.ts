import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";
export interface ProductOptionParams extends WhatSubjectParams {
    hasReferenceProductOptionValue?: ProductOptionValue | string;
}
export declare class ProductOption extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    hasReferenceProductOptionValue?: ProductOptionValue | string;
    constructor(semanticId: string, params?: ProductOptionParams);
}
