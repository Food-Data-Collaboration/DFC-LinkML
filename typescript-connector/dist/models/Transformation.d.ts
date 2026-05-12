import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
export interface TransformationParams extends HowSubjectParams {
}
export declare class Transformation extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: TransformationParams);
}
