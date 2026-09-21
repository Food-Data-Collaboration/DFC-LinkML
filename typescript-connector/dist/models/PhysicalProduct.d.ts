import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { Agent } from "./Agent.js";
import type { LocalizedProduct } from "./LocalizedProduct.js";
import type { ProductBatch } from "./ProductBatch.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface PhysicalProductParams extends WhatSubjectParams {
    image?: string;
    quantity?: number;
    concernedBy?: string;
    constituedBy?: string;
    consumedBy?: string;
    fulfills?: string[];
    producedBy?: string;
    hasQuantity?: QuantitativeValue | string;
    ownedBy?: Agent | string;
    represents?: (LocalizedProduct | string)[];
    tracedBy?: ProductBatch | string;
}
export declare class PhysicalProduct extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    image?: string;
    quantity?: number;
    concernedBy?: string;
    constituedBy?: string;
    consumedBy?: string;
    fulfills?: string[];
    producedBy?: string;
    hasQuantity?: QuantitativeValue | string;
    ownedBy?: Agent | string;
    represents?: (LocalizedProduct | string)[];
    tracedBy?: ProductBatch | string;
    constructor(semanticId: string, params?: PhysicalProductParams);
}
