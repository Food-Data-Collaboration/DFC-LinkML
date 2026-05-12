import { Transformation, type TransformationParams } from "./Transformation.js";
export interface AsPlannedLocalTransformationParams extends TransformationParams {
    cost?: number;
    endDate?: string;
    startDate?: string;
    hasInput?: string;
    hasOutput?: string;
    transformedBy?: string;
}
export declare class AsPlannedLocalTransformation extends Transformation {
    static get SEMANTIC_TYPE(): string;
    cost?: number;
    endDate?: string;
    startDate?: string;
    hasInput?: string;
    hasOutput?: string;
    transformedBy?: string;
    constructor(semanticId: string, params?: AsPlannedLocalTransformationParams);
}
