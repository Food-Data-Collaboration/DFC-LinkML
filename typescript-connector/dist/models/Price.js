// Class from DFC Business Ontology: #Price
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
export class Price extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Price";
    }
    vatRate;
    isPriceOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.vatRate = params?.vatRate;
        this.isPriceOf = params?.isPriceOf;
        this.semanticType = Price.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:VATrate", () => this.vatRate);
        this.registerSemanticProperty("dfc-b:isPriceOf", () => this.isPriceOf);
    }
    static {
        SemanticObject.typeRegistry.set(Price.SEMANTIC_TYPE, Price);
    }
}
