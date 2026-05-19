// Class from DFC Business Ontology: #Platform
import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation } from "./DitributedRepresentation.js";
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
