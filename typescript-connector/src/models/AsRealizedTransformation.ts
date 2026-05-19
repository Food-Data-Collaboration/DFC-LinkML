// Class from DFC Business Ontology: #AsRealizedTransformation
import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation, type TransformationParams } from "./Transformation.js";

export interface AsRealizedTransformationParams extends TransformationParams {
  cost?: number;
  endDate?: string;
  startDate?: string;
  hasInput?: string;
  hasOutput?: string;
}
export class AsRealizedTransformation extends Transformation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsRealizedTransformation";
  }

  cost?: number;
  endDate?: string;
  startDate?: string;
  hasInput?: string;
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
    this.registerSemanticProperty("dfc-b:AsRealizedTransformation:cost", () => this.cost);
    this.registerSemanticProperty("dfc-b:AsRealizedTransformation:end_date", () => this.endDate);
    this.registerSemanticProperty("dfc-b:AsRealizedTransformation:start_date", () => this.startDate);
    this.registerSemanticProperty("dfc-b:AsRealizedTransformation:has_input", () => this.hasInput);
    this.registerSemanticProperty("dfc-b:AsRealizedTransformation:has_output", () => this.hasOutput);
  }
  static {
    SemanticObject.typeRegistry.set(AsRealizedTransformation.SEMANTIC_TYPE, AsRealizedTransformation);
  }
}
