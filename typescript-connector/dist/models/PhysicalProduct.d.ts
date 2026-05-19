import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface PhysicalProductParams extends WhatSubjectParams {
    image?: string;
    quantity?: number;
    concernedBy?: string;
    constituedBy?: string;
    consumedBy?: string;
    fulfills?: string[];
    ownedBy?: string;
    producedBy?: string;
    represents?: string[];
    tracedBy?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class PhysicalProduct extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    image?: string;
    quantity?: number;
    concernedBy?: string;
    constituedBy?: string;
    consumedBy?: string;
    fulfills?: string[];
    ownedBy?: string;
    producedBy?: string;
    represents?: string[];
    tracedBy?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: PhysicalProductParams);
}
