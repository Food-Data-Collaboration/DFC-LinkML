import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:Certfication`, serialized with `@type: dfc-b:Certfication`.
 * Class hierarchy: `What_Subject` -> `Certfication`.
 * Own DFC properties: certiferReference, certificationScore, operatorId,
 *   certifies.
 */
export class Certfication extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Certfication";
    }
    /**
     * Serializes as `dfc-b:certiferReference`.
     */
    certiferReference;
    /**
     * Serializes as `dfc-b:certificationScore`.
     */
    certificationScore;
    /**
     * Serializes as `dfc-b:operatorId`.
     */
    operatorId;
    /**
     * Serializes as `dfc-b:certifies`.
     */
    certifies;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.certiferReference = params?.certiferReference;
        this.certificationScore = params?.certificationScore;
        this.operatorId = params?.operatorId;
        this.certifies = params?.certifies;
        this.semanticType = Certfication.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:certiferReference", () => this.certiferReference);
        this.registerSemanticProperty("dfc-b:certificationScore", () => this.certificationScore);
        this.registerSemanticProperty("dfc-b:operatorId", () => this.operatorId);
        this.registerSemanticProperty("dfc-b:certifies", () => this.certifies);
    }
    static {
        SemanticObject.typeRegistry.set(Certfication.SEMANTIC_TYPE, Certfication);
    }
}
