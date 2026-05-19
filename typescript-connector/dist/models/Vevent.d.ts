import { SemanticObject } from "../core/SemanticObject.js";
import type { ValueRECUR } from "./ValueRECUR.js";
export interface VeventParams {
    dtend?: string;
    dtstart?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    rrule?: ValueRECUR;
}
export declare class Vevent extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    dtend?: string;
    dtstart?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    rrule?: ValueRECUR;
    constructor(semanticId: string, params?: VeventParams);
}
