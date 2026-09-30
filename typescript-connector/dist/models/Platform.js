import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation } from "./DitributedRepresentation.js";
/**
 * A DFC `dfc-b:Platform`, serialized with `@type: dfc-b:Platform`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `Platform`.
 */
export class Platform extends DitributedRepresentation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Platform";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Platform.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Platform.SEMANTIC_TYPE, Platform);
    }
}
