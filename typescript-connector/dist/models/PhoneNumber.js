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
        this.registerSemanticProperty("dfc-b:PhoneNumber:country_code", () => this.countryCode);
        this.registerSemanticProperty("dfc-b:PhoneNumber:phone_number", () => this.phoneNumber);
        this.registerSemanticProperty("dfc-b:PhoneNumber:phone_number_of", () => this.phoneNumberOf);
    }
    static {
        SemanticObject.typeRegistry.set(PhoneNumber.SEMANTIC_TYPE, PhoneNumber);
    }
}
