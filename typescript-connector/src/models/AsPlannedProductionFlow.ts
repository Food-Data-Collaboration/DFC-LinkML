import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";

/**
 * Constructor parameters for {@link AsPlannedProductionFlow}.
 */
export interface AsPlannedProductionFlowParams extends ProductionFlowParams {}

/**
 * A DFC `dfc-b:AsPlannedProductionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsPlannedProductionFlow`.
 */
export class AsPlannedProductionFlow extends ProductionFlow {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedProductionFlow";
  }



  constructor(
    semanticId: string,
    params?: AsPlannedProductionFlowParams,
  ) {
    super(semanticId, params);
    this.semanticType = AsPlannedProductionFlow.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedProductionFlow.SEMANTIC_TYPE, AsPlannedProductionFlow);
  }
}
