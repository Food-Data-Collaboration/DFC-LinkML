// Class from DFC Business Ontology: #AsPlannedConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow } from "./ConsumptionFlow.js";
export class AsPlannedConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedConsumptionFlow";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = AsPlannedConsumptionFlow.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(AsPlannedConsumptionFlow.SEMANTIC_TYPE, AsPlannedConsumptionFlow);
    }
}
