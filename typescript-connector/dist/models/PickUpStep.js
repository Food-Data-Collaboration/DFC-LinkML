import { SemanticObject } from "../core/SemanticObject.js";
import { Step } from "./Step.js";
/**
 * A DFC `dfc-b:PickUpStep`, serialized with `@type: dfc-b:PickUpStep`.
 * Class hierarchy: `Where_Subject` -> `Step` -> `PickUpStep`.
 */
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
