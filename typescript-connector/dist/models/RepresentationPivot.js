import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation } from "./DitributedRepresentation.js";
/**
 * A DFC `dfc-b:RepresentationPivot`, serialized with `@type:
 *   dfc-b:RepresentationPivot`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentationPivot`.
 */
export class RepresentationPivot extends DitributedRepresentation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:RepresentationPivot";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = RepresentationPivot.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(RepresentationPivot.SEMANTIC_TYPE, RepresentationPivot);
    }
}
