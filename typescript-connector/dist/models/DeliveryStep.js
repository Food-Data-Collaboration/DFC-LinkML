// Class from DFC Business Ontology: #DeliveryStep
import { SemanticObject } from "../core/SemanticObject.js";
import { Step } from "./Step.js";
export class DeliveryStep extends Step {
    static get SEMANTIC_TYPE() {
        return "dfc-b:DeliveryStep";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = DeliveryStep.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(DeliveryStep.SEMANTIC_TYPE, DeliveryStep);
    }
}
