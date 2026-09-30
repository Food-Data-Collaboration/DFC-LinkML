import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
/**
 * Constructor parameters for {@link ProductOptionValue}.
 */
export interface ProductOptionValueParams extends WhatSubjectParams {
}
/**
 * A DFC `dfc-b:ProductOptionValue`, serialized with `@type:
 *   dfc-b:ProductOptionValue`.
 * Class hierarchy: `What_Subject` -> `ProductOptionValue`.
 */
export declare class ProductOptionValue extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: ProductOptionValueParams);
}
