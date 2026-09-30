import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation } from "./DitributedRepresentation.js";
/**
 * A DFC `dfc-b:RepresentedThing`, serialized with `@type:
 *   dfc-b:RepresentedThing`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing`.
 */
export class RepresentedThing extends DitributedRepresentation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:RepresentedThing";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = RepresentedThing.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(RepresentedThing.SEMANTIC_TYPE, RepresentedThing);
    }
}
