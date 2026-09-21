// Class from DFC Business Ontology: #PhoneNumber
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class PhoneNumber extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhoneNumber";
    }
    countryCode;
    phoneNumber;
    phoneNumberOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.countryCode = params?.countryCode;
        this.phoneNumber = params?.phoneNumber;
        this.phoneNumberOf = params?.phoneNumberOf;
        this.semanticType = PhoneNumber.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:countryCode", () => this.countryCode);
        this.registerSemanticProperty("dfc-b:phoneNumber", () => this.phoneNumber);
        this.registerSemanticProperty("dfc-b:phoneNumberOf", () => this.phoneNumberOf);
    }
    static {
        SemanticObject.typeRegistry.set(PhoneNumber.SEMANTIC_TYPE, PhoneNumber);
    }
}
