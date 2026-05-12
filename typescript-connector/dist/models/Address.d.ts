import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
export interface AddressParams extends WhereSubjectParams {
    city?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    postcode?: string;
    region?: string;
    street?: string;
    addressOf?: string;
    hasCountry?: string;
}
export declare class Address extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    city?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    postcode?: string;
    region?: string;
    street?: string;
    addressOf?: string;
    hasCountry?: string;
    constructor(semanticId: string, params?: AddressParams);
}
