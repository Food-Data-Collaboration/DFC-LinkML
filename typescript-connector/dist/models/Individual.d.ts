import { SemanticObject } from "../core/SemanticObject.js";
export interface IndividualParams {
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Individual extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: IndividualParams);
}
