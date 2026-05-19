// Class from DFC Business Ontology: #PickUpStep
import { SemanticObject } from "../core/SemanticObject.js";
import { Step, type StepParams } from "./Step.js";

export interface PickUpStepParams extends StepParams {}
export class PickUpStep extends Step {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PickUpStep";
  }



  constructor(
    semanticId: string,
    params?: PickUpStepParams,
  ) {
    super(semanticId, params);
    this.semanticType = PickUpStep.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(PickUpStep.SEMANTIC_TYPE, PickUpStep);
  }
}
