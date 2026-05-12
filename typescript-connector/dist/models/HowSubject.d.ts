import { SemanticObject } from "../core/SemanticObject.js";
export interface HowSubjectParams {
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class HowSubject extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: HowSubjectParams);
}
