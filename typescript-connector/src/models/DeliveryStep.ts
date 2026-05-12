// Class from DFC Business Ontology: #DeliveryStep
import { SemanticObject } from "../core/SemanticObject.js";
import { Step, type StepParams } from "./Step.js";

export interface DeliveryStepParams extends StepParams {}
export class DeliveryStep extends Step {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:DeliveryStep";
  }



  constructor(
    semanticId: string,
    params?: DeliveryStepParams,
  ) {
    super(semanticId, params);
    this.semanticType = DeliveryStep.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(DeliveryStep.SEMANTIC_TYPE, DeliveryStep);
  }
}
