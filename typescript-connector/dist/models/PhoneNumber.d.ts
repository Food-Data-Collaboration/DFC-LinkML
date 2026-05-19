import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
export interface PhoneNumberParams extends WhatSubjectParams {
    countryCode?: string;
    phoneNumber?: string;
    phoneNumberOf?: string;
}
export declare class PhoneNumber extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    countryCode?: string;
    phoneNumber?: string;
    phoneNumberOf?: string;
    constructor(semanticId: string, params?: PhoneNumberParams);
}
