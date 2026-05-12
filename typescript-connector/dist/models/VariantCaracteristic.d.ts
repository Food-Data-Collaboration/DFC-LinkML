import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOption } from "./ProductOption.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";
export interface VariantCaracteristicParams extends WhatSubjectParams {
    hasProductOption?: ProductOption;
    hasProductOptionValue?: ProductOptionValue;
}
export declare class VariantCaracteristic extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    hasProductOption?: ProductOption;
    hasProductOptionValue?: ProductOptionValue;
    constructor(semanticId: string, params?: VariantCaracteristicParams);
}
