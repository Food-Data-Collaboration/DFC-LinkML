import { SemanticObject } from "../core/SemanticObject.js";
export interface TemplateSaleSessionParams {
    hostedAt?: string;
    isTemplateSaleSessionOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class TemplateSaleSession extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    hostedAt?: string;
    isTemplateSaleSessionOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: TemplateSaleSessionParams);
}
