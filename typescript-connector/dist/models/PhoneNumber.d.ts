import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
/**
 * Constructor parameters for {@link PhoneNumber}.
 *
 * Own DFC properties: countryCode, phoneNumber, phoneNumberOf.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface PhoneNumberParams extends WhatSubjectParams {
    /**
     * The international dialling code for the country where the phone number
     *   is registered
     *
     * Serializes as `dfc-b:countryCode`.
     */
    countryCode?: string;
    /**
     * The full phone number (not including any country code)
     *
     * Serializes as `dfc-b:phoneNumber`.
     */
    phoneNumber?: string;
    /**
     * The Enterprise or Person (Agent) or Physical Place that the phone
     *   numbers is associated with.
     *
     * Serializes as `dfc-b:phoneNumberOf`.
     */
    phoneNumberOf?: string;
}
/**
 * A DFC `dfc-b:PhoneNumber`, serialized with `@type: dfc-b:PhoneNumber`.
 * Class hierarchy: `What_Subject` -> `PhoneNumber`.
 * Own DFC properties: countryCode, phoneNumber, phoneNumberOf.
 */
export declare class PhoneNumber extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * The international dialling code for the country where the phone number
     *   is registered
     *
     * Serializes as `dfc-b:countryCode`.
     */
    countryCode?: string;
    /**
     * The full phone number (not including any country code)
     *
     * Serializes as `dfc-b:phoneNumber`.
     */
    phoneNumber?: string;
    /**
     * The Enterprise or Person (Agent) or Physical Place that the phone
     *   numbers is associated with.
     *
     * Serializes as `dfc-b:phoneNumberOf`.
     */
    phoneNumberOf?: string;
    constructor(semanticId: string, params?: PhoneNumberParams);
}
