import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";

/**
 * Constructor parameters for {@link AsPlannedLocalProductionFlow}.
 */
export interface AsPlannedLocalProductionFlowParams extends ProductionFlowParams {}

/**
 * A DFC `dfc-b:AsPlannedLocalProductionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedLocalProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsPlannedLocalProductionFlow`.
 */
export class AsPlannedLocalProductionFlow extends ProductionFlow {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedLocalProductionFlow";
  }



  constructor(
    semanticId: string,
    params?: AsPlannedLocalProductionFlowParams,
  ) {
    super(semanticId, params);
    this.semanticType = AsPlannedLocalProductionFlow.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedLocalProductionFlow.SEMANTIC_TYPE, AsPlannedLocalProductionFlow);
  }
}
