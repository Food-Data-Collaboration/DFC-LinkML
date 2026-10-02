import { Transformation, type TransformationParams } from "./Transformation.js";
/**
 * Constructor parameters for {@link AsPlannedTransformation}.
 *
 * Own DFC properties: hasInput, hasOutput, hasTransformationType.
 *
 * Inherited parameters come from {@link TransformationParams}.
 */
export interface AsPlannedTransformationParams extends TransformationParams {
    /**
     * The PlannedConsumptionFlow that is the input of the
     *   PlannedTransformation
     *
     * Serializes as `dfc-b:hasInput`.
     */
    hasInput?: string[];
    /**
     * The PlannedProductionFlow that is the output of the
     *   PlannedTransformation
     *
     * Serializes as `dfc-b:hasOutput`.
     */
    hasOutput?: string[];
    /**
     * The Type of transformation, from the SKOS vocabulary file
     *
     * Serializes as `dfc-b:hasTransformationType`.
     */
    hasTransformationType?: string;
}
/**
 * A DFC `dfc-b:AsPlannedTransformation`, serialized with `@type:
 *   dfc-b:AsPlannedTransformation`.
 * Class hierarchy: `How_Subject` -> `Transformation` ->
 *   `AsPlannedTransformation`.
 * Own DFC properties: hasInput, hasOutput, hasTransformationType.
 */
export declare class AsPlannedTransformation extends Transformation {
    static get SEMANTIC_TYPE(): string;
    /**
     * The PlannedConsumptionFlow that is the input of the
     *   PlannedTransformation
     *
     * Serializes as `dfc-b:hasInput`.
     */
    hasInput?: string[];
    /**
     * The PlannedProductionFlow that is the output of the
     *   PlannedTransformation
     *
     * Serializes as `dfc-b:hasOutput`.
     */
    hasOutput?: string[];
    /**
     * The Type of transformation, from the SKOS vocabulary file
     *
     * Serializes as `dfc-b:hasTransformationType`.
     */
    hasTransformationType?: string;
    constructor(semanticId: string, params?: AsPlannedTransformationParams);
}
