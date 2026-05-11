// Class from DFC Business Ontology: #AsRealizedProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";

export interface AsRealizedProductionFlowParams extends ProductionFlowParams {}
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
