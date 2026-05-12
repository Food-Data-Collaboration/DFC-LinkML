import { Transformation, type TransformationParams } from "./Transformation.js";
export interface AsRealizedTransformationParams extends TransformationParams {
    cost?: number;
    endDate?: string;
    startDate?: string;
    hasInput?: string;
    hasOutput?: string;
}
export declare class AsRealizedTransformation extends Transformation {
    static get SEMANTIC_TYPE(): string;
    cost?: number;
    endDate?: string;
    startDate?: string;
    hasInput?: string;
    hasOutput?: string;
    constructor(semanticId: string, params?: AsRealizedTransformationParams);
}
