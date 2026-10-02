import { SemanticObject } from "../core/SemanticObject.js";
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
export class Agent extends WhoSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Agent";
  }

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

  constructor(
    semanticId: string,
    params?: AgentParams,
  ) {
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
