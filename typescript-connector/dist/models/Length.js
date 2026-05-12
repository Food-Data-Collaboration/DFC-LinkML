// Class from DFC Business Ontology: #Length
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
export class Length extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Length";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Length.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Length.SEMANTIC_TYPE, Length);
    }
}
