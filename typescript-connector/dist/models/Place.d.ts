import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { SaleSession } from "./SaleSession.js";
/**
 * Constructor parameters for {@link Place}.
 *
 * Own DFC properties: hosts.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface PlaceParams extends WhereSubjectParams {
    /**
     * All Sales Sessions that have been, are being or will be hosted at this
     *   location
     *
     * Serializes as `dfc-b:hosts`.
     */
    hosts?: (SaleSession | string)[];
}
/**
 * A DFC `dfc-b:Place`, serialized with `@type: dfc-b:Place`.
 * Class hierarchy: `Where_Subject` -> `Place`.
 * Own DFC properties: hosts.
 */
export declare class Place extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * All Sales Sessions that have been, are being or will be hosted at this
     *   location
     *
     * Serializes as `dfc-b:hosts`.
     */
    hosts?: (SaleSession | string)[];
    constructor(semanticId: string, params?: PlaceParams);
}
