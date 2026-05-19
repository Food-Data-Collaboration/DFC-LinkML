// Class from DFC Business Ontology: #AsRealizedConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";

export interface AsRealizedConsumptionFlowParams extends ConsumptionFlowParams {}
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
