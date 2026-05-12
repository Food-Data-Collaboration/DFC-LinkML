import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
export interface CatalogParams extends WhereSubjectParams {
    endDate?: string;
    startDate?: string;
    lists?: string[];
    maintainedBy?: string;
}
export declare class Catalog extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    startDate?: string;
    lists?: string[];
    maintainedBy?: string;
    constructor(semanticId: string, params?: CatalogParams);
}
