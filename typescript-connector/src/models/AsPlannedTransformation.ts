// Class from DFC Business Ontology: #AsPlannedTransformation
import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation, type TransformationParams } from "./Transformation.js";

export interface AsPlannedTransformationParams extends TransformationParams {
  hasInput?: string;
  hasOutput?: string;
  hasTransformationType?: string;
}
export class AsPlannedTransformation extends Transformation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedTransformation";
  }

  hasInput?: string;
  hasOutput?: string;
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
