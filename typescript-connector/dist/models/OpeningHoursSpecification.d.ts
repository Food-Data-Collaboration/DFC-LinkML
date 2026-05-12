import { SemanticObject } from "../core/SemanticObject.js";
export interface OpeningHoursSpecificationParams {
    dayOfWeek?: string;
    opens?: string[];
    closes?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class OpeningHoursSpecification extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    dayOfWeek?: string;
    opens?: string[];
    closes?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: OpeningHoursSpecificationParams);
}
