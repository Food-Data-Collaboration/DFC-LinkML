import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";

/**
 * Constructor parameters for {@link AsPlannedConsumptionFlow}.
 */
export interface AsPlannedConsumptionFlowParams extends ConsumptionFlowParams {}

/**
 * A DFC `dfc-b:AsPlannedConsumptionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedConsumptionFlow`.
 * Class hierarchy: `ConsumptionFlow` -> `AsPlannedConsumptionFlow`.
 */
export class AsPlannedConsumptionFlow extends ConsumptionFlow {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedConsumptionFlow";
  }



  constructor(
    semanticId: string,
    params?: AsPlannedConsumptionFlowParams,
  ) {
    super(semanticId, params);
    this.semanticType = AsPlannedConsumptionFlow.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedConsumptionFlow.SEMANTIC_TYPE, AsPlannedConsumptionFlow);
  }
}
