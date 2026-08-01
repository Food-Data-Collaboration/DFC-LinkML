// Class from DFC Business Ontology: #Price
import { SemanticObject } from "../core/SemanticObject.js";
export class Price extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Price";
    }
    vatRate;
    isPriceOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.vatRate = params?.vatRate;
        this.isPriceOf = params?.isPriceOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = Price.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:VATrate", () => this.vatRate);
        this.registerSemanticProperty("dfc-b:isPriceOf", () => this.isPriceOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(Price.SEMANTIC_TYPE, Price);
    }
}
