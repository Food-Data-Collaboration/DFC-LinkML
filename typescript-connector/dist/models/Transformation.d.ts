import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
/**
 * Constructor parameters for {@link Transformation}.
 */
export interface TransformationParams extends HowSubjectParams {
}
/**
 * A DFC `dfc-b:Transformation`, serialized with `@type:
 *   dfc-b:Transformation`.
 * Class hierarchy: `How_Subject` -> `Transformation`.
 */
export declare class Transformation extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: TransformationParams);
}
