// Class from DFC Business Ontology: #AsPlannedLocalTransformation
import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation, type TransformationParams } from "./Transformation.js";

export interface AsPlannedLocalTransformationParams extends TransformationParams {
  cost?: number;
  endDate?: string;
  startDate?: string;
  hasInput?: string;
  hasOutput?: string;
  transformedBy?: string;
}
export class AsPlannedLocalTransformation extends Transformation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedLocalTransformation";
  }

  cost?: number;
  endDate?: string;
  startDate?: string;
  hasInput?: string;
  hasOutput?: string;
  transformedBy?: string;

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
    this.registerSemanticProperty("dfc-b:AsPlannedLocalTransformation:cost", () => this.cost);
    this.registerSemanticProperty("dfc-b:AsPlannedLocalTransformation:end_date", () => this.endDate);
    this.registerSemanticProperty("dfc-b:AsPlannedLocalTransformation:start_date", () => this.startDate);
    this.registerSemanticProperty("dfc-b:AsPlannedLocalTransformation:has_input", () => this.hasInput);
    this.registerSemanticProperty("dfc-b:AsPlannedLocalTransformation:has_output", () => this.hasOutput);
    this.registerSemanticProperty("dfc-b:AsPlannedLocalTransformation:transformed_by", () => this.transformedBy);
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedLocalTransformation.SEMANTIC_TYPE, AsPlannedLocalTransformation);
  }
}
