// Class from DFC Business Ontology: #AsPlannedProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow } from "./ProductionFlow.js";
export class AsPlannedProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedProductionFlow";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = AsPlannedProductionFlow.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(AsPlannedProductionFlow.SEMANTIC_TYPE, AsPlannedProductionFlow);
    }
}
