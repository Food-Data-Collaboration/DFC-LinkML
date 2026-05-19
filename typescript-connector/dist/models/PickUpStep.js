// Class from DFC Business Ontology: #PickUpStep
import { SemanticObject } from "../core/SemanticObject.js";
import { Step } from "./Step.js";
export class PickUpStep extends Step {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PickUpStep";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = PickUpStep.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(PickUpStep.SEMANTIC_TYPE, PickUpStep);
    }
}
