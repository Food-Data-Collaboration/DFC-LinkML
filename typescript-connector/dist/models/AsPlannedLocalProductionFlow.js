// Class from DFC Business Ontology: #AsPlannedLocalProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow } from "./ProductionFlow.js";
export class AsPlannedLocalProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedLocalProductionFlow";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = AsPlannedLocalProductionFlow.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(AsPlannedLocalProductionFlow.SEMANTIC_TYPE, AsPlannedLocalProductionFlow);
    }
}
