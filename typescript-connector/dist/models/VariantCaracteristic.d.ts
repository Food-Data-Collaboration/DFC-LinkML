import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOption } from "./ProductOption.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";
export interface VariantCaracteristicParams extends WhatSubjectParams {
    hasProductOption?: ProductOption | string;
    hasProductOptionValue?: ProductOptionValue | string;
}
export declare class VariantCaracteristic extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    hasProductOption?: ProductOption | string;
    hasProductOptionValue?: ProductOptionValue | string;
    constructor(semanticId: string, params?: VariantCaracteristicParams);
}
