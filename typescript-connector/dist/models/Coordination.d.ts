import { SemanticObject } from "../core/SemanticObject.js";
import type { Organization } from "./Organization.js";
import type { SaleSession } from "./SaleSession.js";
export interface CoordinationParams {
    marginPercent?: number;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    coordinatedBy?: Organization | string;
    hasObject?: SaleSession | string;
}
export declare class Coordination extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    marginPercent?: number;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    coordinatedBy?: Organization | string;
    hasObject?: SaleSession | string;
    constructor(semanticId: string, params?: CoordinationParams);
}
