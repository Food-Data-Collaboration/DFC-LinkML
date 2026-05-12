import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
export interface PlaceParams extends WhereSubjectParams {
    hosts?: string[];
}
export declare class Place extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    hosts?: string[];
    constructor(semanticId: string, params?: PlaceParams);
}
