// Class from DFC Business Ontology: #Point
import { SemanticObject } from "../core/SemanticObject.js";
import { Geometry } from "./Geometry.js";
export class Point extends Geometry {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Point";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Point.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Point.SEMANTIC_TYPE, Point);
    }
}
