// Class from DFC Business Ontology: #What_Subject
import { SemanticObject } from "../core/SemanticObject.js";
export class WhatSubject extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:What_Subject";
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
        this.semanticType = WhatSubject.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:What_Subject:date", () => this.date);
        this.registerSemanticProperty("dfc-b:What_Subject:description", () => this.description);
        this.registerSemanticProperty("dfc-b:What_Subject:name", () => this.name);
        this.registerSemanticProperty("dfc-b:What_Subject:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:What_Subject:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(WhatSubject.SEMANTIC_TYPE, WhatSubject);
    }
}
