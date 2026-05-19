// Class from DFC Business Ontology: #AsPlannedLocalProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";

export interface AsPlannedLocalProductionFlowParams extends ProductionFlowParams {}
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
