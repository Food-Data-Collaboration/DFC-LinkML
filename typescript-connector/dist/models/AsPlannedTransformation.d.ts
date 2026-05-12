import { Transformation, type TransformationParams } from "./Transformation.js";
export interface AsPlannedTransformationParams extends TransformationParams {
    hasInput?: string;
    hasOutput?: string;
    hasTransformationType?: string;
}
export declare class AsPlannedTransformation extends Transformation {
    static get SEMANTIC_TYPE(): string;
    hasInput?: string;
    hasOutput?: string;
    hasTransformationType?: string;
    constructor(semanticId: string, params?: AsPlannedTransformationParams);
}
