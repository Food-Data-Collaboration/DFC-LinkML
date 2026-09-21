import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
export interface PhysicalCharacteristicParams {
    physicalCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasPhysicalDimension?: Concept | string;
}
export declare class PhysicalCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    physicalCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasPhysicalDimension?: Concept | string;
    constructor(semanticId: string, params?: PhysicalCharacteristicParams);
}
