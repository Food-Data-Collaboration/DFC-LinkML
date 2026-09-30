import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:PhoneNumber`, serialized with `@type: dfc-b:PhoneNumber`.
 * Class hierarchy: `What_Subject` -> `PhoneNumber`.
 * Own DFC properties: countryCode, phoneNumber, phoneNumberOf.
 */
export class PhoneNumber extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhoneNumber";
    }
    /**
     * The international dialling code for the country where the phone number
     *   is registered
     *
     * Serializes as `dfc-b:countryCode`.
     */
    countryCode;
    /**
     * The full phone number (not including any country code)
     *
     * Serializes as `dfc-b:phoneNumber`.
     */
    phoneNumber;
    /**
     * The Enterprise or Person (Agent) or Physical Place that the phone
     *   numbers is associated with.
     *
     * Serializes as `dfc-b:phoneNumberOf`.
     */
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
