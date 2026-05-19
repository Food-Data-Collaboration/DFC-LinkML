// Class from DFC Business Ontology: #RepresentationPivot
import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation } from "./DitributedRepresentation.js";
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
