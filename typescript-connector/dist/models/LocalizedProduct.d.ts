import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface LocalizedProductParams extends WhatSubjectParams {
    image?: string;
    cost?: number;
    quantity?: number;
    constituedBy?: string;
    consumedBy?: string;
    hasReference?: string;
    producedBy?: string;
    representedBy?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class LocalizedProduct extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    image?: string;
    cost?: number;
    quantity?: number;
    constituedBy?: string;
    consumedBy?: string;
    hasReference?: string;
    producedBy?: string;
    representedBy?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: LocalizedProductParams);
}
