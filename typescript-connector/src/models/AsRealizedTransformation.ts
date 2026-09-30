import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation, type TransformationParams } from "./Transformation.js";

/**
 * Constructor parameters for {@link AsRealizedTransformation}.
 *
 * Own DFC properties: cost, endDate, startDate, hasInput, hasOutput.
 *
 * Inherited parameters come from {@link TransformationParams}.
 */
export interface AsRealizedTransformationParams extends TransformationParams {
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
  hasInput?: string;
  /**
   * The PlannedProductionFlow that is the output of the
   *   PlannedTransformation
   *
   * Serializes as `dfc-b:hasOutput`.
   */
  hasOutput?: string;
}

/**
 * A DFC `dfc-b:AsRealizedTransformation`, serialized with `@type:
 *   dfc-b:AsRealizedTransformation`.
 * Class hierarchy: `How_Subject` -> `Transformation` ->
 *   `AsRealizedTransformation`.
 * Own DFC properties: cost, endDate, startDate, hasInput, hasOutput.
 */
export class AsRealizedTransformation extends Transformation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsRealizedTransformation";
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
  hasInput?: string;
  /**
   * The PlannedProductionFlow that is the output of the
   *   PlannedTransformation
   *
   * Serializes as `dfc-b:hasOutput`.
   */
  hasOutput?: string;

  constructor(
    semanticId: string,
    params?: AsRealizedTransformationParams,
  ) {
    super(semanticId, params);
    this.cost = params?.cost;
    this.endDate = params?.endDate;
    this.startDate = params?.startDate;
    this.hasInput = params?.hasInput;
    this.hasOutput = params?.hasOutput;
    this.semanticType = AsRealizedTransformation.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:cost", () => this.cost);
    this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
    this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
    this.registerSemanticProperty("dfc-b:hasInput", () => this.hasInput);
    this.registerSemanticProperty("dfc-b:hasOutput", () => this.hasOutput);
  }
  static {
    SemanticObject.typeRegistry.set(AsRealizedTransformation.SEMANTIC_TYPE, AsRealizedTransformation);
  }
}
