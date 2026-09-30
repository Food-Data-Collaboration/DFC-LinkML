import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";

/**
 * Constructor parameters for {@link AsRealizedConsumptionFlow}.
 */
export interface AsRealizedConsumptionFlowParams extends ConsumptionFlowParams {}

/**
 * A DFC `dfc-b:AsRealizedConsumptionFlow`, serialized with `@type:
 *   dfc-b:AsRealizedConsumptionFlow`.
 * Class hierarchy: `ConsumptionFlow` -> `AsRealizedConsumptionFlow`.
 */
export class AsRealizedConsumptionFlow extends ConsumptionFlow {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsRealizedConsumptionFlow";
  }



  constructor(
    semanticId: string,
    params?: AsRealizedConsumptionFlowParams,
  ) {
    super(semanticId, params);
    this.semanticType = AsRealizedConsumptionFlow.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(AsRealizedConsumptionFlow.SEMANTIC_TYPE, AsRealizedConsumptionFlow);
  }
}
