// Class from DFC Business Ontology: #Agent
import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";

export interface AgentParams extends WhoSubjectParams {
  email?: string;
  logo?: string;
  websitePage?: string;
  affiliatedTo?: string;
  hasAddress?: string;
  hasPhoneNumber?: string;
  hasSocialMedia?: string;
  isMemberOf?: string;
  orders?: string[];
  owns?: string[];
  requests?: string[];
  sells?: string[];
}
export class Agent extends WhoSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Agent";
  }

  email?: string;
  logo?: string;
  websitePage?: string;
  affiliatedTo?: string;
  hasAddress?: string;
  hasPhoneNumber?: string;
  hasSocialMedia?: string;
  isMemberOf?: string;
  orders?: string[];
  owns?: string[];
  requests?: string[];
  sells?: string[];

  constructor(
    semanticId: string,
    params?: AgentParams,
  ) {
    super(semanticId, params);
    this.email = params?.email;
    this.logo = params?.logo;
    this.websitePage = params?.websitePage;
    this.affiliatedTo = params?.affiliatedTo;
    this.hasAddress = params?.hasAddress;
    this.hasPhoneNumber = params?.hasPhoneNumber;
    this.hasSocialMedia = params?.hasSocialMedia;
    this.isMemberOf = params?.isMemberOf;
    this.orders = params?.orders;
    this.owns = params?.owns;
    this.requests = params?.requests;
    this.sells = params?.sells;
    this.semanticType = Agent.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:email", () => this.email);
    this.registerSemanticProperty("dfc-b:logo", () => this.logo);
    this.registerSemanticProperty("dfc-b:websitePage", () => this.websitePage);
    this.registerSemanticProperty("dfc-b:affiliatedTo", () => this.affiliatedTo);
    this.registerSemanticProperty("dfc-b:hasAddress", () => this.hasAddress);
    this.registerSemanticProperty("dfc-b:hasPhoneNumber", () => this.hasPhoneNumber);
    this.registerSemanticProperty("dfc-b:hasSocialMedia", () => this.hasSocialMedia);
    this.registerSemanticProperty("dfc-b:isMemberOf", () => this.isMemberOf);
    this.registerSemanticProperty("dfc-b:orders", () => this.orders);
    this.registerSemanticProperty("dfc-b:owns", () => this.owns);
    this.registerSemanticProperty("dfc-b:requests", () => this.requests);
    this.registerSemanticProperty("dfc-b:sells", () => this.sells);
  }
  static {
    SemanticObject.typeRegistry.set(Agent.SEMANTIC_TYPE, Agent);
  }
}
