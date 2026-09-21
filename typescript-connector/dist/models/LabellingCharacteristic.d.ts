import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
export interface LabellingCharacteristicParams {
    labellingCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasLabellingDimension?: Concept | string;
}
export declare class LabellingCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    labellingCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    hasLabellingDimension?: Concept | string;
    constructor(semanticId: string, params?: LabellingCharacteristicParams);
}
