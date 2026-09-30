import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";

/**
 * Constructor parameters for {@link AsRealizedProductionFlow}.
 */
export interface AsRealizedProductionFlowParams extends ProductionFlowParams {}

/**
 * A DFC `dfc-b:AsRealizedProductionFlow`, serialized with `@type:
 *   dfc-b:AsRealizedProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsRealizedProductionFlow`.
 */
export class AsRealizedProductionFlow extends ProductionFlow {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsRealizedProductionFlow";
  }



  constructor(
    semanticId: string,
    params?: AsRealizedProductionFlowParams,
  ) {
    super(semanticId, params);
    this.semanticType = AsRealizedProductionFlow.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(AsRealizedProductionFlow.SEMANTIC_TYPE, AsRealizedProductionFlow);
  }
}
