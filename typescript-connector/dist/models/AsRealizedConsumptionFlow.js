// Class from DFC Business Ontology: #AsRealizedConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow } from "./ConsumptionFlow.js";
export class AsRealizedConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsRealizedConsumptionFlow";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = AsRealizedConsumptionFlow.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(AsRealizedConsumptionFlow.SEMANTIC_TYPE, AsRealizedConsumptionFlow);
    }
}
