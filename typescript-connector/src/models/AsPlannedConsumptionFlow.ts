// Class from DFC Business Ontology: #AsPlannedConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";

export interface AsPlannedConsumptionFlowParams extends ConsumptionFlowParams {}
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
