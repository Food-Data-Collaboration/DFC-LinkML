import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject } from "./WhoSubject.js";
/**
 * A DFC `dfc-b:Agent`, serialized with `@type: dfc-b:Agent`.
 * Class hierarchy: `Who_Subject` -> `Agent`.
 * Own DFC properties: email, logo, websitePage, hasPhoneNumber,
 *   hasSocialMedia, owns, sells, affiliatedTo, hasAddress, isMemberOf,
 *   orders, requests.
 */
export class Agent extends WhoSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Agent";
    }
    /**
     * email address of the Agent
     *
     * Serializes as `dfc-b:email`.
     */
    email;
    /**
     * URI to logo of Agent
     *
     * Serializes as `dfc-b:logo`.
     */
    logo;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage;
    /**
     * Phone Number relating to the Agent
     *
     * Serializes as `dfc-b:hasPhoneNumber`.
     */
    hasPhoneNumber;
    /**
     * Social Media handle of the Agent
     *
     * Serializes as `dfc-b:hasSocialMedia`.
     */
    hasSocialMedia;
    /**
     * All Brands owned by the Agent
     *
     * Serializes as `dfc-b:owns`.
     */
    owns;
    /**
     * Serializes as `dfc-b:sells`.
     */
    sells;
    /**
     * URI of a Person associated with the Enterprise
     *
     * Serializes as `dfc-b:affiliatedTo`.
     */
    affiliatedTo;
    /**
     * Address of Agent
     *
     * Serializes as `dfc-b:hasAddress`.
     */
    hasAddress;
    /**
     * Serializes as `dfc-b:isMemberOf`.
     */
    isMemberOf;
    /**
     * Any Orders placed by the Agent
     *
     * Serializes as `dfc-b:orders`.
     */
    orders;
    /**
     * Any & all Functional Products that are requested by the Agent
     *
     * Serializes as `dfc-b:requests`.
     */
    requests;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.email = params?.email;
        this.logo = params?.logo;
        this.websitePage = params?.websitePage;
        this.hasPhoneNumber = params?.hasPhoneNumber;
        this.hasSocialMedia = params?.hasSocialMedia;
        this.owns = params?.owns;
        this.sells = params?.sells;
        this.affiliatedTo = params?.affiliatedTo;
        this.hasAddress = params?.hasAddress;
        this.isMemberOf = params?.isMemberOf;
        this.orders = params?.orders;
        this.requests = params?.requests;
        this.semanticType = Agent.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:email", () => this.email);
        this.registerSemanticProperty("dfc-b:logo", () => this.logo);
        this.registerSemanticProperty("dfc-b:websitePage", () => this.websitePage);
        this.registerSemanticProperty("dfc-b:hasPhoneNumber", () => this.hasPhoneNumber);
        this.registerSemanticProperty("dfc-b:hasSocialMedia", () => this.hasSocialMedia);
        this.registerSemanticProperty("dfc-b:owns", () => this.owns);
        this.registerSemanticProperty("dfc-b:sells", () => this.sells);
        this.registerSemanticProperty("dfc-b:affiliatedTo", () => this.affiliatedTo);
        this.registerSemanticProperty("dfc-b:hasAddress", () => this.hasAddress);
        this.registerSemanticProperty("dfc-b:isMemberOf", () => this.isMemberOf);
        this.registerSemanticProperty("dfc-b:orders", () => this.orders);
        this.registerSemanticProperty("dfc-b:requests", () => this.requests);
    }
    static {
        SemanticObject.typeRegistry.set(Agent.SEMANTIC_TYPE, Agent);
    }
}
