// Class from DFC Business Ontology: #AsPlannedProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";

export interface AsPlannedProductionFlowParams extends ProductionFlowParams {}
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
