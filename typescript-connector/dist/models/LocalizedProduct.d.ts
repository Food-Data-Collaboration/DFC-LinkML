import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { PhysicalProduct } from "./PhysicalProduct.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";
export interface LocalizedProductParams extends WhatSubjectParams {
    image?: string;
    cost?: number;
    quantity?: number;
    constituedBy?: string;
    consumedBy?: string;
    producedBy?: string;
    hasQuantity?: QuantitativeValue | string;
    hasReference?: SuppliedProduct | string;
    representedBy?: PhysicalProduct | string;
}
export declare class LocalizedProduct extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    image?: string;
    cost?: number;
    quantity?: number;
    constituedBy?: string;
    consumedBy?: string;
    producedBy?: string;
    hasQuantity?: QuantitativeValue | string;
    hasReference?: SuppliedProduct | string;
    representedBy?: PhysicalProduct | string;
    constructor(semanticId: string, params?: LocalizedProductParams);
}
