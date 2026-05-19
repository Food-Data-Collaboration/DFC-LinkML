import { SemanticObject } from "../core/SemanticObject.js";
export interface ValueRECURParams {
    byday?: string;
    bymonth?: string;
    freq?: string;
    interval?: number;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class ValueRECUR extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    byday?: string;
    bymonth?: string;
    freq?: string;
    interval?: number;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: ValueRECURParams);
}
