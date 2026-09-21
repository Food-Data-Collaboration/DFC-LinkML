import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { SaleSession } from "./SaleSession.js";
export interface PlaceParams extends WhereSubjectParams {
    hosts?: (SaleSession | string)[];
}
export declare class Place extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    hosts?: (SaleSession | string)[];
    constructor(semanticId: string, params?: PlaceParams);
}
