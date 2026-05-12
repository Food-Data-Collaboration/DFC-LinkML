// Class from DFC Business Ontology: #Where_Subject
import { SemanticObject } from "../core/SemanticObject.js";
export class WhereSubject extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Where_Subject";
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
        this.semanticType = WhereSubject.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Where_Subject:date", () => this.date);
        this.registerSemanticProperty("dfc-b:Where_Subject:description", () => this.description);
        this.registerSemanticProperty("dfc-b:Where_Subject:name", () => this.name);
        this.registerSemanticProperty("dfc-b:Where_Subject:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:Where_Subject:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(WhereSubject.SEMANTIC_TYPE, WhereSubject);
    }
}
