import { SemanticObject } from "../core/SemanticObject.js";
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
export class AsPlannedTransformation extends Transformation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedTransformation";
  }

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

  constructor(
    semanticId: string,
    params?: AsPlannedTransformationParams,
  ) {
    super(semanticId, params);
    this.hasInput = params?.hasInput;
    this.hasOutput = params?.hasOutput;
    this.hasTransformationType = params?.hasTransformationType;
    this.semanticType = AsPlannedTransformation.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hasInput", () => this.hasInput);
    this.registerSemanticProperty("dfc-b:hasOutput", () => this.hasOutput);
    this.registerSemanticProperty("dfc-b:hasTransformationType", () => this.hasTransformationType);
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedTransformation.SEMANTIC_TYPE, AsPlannedTransformation);
  }
}
