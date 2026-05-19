// Class from DFC Business Ontology: #AsPlannedLocalConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";

export interface AsPlannedLocalConsumptionFlowParams extends ConsumptionFlowParams {}
export class AsPlannedLocalConsumptionFlow extends ConsumptionFlow {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AsPlannedLocalConsumptionFlow";
  }



  constructor(
    semanticId: string,
    params?: AsPlannedLocalConsumptionFlowParams,
  ) {
    super(semanticId, params);
    this.semanticType = AsPlannedLocalConsumptionFlow.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(AsPlannedLocalConsumptionFlow.SEMANTIC_TYPE, AsPlannedLocalConsumptionFlow);
  }
}
