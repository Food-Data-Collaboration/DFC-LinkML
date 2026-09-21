import { Transformation, type TransformationParams } from "./Transformation.js";
import type { Organization } from "./Organization.js";
export interface AsPlannedLocalTransformationParams extends TransformationParams {
    cost?: number;
    endDate?: string;
    startDate?: string;
    hasInput?: string;
    hasOutput?: string;
    transformedBy?: Organization | string;
}
export declare class AsPlannedLocalTransformation extends Transformation {
    static get SEMANTIC_TYPE(): string;
    cost?: number;
    endDate?: string;
    startDate?: string;
    hasInput?: string;
    hasOutput?: string;
    transformedBy?: Organization | string;
    constructor(semanticId: string, params?: AsPlannedLocalTransformationParams);
}
