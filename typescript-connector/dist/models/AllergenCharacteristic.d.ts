import { SemanticObject } from "../core/SemanticObject.js";
export interface AllergenCharacteristicParams {
    allergenCharacteristicOf?: string;
    hasAllergenDimension?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class AllergenCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    allergenCharacteristicOf?: string;
    hasAllergenDimension?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: AllergenCharacteristicParams);
}
