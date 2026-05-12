import { SemanticObject } from "../core/SemanticObject.js";
export interface PhysicalCharacteristicParams {
    hasPhysicalDimension?: string;
    physicalCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class PhysicalCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    hasPhysicalDimension?: string;
    physicalCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: PhysicalCharacteristicParams);
}
