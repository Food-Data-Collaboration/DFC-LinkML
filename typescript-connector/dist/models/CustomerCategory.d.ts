import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
import type { Organization } from "./Organization.js";
export interface CustomerCategoryParams extends WhoSubjectParams {
    hasMember?: string;
    hasOffer?: string;
    definedBy?: Organization | string;
}
export declare class CustomerCategory extends WhoSubject {
    static get SEMANTIC_TYPE(): string;
    hasMember?: string;
    hasOffer?: string;
    definedBy?: Organization | string;
    constructor(semanticId: string, params?: CustomerCategoryParams);
}
