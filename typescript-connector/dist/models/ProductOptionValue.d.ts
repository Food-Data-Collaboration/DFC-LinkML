import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
export interface ProductOptionValueParams extends WhatSubjectParams {
}
export declare class ProductOptionValue extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: ProductOptionValueParams);
}
