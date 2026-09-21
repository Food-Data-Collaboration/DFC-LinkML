import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { Agent } from "./Agent.js";
export interface BrandParams extends WhatSubjectParams {
    brandOf?: string;
    ownedBy?: Agent | string;
}
export declare class Brand extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    brandOf?: string;
    ownedBy?: Agent | string;
    constructor(semanticId: string, params?: BrandParams);
}
