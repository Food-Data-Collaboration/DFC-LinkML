// Class from DFC Business Ontology: #Who_Subject
import { SemanticObject } from "../core/SemanticObject.js";
export class WhoSubject extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Who_Subject";
    }
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = WhoSubject.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Who_Subject:date", () => this.date);
        this.registerSemanticProperty("dfc-b:Who_Subject:description", () => this.description);
        this.registerSemanticProperty("dfc-b:Who_Subject:name", () => this.name);
        this.registerSemanticProperty("dfc-b:Who_Subject:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:Who_Subject:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(WhoSubject.SEMANTIC_TYPE, WhoSubject);
    }
}
