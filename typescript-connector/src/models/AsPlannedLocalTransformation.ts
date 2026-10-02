import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation, type TransformationParams } from "./Transformation.js";
import type { Organization } from "./Organization.js";

/**
 * Constructor parameters for {@link AsPlannedLocalTransformation}.
 *
 * Own DFC properties: cost, endDate, startDate, hasInput, hasOutput,
 *   transformedBy.
 *
 * Inherited parameters come from {@link TransformationParams}.
 */
export interface AsPlannedLocalTransformationParams extends TransformationParams {
  /**
   * Serializes as `dfc-b:cost`.
   */
  cost?: number;
  /**
   * The date/time that the Sales Session ends
   *
   * Serializes as `dfc-b:endDate`.
   */
  endDate?: string;
  /**
   * The date/time that the Sales Session starts
   *
   * Serializes as `dfc-b:startDate`.
   */
  startDate?: string;
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
   * Serializes as `dfc-b:transformedBy`.
   */
  transformedBy?: Organization | string;
}

/**
 * A DFC `dfc-b:AsPlannedLocalTransformation`, serialized with `@type:
 *   dfc-b:AsPlannedLocalTransformation`.
 * Class hierarchy: `How_Subject` -> `Transformation` ->
 *   `AsPlannedLocalTransformation`.
 * Own DFC properties: cost, endDate, startDate, hasInput, hasOutput,
 *   transformedBy.
 */
export class AsPlannedLocalTransformation extends Transformation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedLocalTransformation";
  }

  /**
   * Serializes as `dfc-b:cost`.
   */
  cost?: number;
  /**
   * The date/time that the Sales Session ends
   *
   * Serializes as `dfc-b:endDate`.
   */
  endDate?: string;
  /**
   * The date/time that the Sales Session starts
   *
   * Serializes as `dfc-b:startDate`.
   */
  startDate?: string;
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
   * Serializes as `dfc-b:transformedBy`.
   */
  transformedBy?: Organization | string;

  constructor(
    semanticId: string,
    params?: AsPlannedLocalTransformationParams,
  ) {
    super(semanticId, params);
    this.cost = params?.cost;
    this.endDate = params?.endDate;
    this.startDate = params?.startDate;
    this.hasInput = params?.hasInput;
    this.hasOutput = params?.hasOutput;
    this.transformedBy = params?.transformedBy;
    this.semanticType = AsPlannedLocalTransformation.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:cost", () => this.cost);
    this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
    this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
    this.registerSemanticProperty("dfc-b:hasInput", () => this.hasInput);
    this.registerSemanticProperty("dfc-b:hasOutput", () => this.hasOutput);
    this.registerSemanticProperty("dfc-b:transformedBy", () => this.transformedBy);
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedLocalTransformation.SEMANTIC_TYPE, AsPlannedLocalTransformation);
  }
}
