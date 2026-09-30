import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow } from "./ProductionFlow.js";
/**
 * A DFC `dfc-b:AsPlannedLocalProductionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedLocalProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsPlannedLocalProductionFlow`.
 */
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
