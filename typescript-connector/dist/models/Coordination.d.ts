import { SemanticObject } from "../core/SemanticObject.js";
export interface CoordinationParams {
    marginPercent?: number;
    coordinatedBy?: string;
    hasObject?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Coordination extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    marginPercent?: number;
    coordinatedBy?: string;
    hasObject?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: CoordinationParams);
}
