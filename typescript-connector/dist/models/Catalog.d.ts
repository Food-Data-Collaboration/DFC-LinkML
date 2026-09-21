import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Organization } from "./Organization.js";
export interface CatalogParams extends WhereSubjectParams {
    endDate?: string;
    startDate?: string;
    lists?: string[];
    maintainedBy?: Organization | string;
}
export declare class Catalog extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    startDate?: string;
    lists?: string[];
    maintainedBy?: Organization | string;
    constructor(semanticId: string, params?: CatalogParams);
}
