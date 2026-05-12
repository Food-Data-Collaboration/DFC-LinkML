// Class from DFC Business Ontology: #Volume
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
export class Volume extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Volume";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Volume.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Volume.SEMANTIC_TYPE, Volume);
    }
}
