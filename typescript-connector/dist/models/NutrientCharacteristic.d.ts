import { SemanticObject } from "../core/SemanticObject.js";
export interface NutrientCharacteristicParams {
    hasNutrientDimension?: string;
    nutrientCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class NutrientCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    hasNutrientDimension?: string;
    nutrientCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: NutrientCharacteristicParams);
}
