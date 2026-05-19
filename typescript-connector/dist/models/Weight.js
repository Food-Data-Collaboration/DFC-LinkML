// Class from DFC Business Ontology: #Weight
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
export class Weight extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Weight";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Weight.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Weight.SEMANTIC_TYPE, Weight);
    }
}
