import { SemanticObject } from "../core/SemanticObject.js";
import { ProductionFlow } from "./ProductionFlow.js";
/**
 * A DFC `dfc-b:AsRealizedProductionFlow`, serialized with `@type:
 *   dfc-b:AsRealizedProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsRealizedProductionFlow`.
 */
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
