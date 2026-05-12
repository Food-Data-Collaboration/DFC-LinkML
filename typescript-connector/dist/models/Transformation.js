// Class from DFC Business Ontology: #Transformation
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject } from "./HowSubject.js";
export class Transformation extends HowSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Transformation";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Transformation.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Transformation.SEMANTIC_TYPE, Transformation);
    }
}
