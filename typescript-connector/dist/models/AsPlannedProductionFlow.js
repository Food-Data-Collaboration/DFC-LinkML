import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow } from "./ProductionFlow.js";
/**
 * A DFC `dfc-b:AsPlannedProductionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsPlannedProductionFlow`.
 */
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
