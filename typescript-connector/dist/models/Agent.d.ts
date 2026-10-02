import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
import type { Address } from "./Address.js";
import type { CustomerCategory } from "./CustomerCategory.js";
import type { FunctionalProduct } from "./FunctionalProduct.js";
import type { Order } from "./Order.js";
import type { Person } from "./Person.js";
/**
 * Constructor parameters for {@link Agent}.
 *
 * Own DFC properties: email, logo, websitePage, hasPhoneNumber,
 *   hasSocialMedia, owns, sells, affiliatedTo, hasAddress, isMemberOf,
 *   orders, requests.
 *
 * Inherited parameters come from {@link WhoSubjectParams}.
 */
export interface AgentParams extends WhoSubjectParams {
    /**
     * email address of the Agent
     *
     * Serializes as `dfc-b:email`.
     */
    email?: string;
    /**
     * URI to logo of Agent
     *
     * Serializes as `dfc-b:logo`.
     */
    logo?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage?: string[];
    /**
     * Phone Number relating to the Agent
     *
     * Serializes as `dfc-b:hasPhoneNumber`.
     */
    hasPhoneNumber?: string[];
    /**
     * Social Media handle of the Agent
     *
     * Serializes as `dfc-b:hasSocialMedia`.
     */
    hasSocialMedia?: string[];
    /**
     * All Brands owned by the Agent
     *
     * Serializes as `dfc-b:owns`.
     */
    owns?: string[];
    /**
     * Serializes as `dfc-b:sells`.
     */
    sells?: string[];
    /**
     * URI of a Person associated with the Enterprise
     *
     * Serializes as `dfc-b:affiliatedTo`.
     */
    affiliatedTo?: Person | string;
    /**
     * Address of Agent
     *
     * Serializes as `dfc-b:hasAddress`.
     */
    hasAddress?: (Address | string)[];
    /**
     * Serializes as `dfc-b:isMemberOf`.
     */
    isMemberOf?: (CustomerCategory | string)[];
    /**
     * Any Orders placed by the Agent
     *
     * Serializes as `dfc-b:orders`.
     */
    orders?: (Order | string)[];
    /**
     * Any & all Functional Products that are requested by the Agent
     *
     * Serializes as `dfc-b:requests`.
     */
    requests?: (FunctionalProduct | string)[];
}
/**
 * A DFC `dfc-b:Agent`, serialized with `@type: dfc-b:Agent`.
 * Class hierarchy: `Who_Subject` -> `Agent`.
 * Own DFC properties: email, logo, websitePage, hasPhoneNumber,
 *   hasSocialMedia, owns, sells, affiliatedTo, hasAddress, isMemberOf,
 *   orders, requests.
 */
export declare class Agent extends WhoSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * email address of the Agent
     *
     * Serializes as `dfc-b:email`.
     */
    email?: string;
    /**
     * URI to logo of Agent
     *
     * Serializes as `dfc-b:logo`.
     */
    logo?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage?: string[];
    /**
     * Phone Number relating to the Agent
     *
     * Serializes as `dfc-b:hasPhoneNumber`.
     */
    hasPhoneNumber?: string[];
    /**
     * Social Media handle of the Agent
     *
     * Serializes as `dfc-b:hasSocialMedia`.
     */
    hasSocialMedia?: string[];
    /**
     * All Brands owned by the Agent
     *
     * Serializes as `dfc-b:owns`.
     */
    owns?: string[];
    /**
     * Serializes as `dfc-b:sells`.
     */
    sells?: string[];
    /**
     * URI of a Person associated with the Enterprise
     *
     * Serializes as `dfc-b:affiliatedTo`.
     */
    affiliatedTo?: Person | string;
    /**
     * Address of Agent
     *
     * Serializes as `dfc-b:hasAddress`.
     */
    hasAddress?: (Address | string)[];
    /**
     * Serializes as `dfc-b:isMemberOf`.
     */
    isMemberOf?: (CustomerCategory | string)[];
    /**
     * Any Orders placed by the Agent
     *
     * Serializes as `dfc-b:orders`.
     */
    orders?: (Order | string)[];
    /**
     * Any & all Functional Products that are requested by the Agent
     *
     * Serializes as `dfc-b:requests`.
     */
    requests?: (FunctionalProduct | string)[];
    constructor(semanticId: string, params?: AgentParams);
}
