import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { PhysicalProduct } from "./PhysicalProduct.js";
import type { RealStock } from "./RealStock.js";
export interface ProductBatchParams extends WhatSubjectParams {
    batchNumber?: string;
    bestBeforeDate?: string;
    expiryDate?: string;
    productionDate?: string;
    identifies?: (RealStock | string)[];
    traces?: (PhysicalProduct | string)[];
}
export declare class ProductBatch extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    batchNumber?: string;
    bestBeforeDate?: string;
    expiryDate?: string;
    productionDate?: string;
    identifies?: (RealStock | string)[];
    traces?: (PhysicalProduct | string)[];
    constructor(semanticId: string, params?: ProductBatchParams);
}
