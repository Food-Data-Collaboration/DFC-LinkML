import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
import type { Organization } from "./Organization.js";
/**
 * Constructor parameters for {@link CustomerCategory}.
 *
 * Own DFC properties: hasMember, hasOffer, definedBy.
 *
 * Inherited parameters come from {@link WhoSubjectParams}.
 */
export interface CustomerCategoryParams extends WhoSubjectParams {
    /**
     * Serializes as `dfc-b:hasMember`.
     */
    hasMember?: string;
    /**
     * Serializes as `dfc-b:hasOffer`.
     */
    hasOffer?: string;
    /**
     * Determines which Enterprise has defined the CustomerCategory
     *
     * Serializes as `dfc-b:definedBy`.
     */
    definedBy?: Organization | string;
}
/**
 * A DFC `dfc-b:CustomerCategory`, serialized with `@type:
 *   dfc-b:CustomerCategory`.
 * Class hierarchy: `Who_Subject` -> `CustomerCategory`.
 * Own DFC properties: hasMember, hasOffer, definedBy.
 */
export declare class CustomerCategory extends WhoSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:hasMember`.
     */
    hasMember?: string;
    /**
     * Serializes as `dfc-b:hasOffer`.
     */
    hasOffer?: string;
    /**
     * Determines which Enterprise has defined the CustomerCategory
     *
     * Serializes as `dfc-b:definedBy`.
     */
    definedBy?: Organization | string;
    constructor(semanticId: string, params?: CustomerCategoryParams);
}
