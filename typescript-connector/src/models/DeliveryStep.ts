import { SemanticObject } from "../core/SemanticObject.js";
import { Step, type StepParams } from "./Step.js";

/**
 * Constructor parameters for {@link DeliveryStep}.
 */
export interface DeliveryStepParams extends StepParams {}

/**
 * A DFC `dfc-b:DeliveryStep`, serialized with `@type: dfc-b:DeliveryStep`.
 * Class hierarchy: `Where_Subject` -> `Step` -> `DeliveryStep`.
 */
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
