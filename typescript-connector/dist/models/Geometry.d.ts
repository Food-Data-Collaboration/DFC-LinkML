import { SemanticObject } from "../core/SemanticObject.js";
export interface GeometryParams {
    coordinates?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Geometry extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    coordinates?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: GeometryParams);
}
