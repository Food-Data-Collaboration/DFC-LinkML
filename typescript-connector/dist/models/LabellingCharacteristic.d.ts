import { SemanticObject } from "../core/SemanticObject.js";
export interface LabellingCharacteristicParams {
    hasLabellingDimension?: string;
    labellingCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class LabellingCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    hasLabellingDimension?: string;
    labellingCharacteristicOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: LabellingCharacteristicParams);
}
