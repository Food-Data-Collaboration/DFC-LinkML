// Class from DFC Business Ontology: #AsPlannedLocalConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow } from "./ConsumptionFlow.js";
export class AsPlannedLocalConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedLocalConsumptionFlow";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = AsPlannedLocalConsumptionFlow.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(AsPlannedLocalConsumptionFlow.SEMANTIC_TYPE, AsPlannedLocalConsumptionFlow);
    }
}
