import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
export interface AllergenCharacteristicParams {
    allergenCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasAllergenDimension?: Concept | string;
}
export declare class AllergenCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    allergenCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasAllergenDimension?: Concept | string;
    constructor(semanticId: string, params?: AllergenCharacteristicParams);
}
