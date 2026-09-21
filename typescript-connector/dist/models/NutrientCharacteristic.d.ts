import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
export interface NutrientCharacteristicParams {
    nutrientCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasNutrientDimension?: Concept | string;
}
export declare class NutrientCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    nutrientCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasNutrientDimension?: Concept | string;
    constructor(semanticId: string, params?: NutrientCharacteristicParams);
}
