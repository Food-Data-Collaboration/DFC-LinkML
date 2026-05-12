import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
export interface BrandParams extends WhatSubjectParams {
    brandOf?: string;
    ownedBy?: string;
}
export declare class Brand extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    brandOf?: string;
    ownedBy?: string;
    constructor(semanticId: string, params?: BrandParams);
}
