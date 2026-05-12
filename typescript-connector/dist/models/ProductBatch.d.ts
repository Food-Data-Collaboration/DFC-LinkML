import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
export interface ProductBatchParams extends WhatSubjectParams {
    batchNumber?: string;
    bestBeforeDate?: string;
    expiryDate?: string;
    productionDate?: string;
    identifies?: string[];
    traces?: string[];
}
export declare class ProductBatch extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    batchNumber?: string;
    bestBeforeDate?: string;
    expiryDate?: string;
    productionDate?: string;
    identifies?: string[];
    traces?: string[];
    constructor(semanticId: string, params?: ProductBatchParams);
}
