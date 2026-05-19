// Class from DFC Business Ontology: #AsRealizedProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow } from "./ProductionFlow.js";
export class AsRealizedProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsRealizedProductionFlow";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = AsRealizedProductionFlow.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(AsRealizedProductionFlow.SEMANTIC_TYPE, AsRealizedProductionFlow);
    }
}
