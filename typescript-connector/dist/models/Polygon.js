// Class from DFC Business Ontology: #Polygon
import { SemanticObject } from "../core/SemanticObject.js";
import { Geometry } from "./Geometry.js";
export class Polygon extends Geometry {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Polygon";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Polygon.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Polygon.SEMANTIC_TYPE, Polygon);
    }
}
