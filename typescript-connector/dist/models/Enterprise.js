// Class from DFC Business Ontology: #Enterprise
import { SemanticObject } from "../core/SemanticObject.js";
import { Agent } from "./Agent.js";
export class Enterprise extends Agent {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Enterprise";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Enterprise.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Enterprise.SEMANTIC_TYPE, Enterprise);
    }
}
