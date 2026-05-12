// Class from DFC Business Ontology: #Certfication
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class Certfication extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Certfication";
    }
    certiferReference;
    certificationScore;
    operatorId;
    certifies;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.certiferReference = params?.certiferReference;
        this.certificationScore = params?.certificationScore;
        this.operatorId = params?.operatorId;
        this.certifies = params?.certifies;
        this.semanticType = Certfication.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Certfication:certifer_reference", () => this.certiferReference);
        this.registerSemanticProperty("dfc-b:Certfication:certification_score", () => this.certificationScore);
        this.registerSemanticProperty("dfc-b:Certfication:operator_id", () => this.operatorId);
        this.registerSemanticProperty("dfc-b:Certfication:certifies", () => this.certifies);
    }
    static {
        SemanticObject.typeRegistry.set(Certfication.SEMANTIC_TYPE, Certfication);
    }
}
