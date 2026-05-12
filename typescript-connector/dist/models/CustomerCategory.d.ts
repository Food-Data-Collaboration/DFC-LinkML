import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
export interface CustomerCategoryParams extends WhoSubjectParams {
    definedBy?: string;
    hasMember?: string;
    hasOffer?: string;
}
export declare class CustomerCategory extends WhoSubject {
    static get SEMANTIC_TYPE(): string;
    definedBy?: string;
    hasMember?: string;
    hasOffer?: string;
    constructor(semanticId: string, params?: CustomerCategoryParams);
}
