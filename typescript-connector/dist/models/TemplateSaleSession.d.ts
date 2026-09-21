import { SemanticObject } from "../core/SemanticObject.js";
import type { Place } from "./Place.js";
export interface TemplateSaleSessionParams {
    isTemplateSaleSessionOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hostedAt?: Place | string;
}
export declare class TemplateSaleSession extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    isTemplateSaleSessionOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hostedAt?: Place | string;
    constructor(semanticId: string, params?: TemplateSaleSessionParams);
}
