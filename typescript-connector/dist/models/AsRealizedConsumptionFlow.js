import { SemanticObject } from "../core/SemanticObject.js";
import { ConsumptionFlow } from "./ConsumptionFlow.js";
/**
 * A DFC `dfc-b:AsRealizedConsumptionFlow`, serialized with `@type:
 *   dfc-b:AsRealizedConsumptionFlow`.
 * Class hierarchy: `ConsumptionFlow` -> `AsRealizedConsumptionFlow`.
 */
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
